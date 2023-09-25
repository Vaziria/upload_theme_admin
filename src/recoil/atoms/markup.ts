import { atom } from "recoil"

export const markupDataState = atom<string[]>({
    key: "markupData",
    default: [],
})
