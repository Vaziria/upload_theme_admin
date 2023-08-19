import { selectorFamily } from "recoil"

import { mapperItemsState } from "../atoms/mapper_items"
import type { MapperItem } from "../../api/mapper"
import type { MarketList } from "../../model/Common"

export type MapperMode =  MarketList | "all"

export const mapperItemsPageState = selectorFamily<MapperItem[], { mode: MapperMode, page: number, pagesize: number }>({
    key: "mapperItemsPage",
    get: ({ mode, page, pagesize }) => ({get}) => {

        const mapperItems = get(mapperItemsState)
        let items = [...mapperItems]

        switch(mode) {

            case "shopee":
                items = items.sort((a, b) =>
                    (a.shopee_category_name?.join("") || "") >
                    (b.shopee_category_name?.join("") || "") ?
                    1 : -1
                )
                break
            
            case "tokopedia":
                items = items.sort((a, b) =>
                    (a.tokopedia_category_name?.join("") || "") >
                    (b.tokopedia_category_name?.join("") || "") ?
                    1 : -1
                )
                break
        }

        return items.filter((_, index) => {
            const itemPage = Math.ceil((index + 1) / pagesize)
            return itemPage == page
        })
    },
})
