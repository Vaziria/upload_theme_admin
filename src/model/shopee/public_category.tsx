export type GrabStatus = 'grabbed' | ''

export interface IPublicCategCsv {
  parent_category: number
  catid: number
  parent_display_name: string
  display_name: string
  is_collection?: number
  status?: GrabStatus
}

export interface IParentCateg {
  block_buyer_platform?: number[]
  catid: number
  display_name: string
  image: string
  is_default_subcat: number
  no_sub: boolean
}
export interface IMainPublicCateg {
  block_buyer_platform?: number[]
  catid: number
  display_name: string
  image: string
  name: string
  parent_category: number
  sort_weight: number
}

export interface IPopularCollection {
  collection_id: number
  collection_title: string
  image_mobile: string
  image_pc: string
  price: number
}
    

export interface IPublicCateg {
  main: IMainPublicCateg
  sub: IMainPublicCateg[]

  collections?: IPopularCollection
}

export function toPublicCategCsv(categ: IMainPublicCateg): IPublicCategCsv {
  return {
    parent_category: categ.parent_category,
    catid: categ.catid,
    parent_display_name: '',
    display_name: categ.display_name
  }
}

