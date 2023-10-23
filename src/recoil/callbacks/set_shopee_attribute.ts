import { useRecoilCallback } from "recoil"

import { ShopeeAttribute, getShopeeAttribute } from "../../api/shopee/attribute"
import { shopeeAttributeFormState } from "../atoms/shopee_attribute"

type TypeFunc = () => (categories: number[]) => Promise<ShopeeAttribute[]>

export const useSetShopeeAttribute: TypeFunc = () => useRecoilCallback(({ set }) => async (categories: number[]) => {
    try {
        set(shopeeAttributeFormState, (attr) => ({
            ...attr,
            pending: true
        }))

        const catId = categories[categories.length - 1]
        const data = await getShopeeAttribute(catId)

        set(shopeeAttributeFormState, {
            data,
            called: true,
            pending: false
        })

        return data.attributes

    } catch {
        set(shopeeAttributeFormState, (attr) => ({
            ...attr,
            pending: false
        }))
    }

    return []
})
