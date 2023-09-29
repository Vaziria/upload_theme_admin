import { Affix, Button, Card, Col, Form, Row, Space, Spin, Typography, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { BasicUpdatePayload, UpdateFieldConfigPayload, UpdateVariationPayload, useQuery } from "../model/apisdk";
import { getErrMessage } from "../utils/errmsg";

import ProductEditProgress from "../components/productmanual/ProductEditProgress";
import DescForm from "../components/productmanual/form/DescForm";
import ImageCollectionPathForm from "../components/productmanual/form/ImageCollectionPathForm";
import PriceForm from "../components/productmanual/form/PriceForm";
import StockForm from "../components/productmanual/form/StockForm";
import TitleForm from "../components/productmanual/form/TitleForm";
import UseMarkupForm from "../components/productmanual/form/UseMarkupForm";
import UseVariantForm from "../components/productmanual/form/UseVariantForm";
import VariantDetailForm from "../components/productmanual/form/VariantDetailForm";
import VariantOptionForm from "../components/productmanual/form/VariantOptionForm";
import WeightForm from "../components/productmanual/form/WeightForm";
import { ProductManualFormModel } from "../model/product_manual/ProductManualForm";
import FieldConfigForm from "../components/productmanual/form/FieldConfigForm";

interface Params {
    colid: string
    pid: string
}

const ProductManualForm: React.FC = (): JSX.Element => {

    const params = useParams<Params>()
    const goback = useGoBack()

    const [messageApi, contextHolder] = message.useMessage()
    const [basicForm] = Form.useForm<BasicUpdatePayload>()
    const [variantForm] = Form.useForm<UpdateVariationPayload>()
    const [fieldConfigForm] = Form.useForm<UpdateFieldConfigPayload>()

    const { data, pending, error, send: getProduct } = useQuery("GetPdcsourceProductItem")
    React.useEffect(() => {
        getProduct({
            query: {
                product_id: parseInt(params.pid)
            },
            onSuccess({ data }) {

                basicForm.setFieldsValue({
                    image_collection_path: data?.image_collection_path,
                    title: data?.title,
                    desc: data?.desc,
                    price: data?.price,
                    stock: data?.stock,
                    weight: data?.weight,
                    use_markup: data?.use_markup,
                    use_variant: data?.use_variant
                })

                variantForm.setFieldsValue({
                    variant: data?.variant,
                    variant_option: data?.variant_option
                })
            },
            onError(err) {
                const message = getErrMessage(err as Error, "gagal mendapatkan produk.")
                messageApi.error(message, 1000)
                setTimeout(() => goback("/productmanual/:colid", params), 1000)
            }
        })
    }, [])
    
    const { mutate: checkFs } = useMutation("PostPdcsourceFsCheck")
    const { mutate: updateBasic } = useMutation("PostPdcsourceEditSetBasic")
    const { mutate: updateVariant } = useMutation("PostPdcsourceEditVariationUpdate")

    async function updateProduct(): Promise<void> {

        const pid = parseInt(params.pid)
        const formModel = new ProductManualFormModel(pid, basicForm, variantForm)

        const basicPayload = await formModel.getBasicPayload()
        if (basicPayload.validate) {
            updateBasic({
                onSuccess: () => messageApi.info("informasi produk tersimpan."),
                onError: (err) => {
                    const message = getErrMessage(err as Error, "gagal menyimpan informasi produk.")
                    messageApi.error(message)
                }
            }, basicPayload.data)
        } else {
            messageApi.warning(basicPayload.message)
        }

        const useVariant = basicForm.getFieldValue("use_variant")
        if (useVariant) {
            const variantPayload = await formModel.getVariantPayload()
            if (variantPayload.validate) {
                updateVariant({
                    onSuccess: () => messageApi.info("variasi produk tersimpan."),
                    onError: (err) => {
                        const message = getErrMessage(err as Error, "gagal menyimpan variasi produk.")
                        messageApi.error(message)
                    }
                }, variantPayload.data)
            } else {
                messageApi.warning(variantPayload.message)
            }
        }
    }

    const useVariant = Form.useWatch("use_variant", basicForm)

    return <Row className="mt-3">
        {contextHolder}
        <Col span={6} offset={1} className="pr-3">
            <ProductEditProgress />
        </Col>
        <Col span={16}>

            <Spin tip="Loading..." spinning={pending || !!error}>
                <Form<BasicUpdatePayload>
                    name="basicProduct"
                    form={basicForm}
                    className="mb-3"
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
                    <Card id="productbasic">
                        <h5 className="c-bold mb-3">Informasi Produk</h5>
                        
                        <ImageCollectionPathForm cheker={checkFs} />
                        <TitleForm />
                        <DescForm />
                        <PriceForm />
                        <StockForm />
                        <WeightForm />
                        <UseMarkupForm />
                    </Card>
                </Form>

                <Card id="productbasic" className="mb-3">
                    <h5 className="c-bold mb-3">Variasi Produk</h5>

                    <Form form={basicForm}>
                        <UseVariantForm form={basicForm} variantForm={variantForm} />
                    </Form>

                    <Form<UpdateVariationPayload>
                        name="productvariation"
                        form={variantForm}
                        autoComplete="off"
                    >
                        {useVariant && <>
                            <VariantOptionForm form={variantForm} />
                            <VariantDetailForm
                                form={variantForm}
                                cheker={checkFs}
                                initialVariants={data?.data?.variant}
                            />
                        </>}
                    </Form>
                </Card>

                <Card id="productfieldconfig" className="mb-3">
                    <h5 className="c-bold mb-3">Field Config</h5>
                    <p>Gunakan field config yang tersedia untuk meredaksi field produk ketika diupload.</p>

                    <Form form={fieldConfigForm}>
                        <FieldConfigForm form={fieldConfigForm} />
                    </Form>
                </Card>
                
                <Form form={fieldConfigForm}>
                    <Form.Item noStyle shouldUpdate>
                        {() => (
                        <Typography>
                            <pre>{JSON.stringify(fieldConfigForm.getFieldsValue(), null, 2)}</pre>
                        </Typography>
                        )}
                    </Form.Item>
                </Form>
                <div id="productfinish" />

                <Affix offsetBottom={0}>
                    <Card size="small">
                        <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end mb-0">
                            <Space>
                                <Button onClick={() => goback("/productmanual/:colid", params)}>
                                    Kembali
                                </Button>
                                <Button type="primary" onClick={updateProduct}>
                                    Simpan Produk
                                </Button>
                            </Space>
                        </Form.Item>
                    </Card>
                </Affix>
            </Spin>
        </Col>
    </Row>
}

export default ProductManualForm
