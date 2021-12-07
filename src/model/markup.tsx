export const markList = ["<", "<=", ">", ">=", "range"] as const
export type Mark = typeof markList[number] 

export interface MarkupItem {
    mark: Mark
    range: string | [ string, string ]
    up: [string, string]
}