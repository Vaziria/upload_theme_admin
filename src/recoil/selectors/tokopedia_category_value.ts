import { selectorFamily } from "recoil"

import { ITokpedCateg } from "../../model/tokopedia/category"
import { tokopediaPublicCategoriesState } from "../atoms/categories"

export const tokopediaCategoryValueState = selectorFamily<ITokpedCateg | undefined, number>({
    key: 'tokopediaCategoryValue',
    get: (catid) => ({get}) => {

        const categories = get(tokopediaPublicCategoriesState)
        for (const category of categories) {
            if (catid.toString() === category._id) {
                return category
            }
        }

        return 
    },
})
