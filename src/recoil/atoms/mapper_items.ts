import { atom } from "recoil"

import type { MapperItem } from "../../api/mapper"

export const mapperItemsState = atom<MapperItem[]>({
    key: "mapperItems",
    default: [],
})
