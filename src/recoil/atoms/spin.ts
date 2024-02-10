import { atom } from "recoil"
import { Spin } from "../../model/Spin"

export const spinDataState = atom<Spin[]>({
    key: "spinData",
    default: [],
})
