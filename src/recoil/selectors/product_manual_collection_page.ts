import { selector, selectorFamily } from "recoil"

import { Collection } from "../../model/apisdk"
import { productManualCollectionSelectedState, productManualCollectionState } from "../atoms/collection"

export interface ProductManualCollectionPageFilter {
    page: number
    pagesize: number
}

export const productManualCollectionPageState = selectorFamily<[Collection[], number], Readonly<ProductManualCollectionPageFilter>>({
    key: "productManualCollectionPage",
    get: ({ page, pagesize }) => ({ get }) => {

        const collection = get(productManualCollectionState)

        const startIndex = (page - 1) * pagesize
        const nextStartIndex = (page * pagesize)
        const paginate = collection.reduce((res, item) => {
            item && res.push(item)
            return res
        }, [] as Collection[])
        .filter((_, index) => {
            return index >= startIndex && index < nextStartIndex
        })

        return [paginate, collection.length]
    },
})

export const productManualCollectionIsSelectedState = selector<boolean>({
    key: "productManualCollectionIsSelected",
    get: ({ get }) => {
        const selectedIds = get(productManualCollectionSelectedState)
        return selectedIds.length > 0
    },
})

export const productManualCollectionIsSelectedIdState = selectorFamily<boolean, number>({
    key: "productManualCollectionIsSelectedIdState",
    get: (id) => ({ get }) => {
        const selectedIds = get(productManualCollectionSelectedState)
        return selectedIds.some((selectId) => selectId === id)
    },
})
