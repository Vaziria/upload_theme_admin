import { CloudUploadOutlined, DeleteOutlined, FileTextOutlined, ReconciliationOutlined, ReloadOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Col, Popconfirm, Row, Space, message } from "antd"
import React from "react"

import { backup, resetAccount } from "../../api/account"
import { UploadMode } from "../../api/bot_configuration"
import { useQuery } from "../../model/newapisdk"
import AkunActionSetting, { ActionSetting } from "./AkunActionSetting"
import AkunActionShipping from "./AkunActionShipping"

interface Props {
    allowPaste: boolean
    upmode: UploadMode
    setUpmode(upmode: UploadMode): void
    updateAll(): void
    deleteAll(): void
    pasteAll(): void
    refreshAkun(): void
}

const AkunAction: React.FC<Props> = (props: Props) => {
    const [setting, setSetting] = React.useState<ActionSetting>({
        mode: props.upmode,
        limit: 0,
        use_map: false,
        reset_map: false,
        one_to_multi: false,
    })
    const [messageApi, ctxholder] = message.useMessage()

    const { send: tokopediaToShopee } = useQuery("GetUploadV6TokopediaToShopee")
    const { send: manualToShopee } = useQuery("GetUploadV6ManualToShopee")
    const { send: shopeeToShopee } = useQuery("GetUploadV6ShopeeToShopee")
    const { send: qlobotToShopee } = useQuery("GetUploadV6QlobotToShopee")
    const { send: jakmallToShopee } = useQuery("GetUploadV6JakmallToShopee")

    async function deleteAll() {
        if (confirm("Delete..?")) {
            props.deleteAll()
            messageApi.info("Akun deleted...")
        }
    }

    async function resetAkun() {
        await resetAccount()
        props.refreshAkun()
        messageApi.info("Akun reseted...")
    }

    function updateAll() {
        props.updateAll()
        messageApi.info("Akun updated...")
    }

    const runUpload = () => {
        switch (setting.mode) {
            case "tokopedia":
                tokopediaToShopee({
                    query: {
                        base: "./",
                        use_mapper: setting.use_map,
                    }
                })
                break

            case "shopee_manual":
                manualToShopee({
                    query: {
                        base: "./",
                        reset: setting.reset_map,
                        one_to_multi: setting.one_to_multi,
                        limit: setting.limit,
                    },
                })
                break

            case "qlobot_shopee":
                qlobotToShopee({
                    query: {
                        base: "./",
                    },
                })
                break

            case "jakmall":
                jakmallToShopee({
                    query: {
                        base: "./",
                        use_mapper: setting.use_map,
                    },
                })
                break

            default:
                shopeeToShopee({
                    query: {
                        base: "./",
                    },
                })
        }
    }

    return <Space direction="vertical" size="large" className="d-flex">
        {ctxholder}
        <Row gutter={[8, 8]}>
            <Col span={24} md={24} lg={12}>
                <AkunActionSetting
                    setting={setting}
                    onChange={(data) => {
                        data.mode && props.setUpmode(data.mode)
                        setSetting((setting) => ({
                            ...setting,
                            ...data,
                        }))
                    }}
                />
            </Col>

            <Col span={24} md={24} lg={12}>
                <AkunActionShipping />
            </Col>
        </Row>

        <div className="d-flex" style={{ gap: 8 }}>
            <Space className="flex-1">
                <Button
                    type="primary"
                    className="c-tx-sm"
                    icon={<SaveOutlined />}
                    onClick={updateAll}
                >UPDATE CHECKED</Button>

                <Popconfirm
                    title="Delete semua akun"
                    description="Yakin ingin delete semua akun?"
                    onConfirm={deleteAll}
                    okText="Delete"
                    cancelText="Batal"
                    okButtonProps={{ danger: true }}
                >
                    <Button
                        danger
                        type="primary"
                        className="c-tx-sm"
                        icon={<DeleteOutlined />}
                    >DELETE</Button>
                </Popconfirm>

                <Button
                    type="primary"
                    className="c-tx-sm"
                    icon={<ReloadOutlined />}
                    style={{ background: "#fa541c" }}
                    onClick={resetAkun}
                >RESET AKUN</Button>

                <Button
                    className="c-tx-sm"
                    icon={<ReconciliationOutlined />}
                    disabled={!props.allowPaste}
                    onClick={props.pasteAll}
                >PASTE ALL</Button>
            </Space>

            <Button
                className="c-tx-sm"
                icon={<FileTextOutlined />}
                onClick={backup}
            >REPORT</Button>

            <Button
                type="primary"
                className="c-tx-sm"
                icon={<CloudUploadOutlined />}
                onClick={runUpload}
            >UPLOAD</Button>
        </div>
    </Space>
}

export default AkunAction
