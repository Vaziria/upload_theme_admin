export interface IShopeeCateg {
  children: string
  display_name: string
  has_active_children: boolean
  has_children: boolean
  id: number
  name: string
  parent_id: number

  // extend sendiri
  chain_name: string[]
  chain_ids: number[]
}

export type CategIds = [number, number, number, number]
