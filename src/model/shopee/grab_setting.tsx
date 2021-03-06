import { SearchShopeeShipping } from "./search_shipping"

export type ShopeeSort = "ctime" | "pop" | "sales" | "price"

export interface ShopeeSettingGrab {
    by: ShopeeSort
    locations: string[]
    official_mall: boolean
    price_max: number
    price_min: number
    rating_filter: number
    shopee24: boolean
    shopee_verified: boolean
    name: "shopeeGrabSetting"
}


// terbaru bakalan ini semuanaya  rencananya 
export interface ShopeeFilterProductCreated {
    active: boolean
    min: number
    max: number
}
export interface ShopeeFilterGrab {
    product_created: ShopeeFilterProductCreated
    shippings: SearchShopeeShipping[]
}