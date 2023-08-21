import React from "react"
import { StaticContext } from "react-router"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { useQuery } from 'react-query'
import { Card, Col, Divider, Row, Space } from "antd"
import { useSetRecoilState } from "recoil"

import { getCategoryMappers } from "../api/mapper"
import { mapperItemsState } from "../recoil/atoms/mapper_items"
import { createSearchParams } from "../utils/params"
import type { MarketList } from "../model/Common"

import MarketplaceSelect from "../components/common/MarketplaceSelect"
import MapperFilter, { MapperFilterData } from "../components/mapper/MapperFilter"
import MapperAction from "../components/mapper/MapperAction"
import MapperDataview from "../components/mapper/MapperDataview"

interface CategMapState extends MapperFilterData {
    mode: MarketList
}
type CategMapParams = {[key in keyof CategMapState]: string}
type Props = RouteComponentProps<CategMapParams, StaticContext, Partial<CategMapState>>

const CategMap: React.FC<Props> = (props: Props) => {

    const state: CategMapState = {
        mode: "tokopedia",
        search: "",
        unmapped: false,
        ...props.location.state,
    }

    const statePush = (state: CategMapState) => {
        const search = createSearchParams({ ...state })
        props.history.push({
            pathname: "/categmap",
            search,
            state: state,
        })
    }

    const onFilterChange = (data: MapperFilterData) => {
        statePush({ ...state, ...data })
    }

    const onModeChange = (mode?: MarketList) => {
        statePush({
            ...state,
            mode: mode || "shopee",
            namespace: ""
        })
    }

    const setMapperItems = useSetRecoilState(mapperItemsState)
    const { isLoading } = useQuery({
        queryKey: ["categoryMapperItems", state.namespace],
        queryFn: () => getCategoryMappers({ namespace: state.namespace || "" })
            .then(setMapperItems),
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
                    mode={state.mode}
                    data={state}
                    onChange={onFilterChange}
                />

                <Divider />

                <Space style={{ display: 'flex', justifyContent: "space-between" }}>
                    <MarketplaceSelect
                        style={{ minWidth: 180, width: 180 }}
                        value={state.mode}
                        onChange={onModeChange}
                    />

                    <MapperAction filter={state} mode={state.mode} />
                </Space>
                
                <Divider />

                <MapperDataview
                    mode={state.mode}
                    filter={state}
                    loading={isLoading}
                />
            </Card>
        </Col>
    </Row>
}

export default withRouter(CategMap)
