export type ShopeeSort = "ctime" | "pop" | "sales" | "price"

export interface ShopeeSettingGrab {
    by: ShopeeSort
    locations: string[]
    official_mall: boolean
    price_max: number
    price_min: number
    rating_filter: number
    shipping: number[] // belum fix
    shopee24: boolean
    shopee_verified: boolean
    name: "shopeeGrabSetting"
}