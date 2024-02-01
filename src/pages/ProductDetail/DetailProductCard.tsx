import { Button, Card, Space } from "antd"
import React from "react"

import AntdInput from "../../components/common/AntdInput"
import { ProductNamespaceAgg } from "../../model/newapisdk"
import { CloseOutlined, EditOutlined, EllipsisOutlined, SettingOutlined } from "@ant-design/icons"

interface Props {
    item: ProductNamespaceAgg
    onRename: (name: string) => void
}

const DetailProductCard: React.FC<Props> = (props: Props) => {

    const { item, onRename } = props
    const [rename, setRename] = React.useState<{ name: string, open: boolean }>({
        name: item.name,
        open: false,
    })

    function setRenameName(name: string) {
        setRename((rename) => ({ ...rename, name }))
    }

    function setRenameOpen(open: boolean) {
        setRename((rename) => ({ ...rename, open }))
    }

    return <Card
        actions={[
            <SettingOutlined key="setting" />,
            <EditOutlined key="edit" />,
            <EllipsisOutlined key="ellipsis" />,
        ]}
        type="inner"
        size="small"
        style={{ background: "#f5f5f5" }}
    >
        <Space.Compact className="w-100">
            <AntdInput
                value={rename.name}
                disabled={!rename.open}
                style={{ color: "#1f1f1f" }}
                onChange={setRenameName}
                bordered={rename.open}
            />
            {rename.open && <Button
                icon={<CloseOutlined />}
                onClick={() => setRenameOpen(false)}
            />}
            <Button
                type={rename.open ? undefined : "text"}
                icon={<EditOutlined />}
                onClick={() => {
                    if (rename.open) {
                        onRename(rename.name)
                        setRenameOpen(false)
                    } else {
                        setRenameOpen(true)
                    }
                }}
            />
        </Space.Compact>
        {/* Harga: {item.price_min} */}
    </Card>
}

export default DetailProductCard