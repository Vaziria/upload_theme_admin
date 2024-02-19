import { atom } from "recoil"

import { SearchFilterDynamicShipping } from "../../model/newapisdk"

export const shippingsState = atom<SearchFilterDynamicShipping[]>({
    key: "shippings",
    default: [],
})
