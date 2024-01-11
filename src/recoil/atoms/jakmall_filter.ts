import { atom } from "recoil"
import { SearchCityOption, SearchSortOption } from "../../model/newapisdk"

interface JakmallFilterData {
    cities: Array<SearchCityOption>
	delivery_types: string[]
	sorts: Array<SearchSortOption>
} 

export const jakmallFilterDataState = atom<JakmallFilterData>({
    key: "jakmallFilterData",
    default: {
       cities: [],
       delivery_types: [],
       sorts: [],
    },
})
