import { InputNumber, Modal, Space } from "antd"
import React from "react"

import { DeleteConfig, DeleteProduct } from "../../model/newapisdk"
import DeleteConfigCategory from "./DeleteConfigCategory"
import DeleteConfigHarga from "./DeleteConfigHarga"
import DeleteConfigKeyword from "./DeleteConfigKeyword"
import DeleteDateRange from "./DeleteDateRange"
import DeleteGroupCheck from "./DeleteGroupCheck"

interface Props {
    config: DeleteConfig
    configProd: DeleteProduct
    children: (showModal: () => void) => React.ReactNode
    onConfigChange(config: Partial<DeleteConfig>): void
    onConfigProdChange(config: Partial<DeleteProduct>): void
    onDeleteProduct(): void
}

const DeleteModal: React.FC<Props> = (props: Props) => {

    const {
        config, configProd, children,
        onConfigChange, onConfigProdChange, onDeleteProduct
    } = props
    const [open, setOpen] = React.useState(false)

    function showModal() {
        setOpen(true)
    }

    function handleOk() {
        onDeleteProduct()
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    return <>
        {children(showModal)}
        <Modal
            title="Delete Produk"
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{
                danger: true,
            }}
            okText="Delete Produk"
            onCancel={handleCancel}
            cancelText="Batal"
        >
            <Space direction="vertical" className="d-flex" size="middle">

                <InputNumber
                    value={config.delete}
                    className="w-100"
                    addonBefore="Limit Delete"
                    onChange={(v) => onConfigChange({ delete: v || 0 })}
                />

                <div className="d-flex" style={{ gap: 10 }}>
                    <InputNumber
                        value={config.view}
                        className="w-100"
                        addonBefore="Max View"
                        onChange={(v) => onConfigChange({ view: v || 0 })}
                    />
                    <InputNumber
                        value={config.sold}
                        className="w-100"
                        addonBefore="Max Sold"
                        onChange={(v) => onConfigChange({ sold: v || 0 })}
                    />
                </div>

                <DeleteDateRange
                    value={config}
                    onChange={(value) => onConfigChange(value)}
                />

                <DeleteGroupCheck
                    value={config}
                    onChange={(value) => onConfigChange(value)}
                />

                <DeleteConfigKeyword
                    value={configProd}
                    onChange={(conf) => onConfigProdChange(conf)}
                />

                <DeleteConfigCategory
                    value={configProd}
                    onChange={(conf) => onConfigProdChange(conf)}
                />

                <DeleteConfigHarga
                    value={configProd}
                    onChange={(conf) => onConfigProdChange(conf)}
                />
            </Space>
        </Modal>
    </>
}

export default DeleteModal