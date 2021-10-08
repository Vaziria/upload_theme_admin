
export interface IAkun {
  username: string
  pwd: string
}

type IListType = '' | 'name'
type ISearchType = 'name'
type ISource = 'seller_center'

export interface ITask {
  task_type: 'promosi'
}

export interface IProductPageQuery {
  list_type: IListType
  search_type: ISearchType
  keyword: string
  source: ISource
  sold_min: number
  sold_max: number
  category_id: number
  stock_max: number
  stock_min: number
  list_order_type: string
}

export interface IPromoConfig {
  name: string
  query: Partial<IProductPageQuery>
  start_time: number
  end_time: number
  ctime_min?: number
  ctime_max?: number
  count_product: number
  discount: number
  view: number
  sold: number
}

export interface IPromosiTask extends ITask{
  id: string
  akuns: IAkun[]
  config: IPromoConfig
}