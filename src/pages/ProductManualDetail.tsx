import { Card, Col, Row, Space, Spin, Tooltip, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useQuery } from "../model/apisdk";
import { ProductManualModel } from "../model/product_manual/ProductManual";
import { getErrMessage } from "../utils/errmsg";

import ProductPage from "../components/productmanual/ProductPage";
import DetailDesc from "../components/productmanual/detail/DetailDesc";
import DetailFieldConfig from "../components/productmanual/detail/DetailFieldConfig";
import DetailImage from "../components/productmanual/detail/DetailImage";
import DetailInfo from "../components/productmanual/detail/DetailInfo";
import DetailVariant from "../components/productmanual/detail/DetailVariant";

interface Params {
    colid: string
    pid: string
}

const ProductManualDetail: React.FC = () => {

    const goback = useGoBack()
    const params = useParams<Params>()

    const pid = parseInt(params.pid)
    const onBack = () => goback("/productmanual/:colid", params)

    const { data, pending, send: getProduct } = useQuery("GetPdcsourceProductItem")
    const product = new ProductManualModel(data?.data)

    React.useEffect(() => {
        getProduct({
            query: {
                product_id: pid
            },
            onError(err) {
                const msg = getErrMessage(err as Error, "gagal mendapatkan produk.")
                message.error(msg)
                onBack()
            }
        })
    }, [])

    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Spin spinning={pending} tip="Loading">
                <Card title={
                    <ProductPage.Title onBack={() => goback("/productmanual")}>
                        <Tooltip title={product.title} placement="bottomLeft">
                            {product.title}
                        </Tooltip>
                    </ProductPage.Title>
                }>
                    <div className="d-flex c-gap-6 mb-4">
                        <DetailImage product={product} />
                        <Space direction="vertical" size="large" className="d-flex">

                            <DetailInfo product={product} />
                            <DetailVariant product={product} />
                            <DetailFieldConfig product={product} />

                        </Space>
                    </div>

                    <DetailDesc product={product} />
                </Card>
            </Spin>
        </Col>
    </Row>
}

export default ProductManualDetail
