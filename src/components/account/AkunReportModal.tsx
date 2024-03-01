import { FileTextOutlined } from "@ant-design/icons"
import { Alert, Modal, Space } from "antd"
import React from "react"

import { ReportQuery } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"

interface Props {
    children: (showModal: () => void) => React.ReactNode
    onReport(query: ReportQuery): void
}

const defaultOut = "akun_report"

const AkunReportModal: React.FC<Props> = (props: Props) => {

    const { children, onReport } = props
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<ReportQuery>({
        output: defaultOut,
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

        onReport(requery)
        setOpen(false)
    }

    function handleCancel() {
        setOpen(false)
    }

    return <>
        {children(showModal)}
        <Modal
            title={<span>
                <FileTextOutlined /> Run Report
            </span>}
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{}}
            okText="Run Report"
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
                        onChange={(out) => setQuery((q) => ({ ...q, out }))}
                    />
                </div>
            </Space>
        </Modal>
    </>
}

export default AkunReportModal
