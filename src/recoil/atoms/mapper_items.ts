import { atom } from "recoil"
import { JkmlCategoryMap, TokopediaMapItem } from "../../model/newapisdk"

export interface MapperTokpedShopeeItem extends TokopediaMapItem {
    unmapped: boolean
}

export interface MapperJakmallItem extends JkmlCategoryMap {
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
