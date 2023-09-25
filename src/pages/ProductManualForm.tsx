import { Affix, Button, Card, Col, Form, Row, Space, Spin, Typography } from "antd";
import React from "react";
import { useParams } from "react-router-dom";


import ProductEditProgress from "../components/productmanual/ProductEditProgress";
import DescForm from "../components/productmanual/form/DescForm";
import ImageCollectionPathForm from "../components/productmanual/form/ImageCollectionPathForm";
import PriceForm from "../components/productmanual/form/PriceForm";
import StockForm from "../components/productmanual/form/StockForm";
import TitleForm from "../components/productmanual/form/TitleForm";
import UseMarkupForm from "../components/productmanual/form/UseMarkupForm";
import UseVariantForm from "../components/productmanual/form/UseVariantForm";
import VariantOptionForm from "../components/productmanual/form/VariantOptionForm";
import WeightForm from "../components/productmanual/form/WeightForm";
import { useGoBack } from "../hooks/back";
import { BasicUpdatePayload, UpdateFieldConfigPayload, UpdateVariationPayload, useQuery } from "../model/apisdk";
import VariantDetailForm from "../components/productmanual/form/VariantDetailForm";

interface Params {
    colid: string
    pid: string
}

const ProductManualFormComp: React.FC = (): JSX.Element => {

    const params = useParams<Params>()
    const [basicForm] = Form.useForm<BasicUpdatePayload>()
    const [variantForm] = Form.useForm<UpdateVariationPayload>()
    const [fieldConfigForm] = Form.useForm<UpdateFieldConfigPayload>()
    
    const { pending, send: getProduct } = useQuery("GetPdcsourceProductItem")
    React.useEffect(() => {
        getProduct({
            query: {
                product_id: parseInt(params.pid)
            },
        })
    }, [])

    const useVariant = Form.useWatch("use_variant", basicForm)

    const goback = useGoBack()

    return <Row className="mt-3">
        <Col span={6} offset={1} className="pr-3">
            <ProductEditProgress />
        </Col>
        <Col span={16}>

            <Spin tip="Loading..." spinning={pending}>
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
                        
                        <ImageCollectionPathForm form={basicForm} />
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
                        <UseVariantForm form={basicForm} />
                    </Form>

                    <Form<UpdateVariationPayload>
                        name="productvariation"
                        form={variantForm}
                    >
                        {useVariant && <>
                            <VariantOptionForm />
                            <VariantDetailForm form={variantForm} />
                        </>}
                    </Form>
                </Card>
                
                <Form form={variantForm}>
                    <Form.Item noStyle shouldUpdate>
                        {() => (
                        <Typography>
                            <pre>{JSON.stringify(variantForm.getFieldsValue(), null, 2)}</pre>
                        </Typography>
                        )}
                    </Form.Item>
                </Form>

                <Affix offsetBottom={0}>
                    <Card size="small">
                        <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end mb-0">
                            <Space>
                                <Button onClick={() => goback("/productmanual/:colid", params)}>
                                    Kembali
                                </Button>
                                <Button type="primary" onClick={() => {
                                    basicForm.submit()
                                    variantForm.submit()
                                    const val = basicForm.getFieldsValue()
                                    const vari = variantForm.getFieldsValue()
                                    console.log(val, vari)
                                }}>
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

export default ProductManualFormComp
