import { selectorFamily } from "recoil"

import { shopeeSellerCategoriesState } from "../atoms/categories"
import type { IShopeeCateg } from "../../model/shopee/category"

export const shopeeCategoryValueState = selectorFamily<IShopeeCateg | undefined, number>({
    key: 'shopeeCategoryValue',
    get: (catid) => ({get}) => {

        const categories = get(shopeeSellerCategoriesState)
        for (const category of categories) {
            if (catid === category.id) {
                return category
            }
        }

        return 
    },
})
