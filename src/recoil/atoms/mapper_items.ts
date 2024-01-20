import { atom } from "recoil"
import { JkmlCategoryMap, TokopediaMapItem } from "../../model/newapisdk"

export interface MapperTokpedShopeeItem extends TokopediaMapItem {
    unmapped: boolean
}

export interface MapperJakmallShopeeItem extends JkmlCategoryMap {
    unmapped: boolean
}

export const mapperTokpedShopeeItemsState = atom<MapperTokpedShopeeItem[]>({
    key: "mapperTokpedShopeeItems",
    default: [],
})

export const mapperJakmallShopeeItemsState = atom<MapperJakmallShopeeItem[]>({
    key: "mapperJakmallShopeeItems",
    default: [],
})
