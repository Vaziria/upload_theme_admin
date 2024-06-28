import { Alert, Card, Col, Row, Space, message } from "antd"
import React from "react"
import { useSetRecoilState } from "recoil"

import { CategmapQuery, defaultQuery, useCategmapQuery } from "../hooks/search_query/categmap_query"
import type { MarketList } from "../model/Common"
import { useQuery } from "../model/newapisdk"
import { mapperShopeeCategoryState } from "../recoil/atoms/mapper_items"
import { setJakmallMapitemCallback } from "../recoil/callbacks/set_jakmall_mapitem"
import { setShopeeTokpedMapitemCallback } from "../recoil/callbacks/set_shopee_tokped_mapitem"
import { setTokpedShopeeMapitemCallback } from "../recoil/callbacks/set_tokped_shopee_mapitem"

import AntdSelectAddon from "../components/common/AntdSelectAddon"
import MarketplaceSelect from "../components/common/MarketplaceSelect"
import MapperAutoSuggest from "../components/mapper/MapperAutoSuggest"
import MapperDataview from "../components/mapper/MapperDataview"
import MapperFilter from "../components/mapper/MapperFilter"
import MapperSave from "../components/mapper/MapperSave"

const fromDefModes: { [key in MarketList]: MarketList } = {
    shopee: "tokopedia",
    tokopedia: "shopee",
    jakmall: "shopee",
    qlobot_shopee: "tokopedia"
}

const CategMap: React.FC = () => {

    const [loading, setLoading] = React.useState(false)
    const [messageApi, contextHolder] = message.useMessage()
    const [query, setQuery] = useCategmapQuery()
    const onQueryChange = (data: Partial<CategmapQuery>) => {
        setQuery(data)
    }

    const onFromChange = (from?: MarketList) => {
        const mode = fromDefModes[from || "shopee"]
        setQuery({ ...defaultQuery, from: from, mode })
    }

    const onModeChange = (mode?: MarketList) => {
        setQuery({ ...defaultQuery, from: query.from, mode: mode })
    }

    const setTokpedShopeeMapitem = setTokpedShopeeMapitemCallback()
    const setJakmallMapitem = setJakmallMapitemCallback()
    const setShopeeTokpedMapitem = setShopeeTokpedMapitemCallback()
    const setMapperShopeeCategory = useSetRecoilState(mapperShopeeCategoryState)

    const { send: getTokpedShopeeMapper } = useQuery("GetTokopediaMapperCategory")
    const { send: getJakmallMapper } = useQuery("GetJakmallCategoryMapperList")
    const { send: getTokopediaMapper } = useQuery("GetTokopediaMapperMap")
    const { send: getTokopediaCategory } = useQuery("GetLegacyV1ProductCategory")

    const { namespace, mode } = query
    const jakmallLoader = () => {
        if (namespace) {
            getJakmallMapper({
                query: { namespace, type: mode },
                onSuccess: setJakmallMapitem,
            })

        } else {
            setJakmallMapitem({
                msg: "",
                error: "",
                data: []
            })
        }
    }

    const shopeeLoader = (marketplace: MarketList) => {
        if (namespace) {
            getTokopediaCategory({
                query: {
                    kota: "",
                    is_public: false,
                    marketplace,
                    namespace,
                    pmax: 0,
                    pmin: 0,
                    use_empty_city: false
                },
                onSuccess: setMapperShopeeCategory
            })
            getTokopediaMapper({
                query: {
                    qlobot: marketplace === "qlobot_shopee",
                    collection: namespace,
                },
                onSuccess: setShopeeTokpedMapitem,
            })

        } else {
            setMapperShopeeCategory([])
            setShopeeTokpedMapitem({ data: [] })
        }
    }

    const loader: {
        [key in MarketList]?: {
            [key in MarketList]?: () => void
        }
    } = {
        shopee: {
            tokopedia: () => shopeeLoader("shopee"),
        },

        qlobot_shopee: {
            tokopedia: () => shopeeLoader("qlobot_shopee"),
        },

        tokopedia: {
            shopee: () => {
                if (namespace) {
                    getTokpedShopeeMapper({
                        query: { namespace },
                        onSuccess: setTokpedShopeeMapitem,
                    })

                } else {
                    setTokpedShopeeMapitem([])
                }
            }
        },

        jakmall: {
            shopee: jakmallLoader,
            tokopedia: jakmallLoader
        }
    }

    function loadMapItems() {
        setLoading(true)
        loader[query.from]?.[query.mode]?.()
        setLoading(false)
    }

    React.useEffect(
        () => loadMapItems(),
        [query.from, query.mode, query.namespace]
    )

    return <Row className="my-3">
        {contextHolder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Space direction="vertical" size="middle" className="d-flex">
                <Card>
                    <Space direction="vertical" size="middle" className="d-flex">
                        <MapperFilter query={query} onChange={onQueryChange} />
                        <Space className="d-flex justify-content-between">
                            <div className="d-flex gap-1" style={{ gap: 10 }}>
                                <AntdSelectAddon addon="Mapping" style={{ width: "auto" }}>
                                    <Space.Compact>

                                        <MarketplaceSelect
                                            style={{ minWidth: 180, width: 180 }}
                                            value={query.from}
                                            hidemp={["qlobot_shopee"]}
                                            onChange={onFromChange}
                                        />

                                        <MarketplaceSelect
                                            style={{ minWidth: 180, width: 180 }}
                                            value={query.mode}
                                            hidemp={[query.from, "qlobot_shopee"]}
                                            onChange={onModeChange}
                                        />

                                    </Space.Compact>
                                </AntdSelectAddon>
                            </div>

                            <Space>
                                <MapperAutoSuggest
                                    from={query.from}
                                    mode={query.mode}
                                    namespace={query.namespace}
                                    onSuccess={() => {
                                        messageApi.info("running auto suggest")
                                        loadMapItems()
                                    }}
                                    onError={() => messageApi.error("failed to run auto suggest")}
                                />
                                <MapperSave
                                    from={query.from}
                                    mode={query.mode}
                                    onSuccess={loadMapItems}
                                />
                            </Space>
                        </Space>
                    </Space>
                </Card>

                {(query.from === "qlobot_shopee" && query.mode === "tokopedia") && <Alert type="info" className="font-weight-normal" message={<>
                    Mapping <span className="font-weight-bold">&quot;Shopee Qlobot&quot;</span> ke&nbsp;
                    <span className="font-weight-bold">&quot;Tokopedia&quot;</span> sumbernya sama seperti&nbsp;
                    <span className="font-weight-bold">&quot;Shopee&quot;</span> ke&nbsp;
                    <span className="font-weight-bold">&quot;Tokopedia&quot;</span>, mungkin beberapa kategori telah punya mapping
                </>} />}

                <MapperDataview
                    from={query.from}
                    mode={query.mode}
                    query={query}
                    loading={loading}
                    onChange={onQueryChange}
                />
            </Space>
        </Col>
    </Row>
}

export default CategMap
