import { selector, selectorFamily } from "recoil"

import { productManualListState, productManualSelectedState } from "../atoms/product_manual"

export const productManualIsSelectedState = selector<boolean>({
    key: "productManualIsSelected",
    get: ({ get }) => {
        const selectedIds = get(productManualSelectedState)
        return selectedIds.length > 0
    },
})

export const productManualIsSelectedIdState = selectorFamily<boolean, number>({
    key: "productManualIsSelectedId",
    get: (id) => ({ get }) => {
        const selectedIds = get(productManualSelectedState)
        return selectedIds.some((selectId) => selectId === id)
    },
})

export const productManualIsSelectedAllState = selector<boolean>({
    key: "productManualIsSelectedAll",
    get: ({ get }) => {
        const products = get(productManualListState)
        const selectedIds = get(productManualSelectedState)
        return products.data.length > 0 && products.data.every((p) => p && selectedIds.includes(p.id))
    },
})
