import * as uuid from 'uuid'

export interface IAkun {
  username: string
  pwd: string
}

type IListType = '' | 'name'
type ISearchType = 'name'
type ISource = 'seller_center'

export const taskTypes = ['promosi', 'delete_promo'] as const

export type TaskType = typeof taskTypes[number]

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

export interface IPromosiTask {
  id: string
  task_type: 'promosi'
  akuns: IAkun[]
  config: IPromoConfig
}

export interface IPromosiDeleteTask {
  id: string
  task_type: 'delete_promo'
  akuns: IAkun[]
}


export type ITask = IPromosiTask | IPromosiDeleteTask

export function createTask(tipe: TaskType): ITask {
  const idnya = uuid.v4()

  if(tipe === 'promosi'){
    const promoTimeMin = (Date.now() / 1000) + (24 * 60 * 60)
    const promoTimeMax = (Date.now() / 1000) + (24 * 60 * 60 * 30)

    const defProdMax = (Date.now() / 1000)
    const defProdMin = (Date.now() / 1000) - (24 * 60 * 60 * 7)

    const task: IPromosiTask = {
      task_type: "promosi",
      id: idnya,
      akuns: [],
      config: {
        name: "diskon sebulan",
        count_product: 20,
        discount: 10,
        end_time: promoTimeMax,
        start_time: promoTimeMin,
        ctime_max: defProdMax,
        ctime_min: defProdMin,
        query: {},
        sold: 0,
        view: 0
      }
    }

    return task
  } else {


    const task: IPromosiDeleteTask = {
      id: idnya,
      task_type: "delete_promo",
      akuns: []
    }

    return task
  }
  
}