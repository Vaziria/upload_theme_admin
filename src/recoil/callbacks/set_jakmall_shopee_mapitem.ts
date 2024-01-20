import { useRecoilCallback } from "recoil"

import { JkmlCategoryMapListResponse } from "../../model/newapisdk"
import { MapperJakmallShopeeItem, mapperJakmallShopeeItemsState } from "../atoms/mapper_items"

type TypeFunc = () => (res: JkmlCategoryMapListResponse) => void

export const setJakmallShopeeMapitemCallback: TypeFunc = () => useRecoilCallback(({ set }) => (res: JkmlCategoryMapListResponse) => {

    const items = res.data.reduce<MapperJakmallShopeeItem[]>((res, item) => {

        if (item) {
            res.push({
                ...item,
                unmapped: !item?.mapper_id,
            })
        }

        return res
    }, [])

    set(mapperJakmallShopeeItemsState, items)
})
