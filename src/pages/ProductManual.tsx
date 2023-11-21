import { Card, Col, Pagination, Row, message } from "antd"
import React from "react"
import { withRouter } from "react-router-dom"

import { useRecoilState } from "recoil"
import { useMutation } from "../hooks/mutation"
import { useCollectionListQuery } from "../hooks/search_query/collectionlist_query"
import { useQuery } from "../model/newapisdk"
import { collectionListState } from "../recoil/atoms/collection_list"

import Dataview from "../components/common/Dataview"
import CollectionAdd from "../components/productmanual/CollectionAdd"
import CollectionCard from "../components/productmanual/CollectionCard"
import CollectionSelectAction from "../components/productmanual/CollectionSelectAction"

const ProductManual: React.FC = () => {
    const [messageApi, contextHolder] = message.useMessage()

    const [collectionList, setCollectionList] = useRecoilState(collectionListState)
    const { error, pending, send: getCollectionList } = useQuery("GetPdcsourceCollectionList")

    const [pageQuery, setPageQuery] = useCollectionListQuery()

    React.useEffect(() => {
        getCollectionList({
            query: pageQuery,
            onSuccess(res) {
                if (res.err_msg) {
                    messageApi.success(res.err_msg)
                } else {
                    setCollectionList(res)
                }
            }
        })
    }, [pageQuery])

    const { pending: createLoading, mutate: createCollection } = useMutation("PostPdcsourceCollectionCreate", {
        onSuccess(res) {
            if (res.err_msg) {
                messageApi.success(res.err_msg)
            } else {
                messageApi.success(`collection ${res.name} berhasil dibuat.`)
                setPageQuery({})
            }
        },
        onError() {
            messageApi.error("gagal membuat collection.")
        }
    })

    const { pending: deleteLoading, mutate: deleteCollection } = useMutation("DeletePdcsourceCollection", {
        onSuccess() {
            messageApi.success("collection berhasil dihapus.")
            setPageQuery({ page: 1 })
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
                    <span className="c-tx-gray">Total Collection :</span> {collectionList.count}
                </p>

                <CollectionAdd className="my-3" loading={createLoading} mutate={createCollection} />
                <CollectionSelectAction deleteMutate={deleteCollection} />

                <Dataview
                    data={collectionList.data}
                    loading={pending}
                    error={!!error}
                    errorTitle="Halaman Collection Error"
                    errorDesc={error?.message}
                    emptyTitle="Collection Kosong"
                    emptyDesc="Silahkan tambah collection terlebih dahulu."
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
                    }}
                    render={(col) => col ? <CollectionCard
                        collection={col}
                        deleteLoading={deleteLoading}
                        deleteMutate={deleteCollection}
                    /> : <></>}
                >
                    <Pagination
                        showSizeChanger
                        current={collectionList.page}
                        pageSize={collectionList.limit}
                        total={collectionList.count}
                        className="mt-3 c-flex c-justify-center"
                        pageSizeOptions={[10, 20, 30, 50]}
                        onChange={(page, limit) => setPageQuery({ page, limit })}
                    />
                </Dataview>
            </Card>
        </Col>
    </Row>
}

export default withRouter(ProductManual)
