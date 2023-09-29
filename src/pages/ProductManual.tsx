import { Card, Col, Pagination, Row, message } from "antd"
import React from "react"
import { withRouter } from "react-router-dom"

import { useRecoilValue, useSetRecoilState } from "recoil"
import { useMutation } from "../hooks/mutation"
import { useQuery } from "../model/apisdk"
import { productManualCollectionState } from "../recoil/atoms/collection"
import { ProductManualCollectionPageFilter, productManualCollectionPageState } from "../recoil/selectors/product_manual_collection_page"

import Dataview from "../components/common/Dataview"
import CollectionAdd from "../components/productmanual/CollectionAdd"
import CollectionCard from "../components/productmanual/CollectionCard"
import CollectionSelectAction from "../components/productmanual/CollectionSelectAction"

const ProductManual: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage()

    const [filter, setFilter] = React.useState<ProductManualCollectionPageFilter>({
        page: 1,
        pagesize: 20
    })
    const [collections, total] = useRecoilValue(productManualCollectionPageState(filter))

    const setCollections = useSetRecoilState(productManualCollectionState)
    const { error, pending, send: getCollections } = useQuery("GetPdcsourceCollectionList")

    const { pending: createLoading, mutate: createCollection } = useMutation("PostPdcsourceCollectionCreate", {
        onSuccess(res) {
            if (res.err_msg) {
                messageApi.success(res.err_msg)
            } else {
                messageApi.success(`collection ${res.name} berhasil dibuat.`)
                getCollections({
                    onSuccess(res) {
                        setCollections(res.data)
                    }
                })
            }
        },
        onError() {
            messageApi.error("gagal membuat collection.")
        }
    })

    const { pending: deleteLoading, mutate: deleteCollection } = useMutation("DeletePdcsourceCollection", {
        onSuccess() {
            messageApi.success("collection berhasil dihapus.")
            getCollections({
                onSuccess(res) {
                    setCollections(res.data)
                    setFilter((paging) => ({ ...paging, page: 1 }))
                }
            })
        },
        onError() {
            messageApi.error("gagal menghapus collection.")
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
                <h4 className="c-bold">Collection</h4>
                <p className="c-bolder">
                    <span className="c-tx-gray">Total Collection :</span> {total}
                </p>

                <CollectionAdd className="my-3" loading={createLoading} mutate={createCollection} />
                <CollectionSelectAction deleteMutate={deleteCollection} />

                <Dataview
                    data={collections}
                    loading={pending}
                    error={!!error}
                    errorTitle="Halaman Collection Error"
                    errorDesc={error?.message}
                    emptyTitle="Collection Kosong"
                    emptyDesc="Silahkan tambah collection terlebih dahulu."
                    gutter={[12, 12]}
                    colprops={{
                        xs:{
                            span: 24
                        },
                        sm:{
                            span: 24
                        },
                        md:{
                            span: 12
                        },
                    }}
                    render={(col) => <CollectionCard
                        collection={col}
                        deleteLoading={deleteLoading}
                        deleteMutate={deleteCollection}
                    />}
                >
                    <Pagination
                        showSizeChanger
                        current={filter.page}
                        pageSize={filter.pagesize}
                        total={total}
                        className="mt-3 c-flex c-justify-center"
                        pageSizeOptions={[10, 20, 30, 50]}
                        onChange={(page, pagesize) => {
                            setFilter({  page, pagesize })
                        }}
                    />
                </Dataview>
            </Card>
        </Col>
    </Row>
}

export default withRouter(ProductManual)
