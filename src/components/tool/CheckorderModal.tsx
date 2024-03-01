import { FileDoneOutlined } from "@ant-design/icons"
import { Alert, InputNumber, Modal, Space } from "antd"
import React from "react"

import { CheckOrderQueryCli } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"

interface Props {
    children: (showModal: () => void) => React.ReactNode
    onCheckbot(query: CheckOrderQueryCli): void
}

const defaultOut = "cekorder_report"

const CheckorderModal: React.FC<Props> = (props: Props) => {

    const { children, onCheckbot } = props
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<CheckOrderQueryCli>({
        base: "./",
        filepath: "./data/temp/akun.txt",
        output: defaultOut,
        akun_limit: 7,
        queue_size: 10,
    })

    function showModal() {
        setOpen(true)
    }

    function handleOk() {
        const requery = { ...query }
        if (!requery.output) {
            requery.output = defaultOut
        }
        requery.output += ".csv"

        onCheckbot(requery)
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    return <>
        {children(showModal)}
        <Modal
            title={<span>
                <FileDoneOutlined /> Run Check Order
            </span>}
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{
                style: {
                    background: "#52c41a"
                }
            }}
            okText="Run Check Order"
            onCancel={handleCancel}
            cancelText="Batal"
        >
            <Space direction="vertical" className="d-flex my-4" size="middle">
                <Alert
                    banner
                    type="info"
                    message={<span>nama report boleh dikosongi, default&nbsp;
                        <strong style={{ fontWeight: 500 }}>&quot;{defaultOut}.csv&quot;</strong>
                    </span>}
                />
                <div>
                    <label htmlFor="report_filename">Nama Report</label>
                    <AntdInput
                        id="report_filename"
                        value={query.output}
                        placeholder="nama report"
                        addonAfter=".csv"
                        onChange={(output) => setQuery((q) => ({ ...q, output }))}
                    />
                </div>

                <div>
                    <label htmlFor="akun_limit">Akun Concurrent</label>
                    <InputNumber
                        id="akun_limit"
                        value={query.akun_limit}
                        className="w-100"
                        onChange={(v) => setQuery((q) => ({ ...q, akun_limit: v || 0 }))}
                    />
                </div>
            </Space>
        </Modal>
    </>
}

export default CheckorderModal
