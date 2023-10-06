import { Card, Col, Pagination, Row, message } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { ProductListQuery, useQuery } from "../model/apisdk";
import { productManualState } from "../recoil/atoms/product_manual";
import { productManualCollectionIdState } from "../recoil/selectors/product_manual_collection_page";
import { getErrMessage } from "../utils/errmsg";

import Dataview from "../components/common/Dataview";
import ProductCard from "../components/productmanual/ProductCard";
import ProductPage from "../components/productmanual/ProductPage";
import ProductSelectAction from "../components/productmanual/ProductSelectAction";
import ProductStatusTabs from "../components/productmanual/ProductStatusTabs";
import { ProductManualModel } from "../model/product_manual/ProductManual";

interface Params {
    colid: string
}

const ProductManualItems: React.FC = () => {

    const params = useParams<Params>()
    const history = useHistory()
    const goback = useGoBack()

    const colid = parseInt(params.colid)
    const collection = useRecoilValue(productManualCollectionIdState(colid))
    const setProducts = useSetRecoilState(productManualState)

    const [messageApi, contextHolder] = message.useMessage()

    const query: ProductListQuery = {
        coll_id: colid,
    }
    const { data, error, pending, send: getItems } = useQuery("GetPdcsourceProductList")
    React.useEffect(() => getItems({
        query,
        onSuccess: (res) => setProducts(res.data),
    }), [])

    async function openForm(pid?: number) {
        const url = `/productmanual/${params.colid}/update/${pid}`
        history.push(url, { fromParent: true })
    }

    const { mutate: newMutate } = useMutation("GetPdcsourceEditNew", {
        onSuccess: (res) => openForm(res.data?.id),
        onError: () => messageApi.error("gagal membuat produk"),
    })

    const { mutate: deleteMutate } = useMutation("DeletePdcsourceProduct", {
        onSuccess(data) {
            if (data.err_msg) {
                messageApi.error(data.err_msg)
            } else {
                messageApi.success("Produk berhasil dihapus")
                getItems({
                    query,
                    onSuccess: (res) => setProducts(res.data)
                })
            }
        },
        onError(err) {
            const message = getErrMessage(err)
            messageApi.error(message)
        }
    })

    const products = data?.data.reduce((res, product) => {
        if (product) {
            res.push(new ProductManualModel(product))
        }
        return res
    }, [] as ProductManualModel[])


    return <Row className="mt-3">
        {contextHolder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card>
                <ProductPage.Title onBack={() => goback("/productmanual")}>
                    {collection?.name}
                </ProductPage.Title>

                <p className="c-bolder mt-2">
                    <span className="c-tx-gray">Total Produk :</span> {data?.data.length}
                </p>

                <ProductStatusTabs onCreate={() => newMutate({ query })} />
                <ProductSelectAction deleteMutate={deleteMutate} />

                <Dataview
                    data={products}
                    loading={pending}
                    error={!!error}
                    errorTitle="Halaman Produk Error"
                    errorDesc={error?.message}
                    emptyTitle="Produk Kosong"
                    emptyDesc="Silahkan tambah produk terlebih dahulu."
                    gutter={[12, 12]}
                    colprops={{
                        xs: {
                            span: 24
                        },
                        sm: {
                            span: 24
                        },
                        md: {
                            span: 12
                        },
                        lg: {
                            span: 12
                        },
                        xl: {
                            span: 8
                        },
                        xxl: {
                            span: 6
                        }
                    }}
                    render={(product) => <ProductCard
                        colid={colid}
                        product={product}
                        onDelete={() => deleteMutate({}, { ids: [product.id] })}
                    />}
                >
                    <Pagination
                        className="mt-3 c-flex c-justify-center"
                        pageSize={1}
                        total={15}
                        pageSizeOptions={[10, 20, 30, 50]}
                    />
                </Dataview>
            </Card>
        </Col>
    </Row>
}

export default ProductManualItems
