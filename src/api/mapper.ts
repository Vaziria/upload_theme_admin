import client from "./client"

import type { BaseResponse } from "../types/response"


export interface MapperItem {
    shopee_id: number
    tokopedia_id: number
    product_count: number
    shopee_category_name?: string[]
    tokopedia_category_name?: string[]
}

export interface MapperParams {
    namespace: string
}

export async function getCategoryMappers(params: MapperParams): Promise<MapperItem[]> {
    
    const res =  await client.get<MapperItem[]>("/v1/category/mapper/tokopedia_to_shopee", {
        params,
    })
    return res.data
}

export interface UpdateMapperItem {
    shopee_id: number
    tokopedia_id: number
}

export async function updateCategoryMappers(data: UpdateMapperItem[]): Promise<BaseResponse> {
    const res =  await client.put<BaseResponse>("/v1/category/mapper/tokopedia_to_shopee", data)
    return res.data
}

export async function tokopediaToShopeeAutosuggest(namespace: string): Promise<BaseResponse> {
    const res =  await client.get<BaseResponse>("/v1/category/mapper/tokopedia_to_shopee_autosuggest", {
        params: { namespace },
    })
    return res.data
}
