import { Button, Card, Col, Divider, Form, Row, Space } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import CollectionHeader from "../components/productmanual/CollectionHeader";
import DescForm from "../components/productmanual/form/DescForm";
import PriceForm from "../components/productmanual/form/PriceForm";
import TitleForm from "../components/productmanual/form/TitleForm";
import { ProductManualForm } from "../model/product_manual/ProductManulForm";
import ImageCollectionPathForm from "../components/productmanual/form/ImageCollectionPathForm";

interface Params {
    collection_name: string
    product_id?: string
}

const ProductManualFormComp: React.FC = (): JSX.Element => {

    const params = useParams<Params>()
    const edit = params.product_id ? 1 : 0
    const headerTitle = {
        0: `${params.collection_name} - Tambah Produk`,
        1: `${params.collection_name} - Edit Produk`
    }

    const onFinish = (values: ProductManualForm) => {
        console.log('Success:', values);
    }
    const onFinishFailed = (errorInfo: any) =>{
        console.log(errorInfo)
    }

    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card>
                <CollectionHeader
                    collection_name={params.collection_name}
                    title={headerTitle[edit]}
                />
                <p className="c-bolder mt-2 c-tx-gray mb-3">
                    Lengkapi informasi produkmu atau simpan sebagai &quot;draft&quot; untuk diselesaikan lain waktu.
                </p>

                <Form
                    name="basic"
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
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >

                    <Divider />
                    <h5 className="c-bold mb-3">Informasi Produk</h5>
                    
                    <ImageCollectionPathForm />
                    <TitleForm />
                    <PriceForm />
                    <DescForm />

                    <Divider />
                    <h5 className="c-bold mb-3">Variasi Produk</h5>

                    <Divider />
                    <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end">
                        <Space className="mt-3">
                            <Button htmlType="submit">
                                Simpan Draft
                            </Button>
                            <Button type="primary" htmlType="submit">
                                Simpan Produk
                            </Button>
                        </Space>
                    </Form.Item>
                </Form>
            </Card>
        </Col>
    </Row>
}

export default ProductManualFormComp
