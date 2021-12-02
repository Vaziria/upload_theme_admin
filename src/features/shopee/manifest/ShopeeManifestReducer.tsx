import { IPublicCateg } from "../../../model/shopee/public_category"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import { IShopeeCateg } from "../../../model/shopee/category"
import { IShopeeShipping } from "../../../model/shopee/shipping"

const hourTtl = 3*60*60*1000

interface IState {
  publicCategory: IPublicCateg[]
  category: IShopeeCateg[]
  ttl: number
  shipping: IShopeeShipping[]
}

interface IAction{
  type: 'shopee/manifest'
  payload: Pick<IState, 'category' | 'publicCategory' | 'shipping'>
}

const defstate: IState = {
  publicCategory: [],
  category: [],
  ttl: Date.now(),
  shipping: []
}

const persistConfig = {
  key: 'shopee/manifest',
  storage
}

function ShopeeManifestReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'shopee/manifest':
      return { ...state, ttl: Date.now() + hourTtl, ...action.payload }
    default:
      return state
  }
}

export default persistReducer<IState, IAction>(persistConfig, ShopeeManifestReducer)

