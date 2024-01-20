import { useRecoilCallback } from "recoil"

import { TokopediaMapItem } from "../../model/newapisdk"
import { MapperTokpedShopeeItem, mapperTokpedShopeeItemsState } from "../atoms/mapper_items"
import { tokopediaCategoryValueState } from "../selectors/tokopedia_category_value"

type TypeFunc = () => (res: TokopediaMapItem[]) => void

export const setTokpedShopeeMapitemCallback: TypeFunc = () => useRecoilCallback(({ set, snapshot }) => (res: TokopediaMapItem[]) => {

    const items: MapperTokpedShopeeItem[] = res.map((item) => {

        const catsnapshot = snapshot.getLoadable(tokopediaCategoryValueState(item.tokopedia_id))
        const category = catsnapshot.getValue()
        if (category) {
            item.tokopedia_category_name = category.category
        }

        return {
            ...item,
            unmapped: !item.shopee_id
        }
    })

    set(mapperTokpedShopeeItemsState, items)
})
