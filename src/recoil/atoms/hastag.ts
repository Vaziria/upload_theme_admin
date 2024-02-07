import { atom } from "recoil"

export const hastagDataState = atom<string[]>({
    key: "hastagData",
    default: [],
})
