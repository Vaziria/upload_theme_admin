import { UserSwitchOutlined } from "@ant-design/icons"
import { Alert, Modal, Space } from "antd"
import React from "react"

import { CheckbotQueryCli } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"

interface Props {
    children: (showModal: () => void) => React.ReactNode
    onCheckbot(query: CheckbotQueryCli): void
}

const defaultOut = "cekbot_report"

const CheckbotModal: React.FC<Props> = (props: Props) => {

    const { children, onCheckbot } = props
    const [open, setOpen] = React.useState(false)
    const [query, setQuery] = React.useState<CheckbotQueryCli>({
        base: "./",
        cek: "./data/temp/akun.txt",
        out: defaultOut,
    })

    function showModal() {
        setOpen(true)
    }

    function handleOk() {
        const requery = { ...query }
        if (!requery.out) {
            requery.out = defaultOut
        }
        requery.out += ".csv"

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
                <UserSwitchOutlined /> Run Check Bot
            </span>}
            centered
            open={open}
            onOk={handleOk}
            okButtonProps={{}}
            okText="Run Check Bot"
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
                        value={query.out}
                        placeholder="nama report"
                        addonAfter=".csv"
                        onChange={(out) => setQuery((q) => ({ ...q, out }))}
                    />
                </div>
            </Space>
        </Modal>
    </>
}

export default CheckbotModal
