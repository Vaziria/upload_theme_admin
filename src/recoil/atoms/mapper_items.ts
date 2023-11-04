import { atom } from "recoil"

import type { MapperItem } from "../../api/mapper"

export interface MapperItemState extends MapperItem {
    unmapped: boolean
}

export const mapperItemsState = atom<MapperItemState[]>({
    key: "mapperItems",
    default: [],
})
