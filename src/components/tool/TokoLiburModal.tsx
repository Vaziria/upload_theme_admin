import { ShopOutlined } from "@ant-design/icons"
import { Alert, Modal, Select, Space } from "antd"
import React from "react"

import { TokoLiburQueryCli } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"
import AntdSelectAddon from "../common/AntdSelectAddon"

interface Props {
    children: (showModal: () => void) => React.ReactNode
    onTokoLibur(query: TokoLiburQueryCli): void
}

const defaultOut = "shopee_toko_libur"

const TokoLiburModal: React.FC<Props> = (props: Props) => {

    const { children, onTokoLibur } = props
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<TokoLiburQueryCli>({
        base: "./",
        libur: true,
        report: defaultOut,
        akun: "./data/temp/akun.txt",
    })

    function showModal() {
        setOpen(true)
    }

    function handleOk() {
        const requery = { ...query }
        if (!requery.report) {
            requery.report = defaultOut
        }
        requery.report += ".csv"

        onTokoLibur(requery)
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    return <>
        {children(showModal)}
        <Modal
            title={<span>
                <ShopOutlined /> Toko Libur
            </span>}
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{
                style: { background: "#722ed1" }
            }}
            okText="Run Toko Libur"
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

                <AntdSelectAddon addon="Status Libur">
                    <Select
                        value={query.libur}
                        className="w-100"
                        options={[
                            { value: true, label: "Liburkan Toko" },
                            { value: false, label: "Buka Toko Libur" },
                        ]}
                        onChange={(libur) => setQuery({ ...query, libur })}
                    />
                </AntdSelectAddon>

                <AntdInput
                    id="report_filename"
                    value={query.report}
                    placeholder="nama report"
                    addonBefore="Nama Report"
                    addonAfter=".csv"
                    onChange={(report) => setQuery({ ...query, report })}
                />
            </Space>
        </Modal>
    </>
}

export default TokoLiburModal