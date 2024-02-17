import { Button, Popconfirm, Space, Typography } from "antd"
import React from "react"

import { CopyOutlined, DeleteOutlined, EditOutlined, ReconciliationOutlined, ReloadOutlined } from "@ant-design/icons"

type Func = () => void | Promise<void>

interface Props {
    allowPaste: boolean
    onDelete: Func
    onUpdate: Func
    onCopy: Func
    onPaste: Func
    onResetUploaded: Func
}

const SettingItemAction: React.FC<Props> = (props: Props) => {

    return <div>
        <Typography.Text type="secondary" className="d-block mb-1">Action</Typography.Text>
        <Space>

            <Popconfirm
                title="Delete akun"
                description="Yakin ingin delete akun?"
                onConfirm={props.onDelete}
                okText="Delete"
                cancelText="Batal"
                okButtonProps={{ danger: true }}
            >
                <Button
                    type="primary"
                    className="c-tx-sm"
                    style={{ background: "#f5222d" }}
                    icon={<DeleteOutlined />}
                >DELETE</Button>
            </Popconfirm>

            <Button
                type="primary"
                className="c-tx-sm"
                icon={<EditOutlined />}
                onClick={props.onUpdate}
            >UPDATE</Button>

            <Button
                type="primary"
                className="c-tx-sm"
                style={{ background: "#52c41a" }}
                icon={<CopyOutlined />}
                onClick={props.onCopy}
            >COPY</Button>

            <Button
                type="primary"
                className="c-tx-sm"
                style={{
                    background: props.allowPaste ? "#2f54eb" : "#d6e4ff",
                    borderColor: props.allowPaste ? "" : "transparent"
                }}
                icon={<ReconciliationOutlined />}
                disabled={!props.allowPaste}
                onClick={props.onPaste}
            >PASTE</Button>

            <Button
                danger
                type="primary"
                className="c-tx-sm"
                icon={<ReloadOutlined />}
                onClick={props.onResetUploaded}
            >RESET UPLOADED</Button>
        </Space>
    </div>
}

export default SettingItemAction
