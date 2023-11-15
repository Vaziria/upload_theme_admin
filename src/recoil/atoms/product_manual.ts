import { atom } from "recoil"
import { ProductListRes } from "../../model/newapisdk"

export const productManualListState = atom<Omit<ProductListRes, "err_msg">>({
    key: "productManualList",
    default: {
        data: [],
        page: 1,
        limit: 20,
        count: 0
    },
})

export const productManualSelectedState = atom<Array<number>>({
    key: "productManualSelected",
    default: []
})
