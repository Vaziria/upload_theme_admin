import { Card, Col, Row, Space, Spin, Tooltip, Typography, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useQuery } from "../model/apisdk";
import { ProductManualModel } from "../model/product_manual/ProductManual";
import { getErrMessage } from "../utils/errmsg";

import DetailDesc from "../components/productmanual/detail/DetailDesc";
import DetailImage from "../components/productmanual/detail/DetailImage";
import DetailInfo from "../components/productmanual/detail/DetailInfo";
import DetailVariant from "../components/productmanual/detail/DetailVariant";
import DetailFieldConfig from "../components/productmanual/detail/DetailFieldConfig";

interface Params {
    colid: string
    pid: string
}

const ProductManualDetail: React.FC = () => {

    const goback = useGoBack()
    const params = useParams<Params>()

    const pid = parseInt(params.pid)
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
                goback("/productmanual/:colid", params)
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
                <Card
                    title={<Tooltip title={product.title}>
                        <Typography.Title ellipsis level={4}>
                            {product.title}
                        </Typography.Title>
                    </Tooltip>}
                >
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
