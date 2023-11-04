import { Card, Col, Divider, Row, Space } from "antd"
import React from "react"
import { useQuery } from 'react-query'
import { useSetRecoilState } from "recoil"

import { getCategoryMappers } from "../api/mapper"
import type { MarketList } from "../model/Common"
import { MapperItemState, mapperItemsState } from "../recoil/atoms/mapper_items"

import MarketplaceSelect from "../components/common/MarketplaceSelect"
import MapperAction from "../components/mapper/MapperAction"
import MapperDataview from "../components/mapper/MapperDataview"
import MapperFilter, { MapperFilterData } from "../components/mapper/MapperFilter"
import { defaultQuery, useCategmapQuery } from "../hooks/search_query/categmap_query"

const CategMap: React.FC = () => {

    const [query, setQuery] = useCategmapQuery()
    const onFilterChange = (data: MapperFilterData) => {
        setQuery(data)
    }

    const onModeChange = (mode?: MarketList) => {
        setQuery({ ...defaultQuery, mode: mode })
    }

    const setMapperItems = useSetRecoilState(mapperItemsState)
    const { isLoading } = useQuery({
        queryKey: ["categoryMapperItems", query.namespace],
        queryFn: () => getCategoryMappers({ namespace: query.namespace || "" })
            .then((mapper) => setMapperItems(mapper.map<MapperItemState>((map) => ({
                ...map,
                unmapped: map.shopee_id === 0,
            })))),
        refetchOnWindowFocus: false,
    })

    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card>
                <MapperFilter
                    mode={query.mode}
                    data={query}
                    onChange={onFilterChange}
                />

                <Divider />

                <Space style={{ display: 'flex', justifyContent: "space-between" }}>
                    <MarketplaceSelect
                        style={{ minWidth: 180, width: 180 }}
                        value={query.mode}
                        onChange={onModeChange}
                    />

                    <MapperAction filter={query} mode={query.mode} />
                </Space>
                
                <Divider />

                <MapperDataview
                    mode={query.mode}
                    filter={query}
                    loading={isLoading}
                />
            </Card>
        </Col>
    </Row>
}

export default CategMap
