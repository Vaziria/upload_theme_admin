import { Card, Col, Row, Space, message } from "antd"
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

type Mp = Exclude<MarketList, "qlobot_shopee">

const fromDefModes: { [key in Mp]: Mp } = {
    "shopee": "tokopedia",
    "tokopedia": "shopee",
    "jakmall": "shopee",
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

    const loader: {
        [key in MarketList]?: {
            [key in MarketList]?: () => void
        }
    } = {
        shopee: {
            tokopedia: () => {
                if (namespace) {
                    getTokopediaCategory({
                        query: {
                            kota: "",
                            is_public: false,
                            marketplace: "shopee",
                            namespace,
                            pmax: 0,
                            pmin: 0,
                            use_empty_city: false
                        },
                        onSuccess: setMapperShopeeCategory
                    })
                    getTokopediaMapper({
                        query: { collection: namespace },
                        onSuccess: setShopeeTokpedMapitem,
                    })

                } else {
                    setMapperShopeeCategory([])
                    setShopeeTokpedMapitem({ data: [] })
                }
            }
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
                                            onChange={onFromChange}
                                        />

                                        <MarketplaceSelect
                                            style={{ minWidth: 180, width: 180 }}
                                            value={query.mode}
                                            hidemp={[query.from]}
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
