import { atom } from "recoil"
import { CollectionResList } from "../../model/newapisdk"

export const collectionSelectState = atom<CollectionResList["data"]>({
    key: "collectionSelect",
    default: []
})

export const collectionListState = atom<Omit<CollectionResList, "err_msg">>({
    key: "collectionList",
    default: {
        data: [],
        count: 0,
        page: 1,
        limit: 20,
    }
})

export const collectionListSelectedState = atom<Array<number>>({
    key: "collectionListSelected",
    default: []
})