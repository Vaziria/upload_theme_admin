import { selectorFamily } from "recoil"

import { ProductCategoryAgg } from "../../model/newapisdk"
import { mapperShopeeCategoryState } from "../atoms/mapper_items"

export const mapperCategoryShopeeState = selectorFamily<ProductCategoryAgg, number>({
    key: "mapperCategoryShopee",
    get: (id) => ({ get }) => {

        const categories = get(mapperShopeeCategoryState)
        return {
            _id: id,
            price_min: 0,
            price_max: 0,
            count: 0,
            name: [],
            ...categories.find((categ) => categ._id === id),
        }
    }
})
