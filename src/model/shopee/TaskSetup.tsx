import * as uuid from 'uuid'

export interface IAkun {
  username: string
  pwd: string
  namespace?: string
}

export interface IAkunAction extends IAkun {
  selected: boolean
  active: boolean
}

type IListType = '' | 'name'
type ISearchType = 'name'
type ISource = 'seller_center'

export const taskTypes = ['promosi', 'delete_promo', 'update_product', 'libur', 'kurir_changer'] as const

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

// typing bakalan pindah di yang lebih spesifik not implemeted
export interface IUpdateProductTask {
  id: string
  task_type: 'update_product'
  akuns: IAkun[]
  config: {
    price: number
    price_change_type: 'percent' | 'price_val'
  }
}

export interface ILiburTask {
  id: string
  task_type: 'libur'
  akuns: IAkun[]
  libur: boolean

}

export interface IKurirChangerTask {
  id: string
  task_type: 'kurir_changer'
  akuns: IAkun[]
  config: {
    active_ids: number[]
  }
}

export type ITask = IPromosiTask | IPromosiDeleteTask | IUpdateProductTask | ILiburTask | IKurirChangerTask

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
  } else if(tipe === 'update_product') {
    const task: IUpdateProductTask = {
      akuns: [],
      task_type: 'update_product',
      id: idnya,
      config: {
        price: 10,
        price_change_type: 'percent'
      }
    } 

    return task
    
  } else if(tipe === 'delete_promo') {


    const task: IPromosiDeleteTask = {
      id: idnya,
      task_type: "delete_promo",
      akuns: []
    }

    return task
  } else if(tipe === 'kurir_changer') {
    const task: IKurirChangerTask = {
      id: idnya,
      task_type: "kurir_changer",
      config: {
        active_ids: []
      },
      akuns: []
    }

    return task
  } else {

    const task: ILiburTask = {
      id: idnya,
      task_type: "libur",
      akuns: [],
      libur: true
    }

    return task
  }
  
}