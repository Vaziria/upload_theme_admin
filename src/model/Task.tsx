import { MarketList } from "./Common"
import * as uuid from "uuid"
import { IPublicCategCsv } from "./shopee/public_category"

export const taskMode = ['toko_username', 'product_url', 'category', 'dump_category', 'url'] as const
export type TaskMode = typeof taskMode[number]

export interface ITask {
    _id: string
    namespace: string
    marketplace: MarketList
    mode: TaskMode
    toko_username: string
    product_url: string
    shopee_categ?: IPublicCategCsv
    tokped_categ?: [string, string, string]
    use_filter: boolean
    url?: {
        raw: string
    }

}

export function createTaskId(): string {
    const str = uuid.v4().toString().replace(/-/g, '')
    console.log(str)
    return str
}

export function toStringList(data: [number, number, number]): [string, string, string]{
    return data.map(value => value.toString()) as [string, string, string]
}

export function toNumberList(data: [string, string, string]): [number, number, number]{
    return data.map(value => parseInt(value)) as [number, number, number]
}
