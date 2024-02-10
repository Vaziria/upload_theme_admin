import { Button, Space, Typography } from "antd"
import React from "react"

import { CopyOutlined, DeleteOutlined, EditOutlined, ReconciliationOutlined, ReloadOutlined } from "@ant-design/icons"

type Func = () => void | Promise<void>

interface Props {
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

            <Button
                type="primary"
                className="c-tx-sm"
                style={{ background: "#f5222d" }}
                icon={<DeleteOutlined />}
                onClick={props.onDelete}
            >DELETE</Button>

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
                style={{ background: "#2f54eb" }}
                icon={<ReconciliationOutlined />}
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
