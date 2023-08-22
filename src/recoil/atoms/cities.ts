import { atom } from "recoil"
import { TokpedCity } from "../../model/tokopedia/city"

export const tokopediaCitiesState = atom<TokpedCity[]>({
    key: "tokopediaCities",
    default: []
})
