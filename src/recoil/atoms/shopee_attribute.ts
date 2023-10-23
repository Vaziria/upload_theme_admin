import { atom } from "recoil"
import { ShopeeAttributeResponse } from "../../api/shopee/attribute"

interface ShopeeAttributeForm {
    called: boolean
    pending: boolean
    data: ShopeeAttributeResponse
}

export const shopeeAttributeFormState = atom<Omit<ShopeeAttributeForm, "err_msg">>({
    key: "shopeeAttributeForm",
    default: {
        called: false,
        pending: false,
        data: {
            exist: false,
            attributes: []
        }
    },
})
