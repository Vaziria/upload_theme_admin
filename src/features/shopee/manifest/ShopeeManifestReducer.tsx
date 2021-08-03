import { IPublicCateg } from "../../../model/shopee/public_category"
import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"

const hourTtl = 3*60*60*1000

interface IState {
  publicCategory: IPublicCateg[]
  ttl: number
}

interface IAction{
  type: 'shopee/manifest'
  payload: IPublicCateg[]
}

const defstate: IState = {
  publicCategory: [],
  ttl: Date.now()
}

const persistConfig = {
  key: 'shopee/manifest',
  storage
}

function ShopeeManifestReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'shopee/manifest':
      return { ...state, ttl: Date.now() + hourTtl, publicCategory: action.payload }
    default:
      return state
  }
}

export default persistReducer<IState, IAction>(persistConfig, ShopeeManifestReducer)

