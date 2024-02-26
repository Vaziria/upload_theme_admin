import { SyncOutlined } from "@ant-design/icons"
import { Button, Modal, Space } from "antd"
import React from "react"
import { atom, useRecoilState } from "recoil"

import { UpdateTopedCategoryPayload } from "../../model/newapisdk"
import { localStorageEffect } from "../../recoil/effects/persistance"
import AntdInput from "../common/AntdInput"

interface Props {
    loading: boolean
    onUpdate(data: UpdateTopedCategoryPayload): void
}

export const updateTokopediaCategoriesState = atom<UpdateTopedCategoryPayload>({
    key: "updateTokopediaCategories",
    default: {
        username: "",
        password: "",
        secret: ""
    },
    effects: [
        localStorageEffect("update_tokopedia_categories"),
    ]
})

const UpdateTokopedia: React.FC<Props> = (props: Props) => {

    const { loading, onUpdate } = props
    const [show, setShow] = React.useState(false)
    const [payload, setPayload] = useRecoilState(updateTokopediaCategoriesState)

    function onOk() {
        onUpdate(payload)
        setShow(false)
    }

    const disabled = !payload.username ||
        !payload.password ||
        !payload.secret

    return <div>
        <Modal
            title="Update Tokopedia Categories"
            centered
            cancelText="Batal"
            okText="Update Categories"
            okButtonProps={{
                disabled,
                icon: <SyncOutlined />,
                style: {
                    background: disabled ? "#f6ffed" : "#52c41a"
                },
            }}
            open={show}
            onOk={onOk}
            onCancel={() => setShow(false)}
        >
            <Space direction="vertical" size="large" className="d-flex py-4">
                <div>
                    <label htmlFor="utc_username" className="mb-0">Username</label>
                    <AntdInput
                        id="utc_username"
                        value={payload.username}
                        placeholder="masukkan username"
                        onChange={(username) => setPayload((v) => ({ ...v, username }))}
                    />
                </div>

                <div>
                    <label htmlFor="utc_password" className="mb-0">Password</label>
                    <AntdInput
                        id="utc_password"
                        value={payload.password}
                        placeholder="masukkan password"
                        onChange={(password) => setPayload((v) => ({ ...v, password }))}
                    />
                </div>

                <div>
                    <label htmlFor="utc_secret" className="mb-0">OTP Secret</label>
                    <AntdInput
                        id="utc_secret"
                        value={payload.secret}
                        placeholder="masukkan otp secret"
                        onChange={(secret) => setPayload((v) => ({ ...v, secret }))}
                    />
                </div>
            </Space>
        </Modal>

        <Button
            type="primary"
            icon={<SyncOutlined />}
            style={{ background: "#52c41a" }}
            loading={loading}
            onClick={() => setShow(true)}
        >
            Update Tokopedia Categories
        </Button>
    </div>
}

export default UpdateTokopedia
