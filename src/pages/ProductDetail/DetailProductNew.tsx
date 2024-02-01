import { Card, Col, Empty, Row, Space, message } from "antd"
import React from "react"

import { MarketList } from "../../model/Common"
import { ProductMatchStageQuery, ProductNamespaceAgg, useQuery } from "../../model/newapisdk"
import DetailProductCard from "./DetailProductCard"
import DetailProductFilter from "./DetailProductFilter"
import { useMutation } from "../../hooks/mutation"

export type DetailProductQuery = ProductMatchStageQuery & {
    marketplace: MarketList
}

const DetailProductNew: React.FC = () => {

    const [query, setQuery] = React.useState<DetailProductQuery>({
        is_public: false,
        kota: "",
        marketplace: "shopee",
        namespace: "",
        pmax: 0,
        pmin: 0,
        use_empty_city: false,
    })
    const [items, setItems] = React.useState<ProductNamespaceAgg[]>([])
    const [messageApi, ctxholder] = message.useMessage()

    const { send: getNamespaceAll } = useQuery("GetLegacyV1ProductNamespaceAll")
    const { mutate: renameNamespace } = useMutation("PostV1ProductRenameNamespace")

    React.useEffect(() => {
        getNamespaceAll({
            query,
            onSuccess: setItems,
        })
    }, [query.marketplace])

    function applyRenameNamespace(item: ProductNamespaceAgg, name: string, index: number) {
        renameNamespace({
            onSuccess() {
                messageApi.success(`namespace ${item.name} renamed to ${name}`)
            },
        }, {
            marketplace: query.marketplace,
            namespace: item.name,
            update_namespace: name
        })
        setItems((items) => items.map((item, ind) => {
            if (ind === index) {
                return { ...item, name }
            }
            return item
        }))
    }

    return <Row className="mt-3 mx-2" gutter={[10, 10]}>
        {ctxholder}
        <Col
            span={24}
            lg={{ span: 10 }}
            xl={{ span: 8 }}
        >
            <Card>
                <DetailProductFilter
                    query={query}
                    onChange={(q) => setQuery(query => ({ ...query, ...q }))}
                />

                <Space direction="vertical" size="middle" className="d-flex mt-3">
                    {items.map((item, index) => <DetailProductCard
                        key={index}
                        item={item}
                        onRename={(name) => applyRenameNamespace(item, name, index)}
                    />)}
                </Space>

                {!items.length && <Empty className="mt-1 mb-4" />}
            </Card>
        </Col>
        <Col
            span={24}
            lg={{ span: 14 }}
            xl={{ span: 16 }}
        >
            <Card>
            </Card>
        </Col>
    </Row>
}

export default DetailProductNew