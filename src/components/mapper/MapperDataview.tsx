import { Result, Space, Spin } from "antd"
import React from "react"
import { useRecoilState } from "recoil"

import { CategmapQuery } from "../../hooks/search_query/categmap_query"
import { mapperJakmallItemsState, mapperTokpedShopeeItemsState } from "../../recoil/atoms/mapper_items"

import type { MarketList } from "../../model/Common"
import MapperDataRender from "./MapperDataRender"
import TokopediaToShopeeItem from "./mapperitem/TokopediaToShopeeItem"
import JakmallToShopeeItem from "./mapperitem/JakmallToShopeeItem"
import JakmallToTokopediaItem from "./mapperitem/JakmallToTokopediaItem"

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

const MapperJakmallView: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const [items, setItems] = useRecoilState(mapperJakmallItemsState)

    switch (props.query.mode) {

        case "shopee":
            return <MapperDataRender
                query={props.query}
                items={items}
                filterSearch={({ categs }, search) => {
                    search = search.toLowerCase()
                    return categs?.some((categ) => categ?.name.toLowerCase().includes(search))
                }}
                render={(item, key) => <JakmallToShopeeItem
                    key={key}
                    item={item}
                    onChange={(item) => setItems((mapItems) => mapItems.map(
                        (mapItem) => mapItem.name === item.name ? item : mapItem
                    ))}
                />}
                onChange={props.onChange}
            />

        case "tokopedia":
            return <MapperDataRender
                query={props.query}
                items={items}
                filterSearch={({ categs }, search) => {
                    search = search.toLowerCase()
                    return categs?.some((categ) => categ?.name.toLowerCase().includes(search))
                }}
                render={(item, key) => <JakmallToTokopediaItem
                    key={key}
                    item={item}
                    onChange={(item) => setItems((mapItems) => mapItems.map(
                        (mapItem) => mapItem.name === item.name ? item : mapItem
                    ))}
                />}
                onChange={props.onChange}
            />
    }

    return <></>
}

const MapperDataview: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const { from, mode } = props

    if (props.loading) {
        return <Space align="center" direction="vertical" style={{ display: "flex" }}>
            <Spin tip="Loading"><div className="p-5" /></Spin>
        </Space>
    }

    switch (from) {

        case "tokopedia":
            switch (mode) {

                case "shopee":
                    return <MapperTokpedShopeeView {...props} />
            }
            break

        case "jakmall":
            return <MapperJakmallView {...props} />
    }

    return <Result
        status="404"
        title={`unsupported mapping ${from}`}
        subTitle={`mapping kategori ${from} ke ${mode} belum didukung untuk sementara.`}
    />
}

export default MapperDataview
