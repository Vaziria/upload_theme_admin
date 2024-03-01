import { DeleteOutlined } from "@ant-design/icons"
import { Alert, InputNumber, Modal, Space } from "antd"
import React from "react"

import { ConfigDeleteExtraResponse, DeleteConfig, DeleteProduct, DeleteProductQueryCli } from "../../model/newapisdk"
import DeleteConfigCategory from "./DeleteConfigCategory"
import DeleteConfigHarga from "./DeleteConfigHarga"
import DeleteConfigKeyword from "./DeleteConfigKeyword"
import DeleteDateRange from "./DeleteDateRange"
import DeleteGroupCheck from "./DeleteGroupCheck"
import AntdInput from "../common/AntdInput"

interface Props {
    initDeleteConfig?: DeleteConfig | null
    initDeleteProductConfig?: DeleteProduct
    children: (showModal: () => void) => React.ReactNode
    onDeleteProduct(query: DeleteProductQueryCli, config: DeleteConfig, configProd: ConfigDeleteExtraResponse): void
}

const defaultOut = "delete_report"

const DeleteModal: React.FC<Props> = (props: Props) => {

    const { initDeleteConfig, initDeleteProductConfig, children, onDeleteProduct } = props

    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<DeleteProductQueryCli>({
        base: "./",
        report: defaultOut,
    })
    const [config, setConfig] = React.useState<DeleteConfig>({
        akun: "",
        awaltanggal: "",
        blokir: false,
        delete: 0,
        diarsipkan: false,
        diperiksa: false,
        sold: 0,
        tanggal: "",
        view: 0
    })
    const [configProd, setConfigProd] = React.useState<DeleteProduct>({
        fil_category: false,
        fil_harga: false,
        fil_keyword: false,
        category: [],
        harga: {
            min: 0,
            max: 0
        },
        keyword: "",
    })

    React.useEffect(() => {
        setConfig((conf) => ({ ...conf, ...initDeleteConfig }))
        setConfigProd((conf) => ({ ...conf, ...initDeleteProductConfig }))
    }, [initDeleteConfig, initDeleteProductConfig])

    function showModal() {
        setOpen(true)
    }

    function handleOk() {
        const requery = { ...query }
        if (!requery.report) {
            requery.report = defaultOut
        }
        requery.report += ".csv"

        onDeleteProduct(requery, config, {
            data: configProd,
            name: ""
        })
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    return <>
        {children(showModal)}
        <Modal
            title={<span>
                <DeleteOutlined /> Delete Produk
            </span>}
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{
                danger: true,
            }}
            okText="Run Delete Produk"
            onCancel={handleCancel}
            cancelText="Batal"
        >
            <Space direction="vertical" className="d-flex py-4" size="middle">

                <Alert
                    banner
                    type="info"
                    message={<span>nama report boleh dikosongi, default&nbsp;
                        <strong style={{ fontWeight: 500 }}>&quot;{defaultOut}.csv&quot;</strong>
                    </span>}
                />

                <AntdInput
                    id="report_filename"
                    value={query.report}
                    placeholder="nama report"
                    addonBefore="Nama Report"
                    addonAfter=".csv"
                    onChange={(report) => setQuery((q) => ({ ...q, report }))}
                />

                <InputNumber
                    value={config.delete}
                    className="w-100"
                    addonBefore="Limit Delete"
                    onChange={(val) => setConfig((v) => ({ ...v, delete: val || 0 }))}
                />

                <div className="d-flex" style={{ gap: 10 }}>
                    <InputNumber
                        value={config.view}
                        className="w-100"
                        addonBefore="Max View"
                        onChange={(val) => setConfig((v) => ({ ...v, view: val || 0 }))}
                    />
                    <InputNumber
                        value={config.sold}
                        className="w-100"
                        addonBefore="Max Sold"
                        onChange={(val) => setConfig((v) => ({ ...v, sold: val || 0 }))}
                    />
                </div>

                <DeleteDateRange
                    value={config}
                    onChange={(value) => setConfig((v) => ({ ...v, ...value }))}
                />

                <DeleteGroupCheck
                    value={config}
                    onChange={(value) => setConfig((v) => ({ ...v, ...value }))}
                />

                <DeleteConfigKeyword
                    value={configProd}
                    onChange={(conf) => setConfigProd((v) => ({ ...v, ...conf }))}
                />

                <DeleteConfigCategory
                    value={configProd}
                    onChange={(conf) => setConfigProd((v) => ({ ...v, ...conf }))}
                />

                <DeleteConfigHarga
                    value={configProd}
                    onChange={(conf) => setConfigProd((v) => ({ ...v, ...conf }))}
                />
            </Space>
        </Modal>
    </>
}

export default DeleteModal