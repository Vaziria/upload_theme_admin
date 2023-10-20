import { Affix, Button, Card, Col, Form, Row, Space, Spin, message } from "antd";
import React from "react";
import { Prompt, useLocation, useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { useQuery } from "../model/apisdk";
import { FormModel, ProductManualFormModel } from "../model/product_manual/ProductManualForm";
import { getErrMessage } from "../utils/errmsg";

import ProductFormAttribute from "../components/productmanual/ProductFormAttribute";
import ProductFormBasic from "../components/productmanual/ProductFormBasic";
import ProductFormFieldConfig from "../components/productmanual/ProductFormFieldConfig";
import ProductFormProgress from "../components/productmanual/ProductFormProgress";
import ProductFormSync from "../components/productmanual/ProductFormSync";
import ProductFormVariant from "../components/productmanual/ProductFormVariant";
import { ProductManualFormProgressModel } from "../model/product_manual/ProductManualFormProgress";
import { ProductManualUpdateModel } from "../model/product_manual/ProductManualUpdate";

interface Params {
    colid: string
    pid: string
}

const ProductManualForm: React.FC = (): JSX.Element => {

    const goback = useGoBack()
    const location = useLocation()
    const params = useParams<Params>()

    const pid = parseInt(params.pid)
    const formModel = new ProductManualFormModel(pid)
    const [showPromt, setShowPromt] = React.useState(false)

    const { data, pending, error, send: getProduct } = useQuery("GetPdcsourceProductItem")
    const isPublish = !data?.data?.as_draft

    // handle page refresh
    const alertUser = (ev: BeforeUnloadEvent) => {
        ev.preventDefault()
        ev.returnValue = ""
    }

    React.useEffect(() => {
        getProduct({
            query: {
                product_id: pid
            },
            onSuccess({ data }) {
                setShowPromt(true)
                formModel.initializeFields(data)
            },
            onError(err) {
                const msg = getErrMessage(err as Error, "gagal mendapatkan produk.")
                message.error(msg)
                goback("/productmanual/:colid", params)
            }
        })

        window.addEventListener("beforeunload", alertUser)
        return () => window.removeEventListener("beforeunload", alertUser)
    }, [])

    function goBackPromt(promt: boolean) {
        setShowPromt(promt)
        goback("/productmanual/:colid", params)
    }

    const { mutate: checkFs } = useMutation("PostPdcsourceFsCheck")

    const progressModel = new ProductManualFormProgressModel(formModel)
    const updateModel = new ProductManualUpdateModel(formModel)

    const { pending: updatePending, update: updateProduct } = updateModel.useUpdate()
    async function applyUpdateProduct(publish: boolean): Promise<void> {
        try {
            const [isSuccess, responses] = await updateProduct(publish)
            responses.forEach((res) => {
                message.open({
                    content: res.message,
                    type: res.success ? "success" : "error"
                })
            })

            if (isSuccess) {
                goBackPromt(false)
            }

        } catch (err) {
            message.error((err as Error).message)
        }
    }

    return <Row className="mt-3">

        <Prompt when={showPromt} message={(loc) => {
            const sameLoc = location.pathname === loc.pathname
            return sameLoc || "Yakin ingin buang semua perubahan?"
        }} />

        <Col span={6} offset={1} className="pr-3">
            <Space direction="vertical" size="middle" className="c-flex">
                <ProductFormSync />
                <ProductFormProgress progressModel={progressModel} />
            </Space>
        </Col>

        <Col span={16}>
            <Form<FormModel>
                name="productForm"
                form={formModel.form}
                labelCol={{
                    sm: 8,
                    md: 8,
                    lg: 5,
                }}
                wrapperCol={{
                    sm: 16,
                    md: 16,
                    lg: 19,
                }}
                autoComplete="off"
                onFinish={(a) => console.log(a)}
                onFinishFailed={(a) => console.log(a)}
            >
                <Spin tip="Loading..." spinning={pending || !!error}>

                    <ProductFormBasic checker={checkFs} />
                    <ProductFormAttribute />
                    <ProductFormVariant checker={checkFs} />
                    <ProductFormFieldConfig pid={pid} />

                    <Affix offsetBottom={0}>
                        <Card size="small">
                            <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end mb-0">
                                <Space>
                                    <Button disabled={updatePending} onClick={() => goBackPromt(true)}>
                                        Kembali
                                    </Button>
                                    <Button
                                        type={isPublish ? "primary" : "default"}
                                        disabled={updatePending}
                                        loading={updatePending}
                                        onClick={() => applyUpdateProduct(false)}
                                    >
                                        Simpan
                                    </Button>
                                    {!isPublish && <Button
                                        type={"primary"}
                                        disabled={updatePending}
                                        loading={updatePending}
                                        onClick={() => applyUpdateProduct(true)}
                                    >
                                        Simpan & Tampilkan
                                    </Button>}
                                </Space>
                            </Form.Item>
                        </Card>
                    </Affix>
                </Spin>
            </Form>
        </Col>
    </Row>
}

export default ProductManualForm
