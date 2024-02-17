import { useRecoilCallback } from "recoil"

import { ShopeeTopedMapResponse } from "../../model/newapisdk"
import { MapperShopeeTokpedItem, mapperShopeeTokpedItemsState } from "../atoms/mapper_items"
import { mapperCategoryShopeeState } from "../selectors/mapper_value"

type TypeFunc = () => (res: ShopeeTopedMapResponse) => void

export const setShopeeTokpedMapitemCallback: TypeFunc = () => useRecoilCallback(({ set, snapshot }) => (res: ShopeeTopedMapResponse) => {

    const items: MapperShopeeTokpedItem[] = res.data.reduce((res, item) => {
        if (item) {

            const catsnapshot = snapshot.getLoadable(mapperCategoryShopeeState(item.shopee_id))
            const category = catsnapshot.getValue()

            res.push({
                ...item,
                names: category.name,
                unmapped: false
            })
        }

        return res
    }, [] as MapperShopeeTokpedItem[])

    set(mapperShopeeTokpedItemsState, items)
})
