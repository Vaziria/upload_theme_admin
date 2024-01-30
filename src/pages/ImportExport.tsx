import { UploadOutlined } from "@ant-design/icons"
import { Button, Card, Col, Row, Space, message } from "antd"
import { RcFile } from "antd/es/upload"
import { AxiosError } from "axios"
import React from "react"

import ImportCsvFile from "../components/qlobot/ImportCsvFile"
import ImportCsvOptions from "../components/qlobot/ImportCsvOptions"
import { useMutation } from "../hooks/mutation"
import { BaseResponse, QlobotShopeeImportCSVQuery } from "../model/newapisdk"

const ImportExport: React.FC = () => {

    const [query, setQuery] = React.useState<QlobotShopeeImportCSVQuery>({
        namespace: "qlobot",
        per_item: 50
    })
    const [loading, setLoading] = React.useState(false)
    const [csv, setCsv] = React.useState<RcFile>()

    const [messageApi, ctxholder] = message.useMessage()
    const { mutate } = useMutation("PostShopeeV5QlobotShopeeImportCsv")

    function qlobotShopeeImportCsv() {
        if (csv) {
            setLoading(true)
            mutate({
                query,
                onSuccess(res) {
                    messageApi.success(res.message)
                },
                onError(err) {
                    console.log({ ...err })
                    const rerr = err as AxiosError<BaseResponse | undefined>
                    if (rerr.response && rerr.response.data) {
                        messageApi.error(rerr.response.data.message)
                    } else {
                        messageApi.error(err.message)
                    }
                },
            }, {}, { csv })
            setTimeout(() => setLoading(false), 3000)
        }
    }

    return <Row className="mt-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card title="Import Qlobot Shopee CSV">
                <Space direction="vertical" size="large" className="d-flex">

                    <ImportCsvOptions
                        options={query}
                        onChange={(options) => setQuery((q) => ({ ...q, ...options }))}
                    />

                    <ImportCsvFile csv={csv} onChange={setCsv} />

                    <div className="d-flex justify-content-end">
                        <Button
                            type="primary"
                            icon={<UploadOutlined />}
                            style={{ minWidth: 120 }}
                            loading={loading}
                            disabled={!csv || !query.namespace}
                            onClick={qlobotShopeeImportCsv}
                        >
                            Import
                        </Button>
                    </div>
                </Space>
            </Card>
        </Col>
    </Row>
}

export default ImportExport
