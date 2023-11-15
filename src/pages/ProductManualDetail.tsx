import { Affix, Card, Col, Image, Row, Space, Spin, Tooltip, message } from "antd";
import React from "react";
import { useParams } from "react-router-dom";

import { useSetShopeeAttribute } from "../recoil/callbacks/set_shopee_attribute";
import noimg from "../assets/images/no-image.webp";
import { useGoBack } from "../hooks/back";
import { useQuery } from "../model/newapisdk";
import { ProductManualModel } from "../model/product_manual/ProductManual";
import { getErrMessage } from "../utils/errmsg";

import DetailShopeeAttribute from "../components/productmanual/detail/DetailShopeeAttribute";
import ProductPage from "../components/productmanual/ProductPage";
import DetailDesc from "../components/productmanual/detail/DetailDesc";
import DetailFieldConfig from "../components/productmanual/detail/DetailFieldConfig";
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

    const [selectVariant, setSelectVariant] = React.useState<string[]>([])
    function onSelect(index: number, value: string) {
        const selected = [...selectVariant]
        if (selected[index] === value) {
            selected[index] = ""
        } else {
            selected[index] = value
        }
        setSelectVariant(selected)
    }

    const setAttributes = useSetShopeeAttribute()
    const { data, pending, send: getProduct } = useQuery("GetPdcsourceProductItem")
    const product = new ProductManualModel(data?.data, selectVariant)

    React.useEffect(() => {
        getProduct({
            query: {
                product_id: pid
            },
            onSuccess(res) {
                const prod = new ProductManualModel(res.data)
                const shopeeAttribute = prod.getShopeeAttribute()
                if (shopeeAttribute?.attributes) {
                    setAttributes(shopeeAttribute.categories)
                }
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
                        <Affix offsetTop={16}>
                            <div>
                                <Image
                                    src={product.getImageUrl()}
                                    fallback={noimg}
                                    width={300}
                                    height={300}
                                    style={{
                                        borderRadius: "8px",
                                        objectFit: "cover"
                                    }}
                                />
                            </div>
                        </Affix>
                        <Space direction="vertical" size="large" className="d-flex">

                            <DetailInfo product={product} />
                            <DetailShopeeAttribute product={product} />
                            <DetailVariant product={product} onSelect={onSelect} />
                            <DetailFieldConfig product={product} />
                            <DetailDesc product={product} />

                        </Space>
                    </div>
                </Card>
            </Spin>
        </Col>
    </Row>
}

export default ProductManualDetail
