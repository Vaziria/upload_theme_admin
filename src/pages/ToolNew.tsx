import { Button, Card, Col, Row, Space, message } from "antd"
import { AxiosError } from "axios"
import React from "react"

import AkunTxt from "../components/tool/AkunTxt"
import DeleteModal from "../components/tool/DeleteModal"
import { useMutation } from "../hooks/mutation"
import { BaseWebResponse, DeleteConfig, DeleteProduct, TempAkunRes, useQuery } from "../model/newapisdk"

const ToolPageNew: React.FC = () => {

    const [akuns, setAkuns] = React.useState("")
    const [deleteConfig, setDeleteConfig] = React.useState<DeleteConfig>({
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
    const [deleteProductConfig, setDeleteProductConfig] = React.useState<DeleteProduct>({
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
    const [messageApi, ctxholder] = message.useMessage()

    const { send: getTempAkun } = useQuery("GetV1AkunTempAkun")
    const { send: getDeleteConfig } = useQuery("GetLegacyApiConfigDelete")
    const { send: getDeleteConfigProduct } = useQuery("GetLegacyApiConfigDeleteProduct")

    const { mutate: saveTempAkun } = useMutation("PostLegacyApiTool")
    const { mutate: saveDeleteConfig } = useMutation("PostLegacyApiConfigDelete")
    const { mutate: saveDeleteConfigProduct } = useMutation("PostLegacyApiConfigDeleteProduct")
    const { mutate: checkbot } = useMutation("GetShopeeV5RunCheckbot")
    const { mutate: checkorder } = useMutation("GetShopeeV5RunCheckOrder")
    const { mutate: deleteProduct } = useMutation("PostShopeeV5RunDeleteProduct")

    function errHandler(err: Error) {
        const rerr = err as AxiosError<BaseWebResponse>
        messageApi.error(rerr.response?.data.message || rerr.message)

    }

    function applySaveTempAkun() {
        saveTempAkun({
            onSuccess() {
                messageApi.success("akunlist saved...")
            },
            onError: errHandler,
        }, {
            data: akuns,
        })
    }

    function applySaveDeleteConfig() {
        saveDeleteConfig({
            onSuccess() {
                messageApi.success("delete config saved...")
            },
            onError: errHandler,
        }, deleteConfig)
    }


    function applySaveDeleteConfigProduct() {
        saveDeleteConfigProduct({
            onSuccess() {
                messageApi.success("delete config product saved...")
            },
            onError: errHandler,
        }, {
            data: deleteProductConfig,
        })
    }


    function applyCheckbot() {
        applySaveTempAkun()
        checkbot({
            onSuccess() {
                messageApi.success("check bot running...")
            },
            onError: errHandler,
        })
    }

    function applyCheckorder() {
        applySaveTempAkun()
        checkorder({
            onSuccess() {
                messageApi.success("check order running...")
            },
            onError: errHandler,
        })
    }

    function applyDeleteProduct() {
        applySaveTempAkun()
        applySaveDeleteConfig()
        applySaveDeleteConfigProduct()
        deleteProduct({
            onSuccess() {
                messageApi.success("delete produk running...")
            },
            onError: errHandler,
        })
    }

    React.useEffect(() => {

        getDeleteConfig({
            onSuccess(res) {
                setDeleteConfig(res)
            },
            onError(err) {
                const rerr = err as AxiosError<TempAkunRes>
                messageApi.error(rerr.response?.data.message || rerr.message)
            },
        })

        getDeleteConfigProduct({
            onSuccess(res) {
                setDeleteProductConfig(res.data)
            },
            onError(err) {
                const rerr = err as AxiosError<TempAkunRes>
                messageApi.error(rerr.response?.data.message || rerr.message)
            },
        })

        getTempAkun({
            onSuccess(res) {
                setAkuns(res.data)
            },
            onError(err) {
                const rerr = err as AxiosError<TempAkunRes>
                messageApi.error(rerr.response?.data.message || rerr.message)
            },
        })
    }, [])

    return <Row className="mt-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card title="Tools">
                <Space direction="vertical" className="d-flex" size="middle">
                    <AkunTxt value={akuns} onChange={setAkuns} />

                    <Space>
                        <Button
                            className="c-tx-sm"
                            onClick={applySaveTempAkun}
                        >SAVE</Button>

                        <Button
                            type="primary"
                            className="c-tx-sm"
                            onClick={applyCheckbot}
                        >CHECK BOT</Button>

                        <Button
                            type="primary"
                            className="c-tx-sm"
                            style={{ background: "#52c41a" }}
                            onClick={applyCheckorder}
                        >CHECK ORDER</Button>

                        <DeleteModal
                            config={deleteConfig}
                            configProd={deleteProductConfig}
                            onConfigChange={(conf) => setDeleteConfig((config) => ({
                                ...config,
                                ...conf
                            }))}
                            onConfigProdChange={(conf) => setDeleteProductConfig((config) => ({
                                ...config,
                                ...conf
                            }))}
                            onDeleteProduct={applyDeleteProduct}
                        >
                            {(showModal) => <Button
                                type="primary"
                                danger
                                className="c-tx-sm"
                                onClick={showModal}
                            >DELETE PRODUK</Button>}
                        </DeleteModal>
                    </Space>
                </Space>
            </Card>
        </Col>
    </Row>
}

export default ToolPageNew
