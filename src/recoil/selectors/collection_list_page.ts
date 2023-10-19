import { selector, selectorFamily } from "recoil"

import { collectionListSelectedState, collectionListState } from "../atoms/collection_list"

export const productManualCollectionIsSelectedState = selector<boolean>({
    key: "productManualCollectionIsSelected",
    get: ({ get }) => {
        const selectedIds = get(collectionListSelectedState)
        return selectedIds.length > 0
    },
})

export const productManualCollectionIsSelectedIdState = selectorFamily<boolean, number>({
    key: "productManualCollectionIsSelectedId",
    get: (id) => ({ get }) => {
        const selectedIds = get(collectionListSelectedState)
        return selectedIds.some((selectId) => selectId === id)
    },
})

export const productManualCollectionIsSelectedAllState = selector<boolean>({
    key: "productManualCollectionIsSelectedAll",
    get: ({ get }) => {
        const collections = get(collectionListState)
        const selectedIds = get(collectionListSelectedState)
        return collections.data.length > 0 && collections.data.every((col) => col && selectedIds.includes(col.id))
    },
})
