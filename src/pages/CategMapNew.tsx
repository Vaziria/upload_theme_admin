import { Card, Col, Row, Space, message } from "antd"
import React from "react"

import { CategmapQuery, defaultQuery, useCategmapQuery } from "../hooks/search_query/categmap_query"
import type { MarketList } from "../model/Common"
import { useQuery } from "../model/newapisdk"
import { setJakmallMapitemCallback } from "../recoil/callbacks/set_jakmall_mapitem"
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

    const { send: getTokpedShopeeMapper } = useQuery("GetTokopediaMapperCategory")
    const { send: getJakmallMapper } = useQuery("GetJakmallCategoryMapperList")

    function loadMapItems() {
        setLoading(true)

        const namespace = query.namespace
        switch (query.from) {

            case "tokopedia":
                switch (query.mode) {

                    case "shopee":
                        getTokpedShopeeMapper({
                            query: { namespace },
                            onSuccess: setTokpedShopeeMapitem,
                        })
                }
                break

            case "jakmall":
                getJakmallMapper({
                    query: { namespace, type: query.mode },
                    onSuccess: setJakmallMapitem,
                })
                break
        }

        setLoading(false)
    }

    React.useEffect(
        () => loadMapItems(),
        [query.from, query.mode, query.namespace]
    )

    return <Row className="mt-3">
        {contextHolder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card>

                <MapperFilter query={query} onChange={onQueryChange} />

                <Space className="mt-3 d-flex justify-content-between">
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

                <MapperDataview
                    from={query.from}
                    mode={query.mode}
                    query={query}
                    loading={loading}
                    onChange={onQueryChange}
                />
            </Card>
        </Col>
    </Row>
}

export default CategMap
