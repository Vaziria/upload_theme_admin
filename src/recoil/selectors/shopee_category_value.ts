import { selectorFamily } from "recoil"

import { shopeeCategoryManifestState } from "../atoms/manifest"
import type { IShopeeCateg } from "../../model/shopee/category"

export const shopeeCategoryValueState = selectorFamily<IShopeeCateg | undefined, number>({
    key: 'shopeeCategoryValue',
    get: (catid) => ({get}) => {

        const categories = get(shopeeCategoryManifestState).sellerCategories
        for (const category of categories) {
            if (catid === category.id) {
                return category
            }
        }

        return 
    },
})
