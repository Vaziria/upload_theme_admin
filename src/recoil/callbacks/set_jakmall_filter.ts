import { useRecoilCallback } from "recoil"

import { JkmlSearchDataResponse, SearchCityOption, SearchSortOption } from "../../model/newapisdk"
import { jakmallFilterDataState } from "../atoms/jakmall_filter"

type TypeFunc1 = () => (res: JkmlSearchDataResponse) => void

export const setJakmallFilterDataCallback: TypeFunc1 = () => useRecoilCallback(({ set }) => (res: JkmlSearchDataResponse) => {

    const delivery_types = res.delivery_types
    
    const cities = res.cities.reduce<SearchCityOption[]>((res, city) => {

        if (city) {
            res.push(city)
        }
        return res

    }, [])

    const sorts = res.sorts.reduce<SearchSortOption[]>((res, city) => {

        if (city) {
            res.push(city)
        }
        return res

    }, [])

    set(jakmallFilterDataState, {
        delivery_types,
        cities,
        sorts,
    })
})