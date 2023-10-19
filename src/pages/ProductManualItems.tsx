import { Button, Card, Col, Pagination, Row, Tabs, message } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useRecoilState } from "recoil";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { useProductListQuery } from "../hooks/search_query/productlist_query";
import { useQuery } from "../model/apisdk";
import { productManualListState } from "../recoil/atoms/product_manual";
import { getErrMessage } from "../utils/errmsg";

import Dataview from "../components/common/Dataview";
import ProductCard from "../components/productmanual/ProductCard";
import ProductPage from "../components/productmanual/ProductPage";
import ProductSelectAction from "../components/productmanual/ProductSelectAction";
import { ProductManualModel } from "../model/product_manual/ProductManual";

interface Params {
    colid: string
}

const tabItems = [
    {
        label: "Semua",
        key: "all"
    },
    {
        label: "Aktif",
        key: "active"
    },
    {
        label: "Draft",
        key: "draft"
    }
]

const ProductManualItems: React.FC = () => {

    const params = useParams<Params>()
    const history = useHistory()
    const goback = useGoBack()

    const colid = parseInt(params.colid)
    const [productList, setProductList] = useRecoilState(productManualListState)
    const productListModels = productList.data.reduce<ProductManualModel[]>((res, product) => {
        if (product) {
            res.push(new ProductManualModel(product))
        }
        return res
    }, [])

    const [messageApi, contextHolder] = message.useMessage()
    const [pageQuery, setPageQuery] = useProductListQuery(colid)

    const { data: collection, send: getCollection } = useQuery("GetPdcsourceCollectionItem")
    React.useEffect(() => {
        getCollection({
            query: {
                col_id: colid
            }
        })
    }, [])

    const { error, pending, send: getItems } = useQuery("GetPdcsourceProductList")
    React.useEffect(() => {
        getItems({
            query: pageQuery,
            onSuccess(res) {
                if (res.err_msg) {
                    messageApi.success(res.err_msg)
                } else {
                    setProductList(res)
                }
            },
        })
    }, [pageQuery])

    async function openForm(pid?: number) {
        const url = `/productmanual/${params.colid}/update/${pid}`
        history.push(url, { fromParent: true })
    }

    const { mutate: newMutate } = useMutation("GetPdcsourceEditNew", {
        query: {
            coll_id: colid,
        },
        onSuccess: (res) => openForm(res.data?.id),
        onError: () => messageApi.error("gagal membuat produk"),
    })

    const { mutate: deleteMutate } = useMutation("DeletePdcsourceProduct", {
        onSuccess(data) {
            if (data.err_msg) {
                messageApi.error(data.err_msg)
            } else {
                messageApi.success("Produk berhasil dihapus")
                setPageQuery({ page: 1 })
            }
        },
        onError(err) {
            const message = getErrMessage(err)
            messageApi.error(message)
        }
    })


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
                    <span className="c-tx-gray">Total Produk :</span> {productList.count}
                </p>

                <Tabs
                    defaultActiveKey={pageQuery.status}
                    items={tabItems}
                    onChange={(status) => setPageQuery({ status })}
                    tabBarExtraContent={{
                        right: <Button type="primary" icon={<i className="fas fa-plus" />} onClick={() => newMutate({})}>
                            Tambah
                        </Button>
                    }}
                />
                <ProductSelectAction onDelete={(ids) => deleteMutate({}, { ids })} />

                <Dataview
                    data={productListModels}
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
                        showSizeChanger
                        current={productList.page}
                        pageSize={productList.limit}
                        total={productList.count}
                        className="mt-3 c-flex c-justify-center"
                        pageSizeOptions={[10, 20, 30, 50]}
                        onChange={(page, limit) => setPageQuery({ page, limit })}
                    />
                </Dataview>
            </Card>
        </Col>
    </Row>
}

export default ProductManualItems
