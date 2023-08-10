import { IPublicCateg } from "../../../model/shopee/public_category"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import { IShopeeCateg } from "../../../model/shopee/category"
import { SearchShopeeShipping } from "../../../model/shopee/search_shipping"
import { IShopeeShipping } from "../../../model/shopee/shipping"

const hourTtl = 3*60*60*1000


interface UploadProductShipping {
  channel_id: number
  name: string
  display_name: string
  name_key: string
  parent_channel_id: number
}

interface IState {
  publicCategory: IPublicCateg[]
  category: IShopeeCateg[]
  ttl: number
  cities: string[]
  search_shipping: SearchShopeeShipping[]
  shipping: IShopeeShipping[]
  upload_product_shipping: UploadProductShipping[]
  shipping_error: boolean
}

interface LoadCategoryAction {
  type: 'shopee/manifest'
  payload: Pick<IState, 'category' | 'publicCategory' | 'shipping'>
}

interface LoadCityAction {
  type: `shopee/manifest/cities`
  payload: string[]
}

interface LoadUploadProductShipping {
  type: 'shopee/manifest/upload_product_shipping',
  payload: UploadProductShipping[]
}

interface LoadShippingAction {
  type: 'shopee/manifest/search_shipping',
  payload: SearchShopeeShipping[]
}

interface ShippingErrorAction {
  type: 'shopee/manifest/shipping_error'
  payload: boolean
}

type IAction = LoadCategoryAction | LoadCityAction | LoadShippingAction | ShippingErrorAction | LoadUploadProductShipping

const defstate: IState = {
  publicCategory: [],
  category: [],
  cities: [],
  ttl: Date.now(),
  search_shipping: [],
  shipping: [],
  upload_product_shipping: [],
  shipping_error: false
}

const persistConfig = {
  key: 'shopee/manifest',
  storage
}

function ShopeeManifestReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'shopee/manifest':
      return { ...state, ttl: Date.now() + hourTtl, ...action.payload }
    case 'shopee/manifest/cities':
      return { ...state, cities: action.payload }

    case 'shopee/manifest/upload_product_shipping':
      return { ...state, upload_product_shipping: action.payload }
    
    case 'shopee/manifest/search_shipping':
      if (action.payload){
        return { ...state, search_shipping: action.payload }
      }
      return { ...state, search_shipping:[]}

    case 'shopee/manifest/shipping_error':
      return { ...state, shipping_error: action.payload }

    default:
      return state
  }
}

export default persistReducer<IState, IAction>(persistConfig, ShopeeManifestReducer)

