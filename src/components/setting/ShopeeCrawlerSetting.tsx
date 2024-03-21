import { GlobalOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Card, Divider, Input, InputNumber, Space, message } from "antd"
import React from "react"

import { CrawlerConfig, useQuery } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"
import { useMutation } from "../../hooks/mutation"

const ShopeeCrawlerSetting: React.FC = () => {

    const [messageApi, ctxholder] = message.useMessage()
    const [setting, setSetting] = React.useState<CrawlerConfig>({
        username: "",
        password: "",
        email: "",
        email_password: "",
        login_timeout: 0,
        email_validate_timeout: 0,
        login_reply_attempt: 0,
    })

    const { send: getSetting } = useQuery("GetLegacyShopeeCrawlerSetting")
    const { mutate: saveSetting } = useMutation("PutLegacyShopeeCrawlerSetting")

    function applySaveSetting() {
        saveSetting({
            onSuccess: () => messageApi.success("shopee browser setting saved"),
        }, setting)
    }

    React.useEffect(() => {
        getSetting({ onSuccess: setSetting })
    }, [])

    return <Card title={<>
        <GlobalOutlined /> Shopee Browser Setting
    </>}>
        {ctxholder}
        <Space direction="vertical" size="middle" className="d-flex">

            <label className="mb-0">Akun Crawler</label>

            <Space wrap size="middle">
                <AntdInput
                    value={setting.username}
                    addonBefore="Username"
                    style={{ width: 350 }}
                    onChange={(username) => setSetting((v) => ({ ...v, username }))}
                />
                <Input.Password
                    value={setting.password}
                    addonBefore="Password"
                    style={{ width: 350 }}
                    onChange={(val) => setSetting((v) => ({ ...v, password: val.target.value }))}
                />
            </Space>
            <Space wrap size="middle">
                <AntdInput
                    value={setting.email}
                    addonBefore="Email"
                    style={{ width: 350 }}
                    onChange={(email) => setSetting((v) => ({ ...v, email }))}
                />
                <Input.Password
                    value={setting.email_password}
                    addonBefore="Email Password"
                    style={{ width: 350 }}
                    onChange={(val) => setSetting((v) => ({ ...v, email_password: val.target.value }))}
                />
            </Space>

            <Divider className="mb-0 mt-2" />
            <label className="mb-0">Global Setting</label>

            <InputNumber
                value={setting.login_reply_attempt}
                addonBefore="Login Attempt"
                className="d-block"
                style={{ width: 350 }}
                onChange={(val) => setSetting((v) => ({ ...v, login_reply_attempt: val || 600 }))}
            />

            <Space wrap size="middle">
                <InputNumber
                    value={setting.login_timeout}
                    addonBefore="Login Timeout"
                    suffix="detik"
                    className="d-block"
                    style={{ width: 350 }}
                    onChange={(val) => setSetting((v) => ({ ...v, login_timeout: val || 600 }))}
                />
                <InputNumber
                    value={setting.email_validate_timeout}
                    addonBefore="Email Validate Timeout"
                    suffix="detik"
                    className="d-block"
                    style={{ width: 350 }}
                    onChange={(val) => setSetting((v) => ({ ...v, captcha_timeout: val || 600 }))}
                />
            </Space>

            <div className="d-flex justify-content-end">
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    onClick={applySaveSetting}
                >Simpan Setting</Button>
            </div>
        </Space>
    </Card>
}

export default ShopeeCrawlerSetting
