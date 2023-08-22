import { selectorFamily } from "recoil"

import { mapperItemsState } from "../atoms/mapper_items"
import type { MapperItem } from "../../api/mapper"
import type { MarketList } from "../../model/Common"

export type MapperMode =  MarketList | "all"

export interface MapperPageFilter {
    mode: MapperMode,
    search: string
    unmapped: boolean
    page: number
    pagesize: number
}

export const mapperItemsPageState = selectorFamily<[MapperItem[], number], Readonly<MapperPageFilter>>({
    key: "mapperItemsPage",
    get: ({ mode, search, unmapped, page, pagesize }) => ({get}) => {

        const mapperItems = get(mapperItemsState)
        let items = [...mapperItems]

        switch(mode) {

            case "shopee":
                items = items
                    .filter((item) => !unmapped || !item.tokopedia_id)
                    .filter((item) => {
                        return item.shopee_category_name
                            ?.some((name) => name.toLowerCase().includes(search.toLowerCase()))
                    })
                    .sort((a, b) =>
                        (a.shopee_category_name?.join("") || "") >
                        (b.shopee_category_name?.join("") || "") ?
                        1 : -1
                    )
                break
            
            case "tokopedia":
                items = items
                    .filter((item) => !unmapped || !item.shopee_id)
                    .filter((item) => {
                        return item.tokopedia_category_name
                            ?.some((name) => name.toLowerCase().includes(search))
                    })
                    .sort((a, b) =>
                        (a.tokopedia_category_name?.join("") || "") >
                        (b.tokopedia_category_name?.join("") || "") ?
                        1 : -1
                    )
                break
        }

        const paginateItems = items.filter((_, index) => {
            const itemPage = Math.ceil((index + 1) / pagesize)
            return itemPage == page
        })
        return [paginateItems, items.length]
    },
})
