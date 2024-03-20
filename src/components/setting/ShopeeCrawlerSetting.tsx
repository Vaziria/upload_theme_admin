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
        login_timeout: 0
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

            <Divider className="my-0" orientation="left">Akun Crawler</Divider>

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

            <Divider className="mb-0" orientation="left">Global Setting</Divider>

            <div>
                <InputNumber
                    value={setting.login_timeout}
                    addonBefore="Login Timeout"
                    suffix="Detik"
                    className="d-block"
                    style={{ width: 250 }}
                    onChange={(val) => setSetting((v) => ({ ...v, login_timeout: val || 600 }))}
                />
            </div>

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
