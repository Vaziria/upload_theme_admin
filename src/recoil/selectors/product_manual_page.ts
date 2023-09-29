import { selector, selectorFamily } from "recoil"

import { productManualSelectedState, productManualState } from "../atoms/product_manual"

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
        const products = get(productManualState)
        const selectedIds = get(productManualSelectedState)
        return products.length > 0 && products.every((p) => p && selectedIds.includes(p.id))
    },
})
