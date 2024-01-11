import { atom } from "recoil"

import { CategoryNavigation } from "../../model/newapisdk"
import type { IShopeeCateg } from "../../model/shopee/category"
import type { IPublicCateg } from "../../model/shopee/public_category"
import type { ITokpedCateg } from "../../model/tokopedia/category"

export const shopeeSellerCategoriesState = atom<IShopeeCateg[]>({
    key: "shopeeSellerCategoriesStat",
    default: [],
})

export const shopeePublicCategoriesState = atom<IPublicCateg[]>({
    key: "shopeePublicCategories",
    default: [],
})

export const tokopediaPublicCategoriesState = atom<ITokpedCateg[]>({
    key: "tokopediaPublicCategories",
    default: [],
})

export const jakmallCategoriesState = atom<CategoryNavigation[]>({
    key: "jakmallCategories",
    default: [],
})
