import { atom } from "recoil"
import { JkmlCategoryMap, ProductCategoryAgg, ShopeeMapItem, TokopediaMapItem } from "../../model/newapisdk"

export interface MapperTokpedShopeeItem extends TokopediaMapItem {
    unmapped: boolean
}

export interface MapperJakmallItem extends JkmlCategoryMap {
    unmapped: boolean
}

export interface MapperShopeeTokpedItem extends ShopeeMapItem {
    unmapped: boolean
}

export const mapperTokpedShopeeItemsState = atom<MapperTokpedShopeeItem[]>({
    key: "mapperTokpedShopeeItems",
    default: [],
})

export const mapperJakmallItemsState = atom<MapperJakmallItem[]>({
    key: "mapperJakmallShopeeItems",
    default: [],
})

export const mapperShopeeCategoryState = atom<ProductCategoryAgg[]>({
    key: "mapperShopeeCategory",
    default: [],
})

export const mapperShopeeTokpedItemsState = atom<MapperShopeeTokpedItem[]>({
    key: "mapperShopeeTokpedItems",
    default: [],
})
