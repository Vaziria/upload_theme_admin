import client from "../client"

export interface AttributeInfo {
    attributeUnitList?: string[]
    dateFormatType: number
    formatType: number
    inputType: number
    inputValidationType: number
    isNcc: boolean
    maxValueCount: number
}

export interface MultiLang {
    language: string
    value: string
}

export interface ShopeeAttributeResponse {
    exist: boolean
    attributes: ShopeeAttribute[]
}

export interface ShopeeAttributeChildren {
    multiLang: MultiLang[]
    displayName: string
    valueId: number
    valueType: number
}

export interface ShopeeAttribute {
    attributeId: number
    displayName: string
    mandatory: boolean
    children: ShopeeAttributeChildren[]
    attributeInfo: AttributeInfo
}

export async function getShopeeAttribute(cat_id: number): Promise<ShopeeAttributeResponse> {
    const res = await client.get<ShopeeAttributeResponse>("/shopee/v5/attribute", {
        params: { cat_id }
    })
    return res.data
}

export async function updateShopeeAttributes(): Promise<void> {
    await client.get<ShopeeAttributeResponse>("/shopee/v5/updater_attribute")
}
