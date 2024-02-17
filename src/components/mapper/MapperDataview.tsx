import { Result, Space, Spin } from "antd"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import { CategmapQuery } from "../../hooks/search_query/categmap_query"
import { MapperJakmallItem, mapperJakmallItemsState, mapperShopeeCategoryState, mapperShopeeTokpedItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

import type { MarketList } from "../../model/Common"
import MapperDataRender from "./MapperDataRender"
import JakmallToShopeeItem from "./mapperitem/JakmallToShopeeItem"
import JakmallToTokopediaItem from "./mapperitem/JakmallToTokopediaItem"
import ShopeeToTokopediaItem from "./mapperitem/ShopeeToTokopediaItem"
import TokopediaToShopeeItem from "./mapperitem/TokopediaToShopeeItem"

interface MapperDataviewProps {
    from: MarketList
    mode: MarketList
    query: CategmapQuery
    loading: boolean
    onChange: (data: Partial<CategmapQuery>) => void
}

const MapperTokpedShopeeView: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const [items, setItems] = useRecoilState(mapperTokpedShopeeItemsState)
    return <MapperDataRender
        query={props.query}
        items={items}
        filterSearch={({ tokopedia_category_name: names }, search) => {
            search = search.toLowerCase()
            return names?.some((name) => name.toLowerCase().includes(search))
        }}
        render={(item, key) => <TokopediaToShopeeItem
            key={key}
            item={item}
            onChange={(item) => setItems((mapItems) => {
                return mapItems.map((mapItem) => mapItem.tokopedia_id === item.tokopedia_id ? item : mapItem)
            })}
        />}
        onChange={props.onChange}
    />
}

interface JakmallMapperDataviewProps extends MapperDataviewProps {
    render: (
        item: MapperJakmallItem,
        key: number,
        update: (item: MapperJakmallItem) => void
    ) => React.ReactNode
}

const MapperJakmallView: React.FC<JakmallMapperDataviewProps> = (props: JakmallMapperDataviewProps) => {

    const [items, setItems] = useRecoilState(mapperJakmallItemsState)
    function updateMapper(item: MapperJakmallItem) {
        setItems((items) => items.map((i) => i.name === item.name ? item : i))
    }

    return <MapperDataRender
        query={props.query}
        items={items}
        filterSearch={({ categs }, search) => {
            search = search.toLowerCase()
            return categs?.some((categ) => categ?.name.toLowerCase().includes(search))
        }}
        render={(item, key) => props.render(item, key, updateMapper)}
        onChange={props.onChange}
    />
}

const MapperShopeeTokpedView: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const [items, setItems] = useRecoilState(mapperShopeeTokpedItemsState)
    const categs = useRecoilValue(mapperShopeeCategoryState)

    return <MapperDataRender
        query={props.query}
        items={items}
        filterSearch={({ shopee_id }, search) => {
            search = search.toLowerCase()
            const prod = categs.find((c) => c._id === shopee_id)
            return !!prod?.name?.some((name) => name.toLowerCase().includes(search))
        }}
        render={(item, key) => <ShopeeToTokopediaItem
            key={key}
            item={item}
            onChange={(item) => setItems((mapItems) => {
                return mapItems.map((mapItem) => mapItem.shopee_id === item.shopee_id ? item : mapItem)
            })}
        />}
        onChange={props.onChange}
    />
}

const MapperDataview: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const { from, mode, loading } = props
    if (loading) {
        return <Space align="center" direction="vertical" style={{ display: "flex" }}>
            <Spin tip="Loading"><div className="p-5" /></Spin>
        </Space>
    }

    const mapperView: {
        [key in MarketList]?: {
            [key in MarketList]?: JSX.Element
        }
    } = {
        shopee: {
            tokopedia: <MapperShopeeTokpedView {...props} />
        },

        tokopedia: {
            shopee: <MapperTokpedShopeeView {...props} />
        },

        jakmall: {
            shopee: <MapperJakmallView
                {...props}
                render={(item, key, update) => <JakmallToShopeeItem
                    key={key}
                    item={item}
                    onChange={update}
                />}
            />,
            tokopedia: <MapperJakmallView
                {...props}
                render={(item, key, update) => <JakmallToTokopediaItem
                    key={key}
                    item={item}
                    onChange={update}
                />}
            />
        }
    }

    if (mapperView[from]?.[mode]) {
        return mapperView[from]?.[mode]
    }

    return <Result
        status="404"
        title={`unsupported mapping ${from}`}
        subTitle={`mapping kategori ${from} ke ${mode} belum didukung untuk sementara.`}
    />
}

export default MapperDataview
