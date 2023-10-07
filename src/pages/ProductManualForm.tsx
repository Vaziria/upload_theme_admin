import { Affix, Button, Card, Col, Form, Row, Space, Spin, message } from "antd";
import React from "react";
import { Prompt, useLocation, useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { useQuery } from "../model/apisdk";
import { FormModel, ProductManualFormModel } from "../model/product_manual/ProductManualForm";
import { getErrMessage } from "../utils/errmsg";

import ProductFormBasic from "../components/productmanual/ProductFormBasic";
import ProductFormFieldConfig from "../components/productmanual/ProductFormFieldConfig";
import ProductFormProgress from "../components/productmanual/ProductFormProgress";
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

    const { mutate: checkFs } = useMutation("PostPdcsourceFsCheck")
    const { mutate: mutateBasic, pending: basicPending } = useMutation("PostPdcsourceEditSetBasic", {})
    const { mutate: mutateVariant, pending: variantPending } = useMutation("PostPdcsourceEditVariationUpdate", {})
    const { mutate: mutateFieldConfig, pending: fieldConfigPending } = useMutation("PostPdcsourceEditFieldConfig", {})
    const { mutate: mutateCreateField } = useMutation("PostPdcsourceSpinFieldConfig", {})
    const { mutate: mutateDeleteField } = useMutation("DeletePdcsourceSpinFieldConfig", {})
    const { mutate: mutatePublish, pending: publishPending } = useMutation("PutPdcsourceEditPublish", {})

    const updateBasic = new ProductManualUpdateModel(mutateBasic, {
        success: "informasi produk tersimpan",
        error: "gagal menyimpan informasi produk",
    })
    const updateVariant = new ProductManualUpdateModel(mutateVariant, {
        success: "variasi produk tersimpan",
        error: "gagal menyimpan variasi produk",
    })
    const updateFieldConfig = new ProductManualUpdateModel(mutateFieldConfig, {
        success: "field config tersimpan",
        error: "gagal menyimpan field config",
    })
    const updatePublish = new ProductManualUpdateModel(mutatePublish, {
        success: "produk ditampilkan",
        error: "gagal menampilkan produk",
    })

    const progressModel = new ProductManualFormProgressModel(formModel)
    const isLoading = basicPending || variantPending || fieldConfigPending || publishPending

    async function updateProduct(publish: boolean): Promise<void> {
        try {
            const payload = await formModel.getPayload()
            const promises = [
                updateBasic.update(payload.basic),
                updateFieldConfig.update(payload.fieldConfig)
            ]
            if (payload.basic.use_variant) {
                promises.push(updateVariant.update(payload.variant),)
            }
            const responses = await Promise.all(promises)

            responses.forEach((res) => message.open({
                content: res.message,
                type: res.success ? "success" : "error"
            }))

            const isSuccess = responses.every((res) => res.success)
            if (isSuccess) {
                if (publish) {
                    const res = await updatePublish.update({ product_id: pid })
                    message.open({
                        content: res.message,
                        type: res.success ? "success" : "error"
                    })

                    if (res.success) {
                        setShowPromt(false)
                        goback("/productmanual/:colid", params)
                    }
                } else {
                    setShowPromt(false)
                    goback("/productmanual/:colid", params)
                }
            }

        } catch (err) {
            message.error((err as Error).message)
        }
    }

    function onBackPromt(promt: boolean) {
        setShowPromt(promt)
        goback("/productmanual/:colid", params)
    }

    return <Row className="mt-3">

        <Prompt when={showPromt} message={(loc) => {
            const sameLoc = location.pathname === loc.pathname
            return sameLoc || "Yakin ingin buang semua perubahan?"
        }} />

        <Col span={6} offset={1} className="pr-3">
            <ProductFormProgress progressModel={progressModel} />
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
                    <ProductFormVariant checker={checkFs} />
                    <ProductFormFieldConfig pid={pid} createField={mutateCreateField} deleteField={mutateDeleteField} />

                    <Affix offsetBottom={0}>
                        <Card size="small">
                            <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end mb-0">
                                <Space>
                                    <Button disabled={isLoading} onClick={() => onBackPromt(true)}>
                                        Kembali
                                    </Button>
                                    <Button
                                        type={isPublish ? "primary" : "default"}
                                        disabled={isLoading}
                                        loading={isLoading}
                                        onClick={() => updateProduct(false)}
                                    >
                                        Simpan
                                    </Button>
                                    {!isPublish && <Button
                                        type={"primary"}
                                        disabled={isLoading}
                                        loading={isLoading}
                                        onClick={() => updateProduct(true)}
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
