import { atom } from "recoil"
import { ManualProduct } from "../../model/apisdk"

export const productManualState = atom<Array<ManualProduct | undefined>>({
    key: "productManual",
    default: []
})

export const productManualSelectedState = atom<Array<number>>({
    key: "productManualSelected",
    default: []
})
