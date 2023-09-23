import { atom } from "recoil"
import { Collection } from "../../model/apisdk"

export const productManualCollectionState = atom<Array<Collection | undefined>>({
    key: "productManualCollection",
    default: []
})

export const productManualCollectionSelectedState = atom<Array<number>>({
    key: "productManualCollectionSelected",
    default: []
})