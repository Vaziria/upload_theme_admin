import { atom } from "recoil"

import type { IShopeeCateg } from "../../model/shopee/category"
import type { IPublicCateg } from "../../model/shopee/public_category"

export interface ShopeeeCategoryManifest {
    sellerCategories: IShopeeCateg[]
    publicCategories: IPublicCateg[]
}

export const shopeeCategoryManifestState = atom<ShopeeeCategoryManifest>({
    key: "shopeeCategoryManifest",
    default: {
        sellerCategories: [],
        publicCategories: [],
    },
})