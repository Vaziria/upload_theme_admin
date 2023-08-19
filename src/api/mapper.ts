import client from "./client"

import type { BaseResponse } from "../types/response"


export interface MapperItem {
    shopee_id: number
    tokpedia_id: number
    product_count: number
    shopee_category_name?: string[]
    tokopedia_category_name?: string[]
}

export interface MapperParams {
    namespace: string
}

export async function getCategoryMappers(params: MapperParams): Promise<MapperItem[]> {
    
    const res =  await client.get<MapperItem[]>("/tokopedia/mapper/category", {
        params,
    })
    return res.data
}

export interface UpdateMapperItem {
    shopee_id: number
    tokpedia_id: number
}

export async function updateCategoryMappers(data: UpdateMapperItem[]): Promise<BaseResponse> {
    const res =  await client.put<BaseResponse>("/tokopedia/mapper/map", data)
    return res.data
}