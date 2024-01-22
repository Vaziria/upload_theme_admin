import { useRecoilCallback } from "recoil"

import { JkmlCategoryMapListResponse } from "../../model/newapisdk"
import { MapperJakmallItem, mapperJakmallItemsState } from "../atoms/mapper_items"

type TypeFunc = () => (res: JkmlCategoryMapListResponse) => void

export const setJakmallMapitemCallback: TypeFunc = () => useRecoilCallback(({ set }) => (res: JkmlCategoryMapListResponse) => {

    const items = res.data.reduce<MapperJakmallItem[]>((res, item) => {

        if (item) {
            res.push({
                ...item,
                unmapped: !item?.mapper_id,
            })
        }

        return res
    }, [])

    set(mapperJakmallItemsState, items)
})
