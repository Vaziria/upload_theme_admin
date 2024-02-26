import { atom } from "recoil"
import { TokpedCity } from "../../model/tokopedia/city"

export const shopeeCitiesState = atom<string[]>({
    key: "shopeeCities",
    default: []
})

export const tokopediaCitiesState = atom<TokpedCity[]>({
    key: "tokopediaCities",
    default: []
})
