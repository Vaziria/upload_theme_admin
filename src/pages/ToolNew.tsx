import { DeleteOutlined, FileDoneOutlined, SaveOutlined, ShopOutlined, UserSwitchOutlined } from "@ant-design/icons"
import { Button, Card, Col, Row, Space, message } from "antd"
import { AxiosError } from "axios"
import React from "react"

import AkunTxt from "../components/tool/AkunTxt"
import CheckbotModal from "../components/tool/CheckbotModal"
import CheckorderModal from "../components/tool/CheckorderModal"
import DeleteModal from "../components/tool/DeleteModal"
import { useMutation } from "../hooks/mutation"
import { BaseWebResponse, CheckOrderQueryCli, CheckbotQueryCli, ConfigDeleteExtraResponse, DeleteConfig, DeleteProductQueryCli, TokoLiburQueryCli, useQuery } from "../model/newapisdk"
import TokoLiburModal from "../components/tool/TokoLiburModal"

const ToolPageNew: React.FC = () => {

    const [akuns, setAkuns] = React.useState("")
    const [messageApi, ctxholder] = message.useMessage()

    const { send: getTempAkun } = useQuery("GetV1AkunTempAkun")
    const { send: getDeleteConfig, data: configDelete } = useQuery("GetLegacyApiConfigDelete")
    const { send: getDeleteConfigProduct, data: configDeleteProduct } = useQuery("GetLegacyApiConfigDeleteProduct")

    const { mutate: saveTempAkun } = useMutation("PostLegacyApiTool")
    const { mutate: saveDeleteConfig } = useMutation("PostLegacyApiConfigDelete")
    const { mutate: saveDeleteConfigProduct } = useMutation("PostLegacyApiConfigDeleteProduct")
    const { mutate: checkbot } = useMutation("GetShopeeV5RunCheckbot")
    const { mutate: checkorder } = useMutation("GetShopeeV5RunCheckOrder")
    const { mutate: deleteProduct } = useMutation("PostShopeeV5RunDeleteProduct")
    const { mutate: tokoLibur } = useMutation("GetShopeeV5RunTokoLibur")

    function errHandler(err: Error) {
        const rerr = err as AxiosError<BaseWebResponse>
        messageApi.error(rerr.response?.data.message || rerr.message)
    }

    function applySaveTempAkun(onSuccess?: (res: BaseWebResponse) => void) {
        saveTempAkun({
            onError: errHandler,
            onSuccess(res) {
                messageApi.success("akunlist saved...")
                onSuccess?.(res)
            }
        }, { data: akuns })
    }

    function applyCheckbot(query: CheckbotQueryCli) {
        applySaveTempAkun(() => {
            checkbot({
                query,
                onError: errHandler,
                onSuccess: () => messageApi.success("check bot running...")
            })
        })
    }

    function applyCheckorder(query: CheckOrderQueryCli) {
        applySaveTempAkun(() => {
            checkorder({
                query,
                onError: errHandler,
                onSuccess: () => messageApi.success("check order running..."),
            })
        })
    }

    function applyDeleteProduct(query: DeleteProductQueryCli, config: DeleteConfig, configProd: ConfigDeleteExtraResponse) {
        applySaveTempAkun(() => saveDeleteConfig({
            onError: errHandler,
            onSuccess: () => saveDeleteConfigProduct({
                onError: errHandler,
                onSuccess: () => deleteProduct({
                    query,
                    onError: errHandler,
                    onSuccess: () => messageApi.success("delete produk running...")
                })
            }, configProd)
        }, config))
    }

    function applyTokoLibur(query: TokoLiburQueryCli) {
        applySaveTempAkun(() => tokoLibur({
            query,
            onError: errHandler,
            onSuccess: () => messageApi.success("toko libur running...")
        }))
    }

    React.useEffect(() => {

        getDeleteConfig({ onError: errHandler })
        getDeleteConfigProduct({ onError: errHandler })
        getTempAkun({
            onSuccess: (res) => setAkuns(res.data),
            onError: errHandler,
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
                            icon={<SaveOutlined style={{ fontSize: 16 }} />}
                            onClick={() => applySaveTempAkun()}
                        >SAVE</Button>

                        <CheckbotModal onCheckbot={applyCheckbot}>
                            {(showModal) => <Button
                                type="primary"
                                className="c-tx-sm"
                                icon={<UserSwitchOutlined style={{ fontSize: 16 }} />}
                                onClick={showModal}
                            >CHECK BOT</Button>}
                        </CheckbotModal>


                        <CheckorderModal onCheckbot={applyCheckorder}>
                            {(showModal) => <Button
                                type="primary"
                                className="c-tx-sm"
                                style={{ background: "#52c41a" }}
                                icon={<FileDoneOutlined style={{ fontSize: 16 }} />}
                                onClick={showModal}
                            >CHECK ORDER</Button>}
                        </CheckorderModal>

                        <DeleteModal
                            initDeleteConfig={configDelete}
                            initDeleteProductConfig={configDeleteProduct?.data}
                            onDeleteProduct={applyDeleteProduct}
                        >
                            {(showModal) => <Button
                                type="primary"
                                danger
                                icon={<DeleteOutlined style={{ fontSize: 16 }} />}
                                className="c-tx-sm"
                                onClick={showModal}
                            >DELETE PRODUK</Button>}
                        </DeleteModal>

                        <TokoLiburModal onTokoLibur={applyTokoLibur}>
                            {(showModal) => <Button
                                type="primary"
                                style={{ background: "#722ed1" }}
                                icon={<ShopOutlined style={{ fontSize: 16 }} />}
                                className="c-tx-sm"
                                onClick={showModal}
                            >TOKO LIBUR</Button>}
                        </TokoLiburModal>
                    </Space>
                </Space>
            </Card>
        </Col>
    </Row>
}

export default ToolPageNew
