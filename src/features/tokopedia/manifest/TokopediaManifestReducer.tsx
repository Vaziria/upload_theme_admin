import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import { ITokpedCateg } from '../../../model/tokopedia/category'
import { TokpedCity } from '../../../model/tokopedia/city'

const hourTtl = 3*60*60*1000

interface IState {
  category: ITokpedCateg[]
  cities: TokpedCity[]
  ttl: number
}

interface CategoryAction {
  type: 'tokopedia/manifest/category'
  payload: ITokpedCateg[]
}

interface CityAction {
  type: 'tokopedia/manifest/city'
  payload: TokpedCity[]
}

type IAction = CategoryAction | CityAction

const defstate: IState = {
  category: [],
  ttl: Date.now(),
  cities: []
}

const persistConfig = {
  key: 'tokopedia/manifest',
  storage
}

function TokopediaManifestReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'tokopedia/manifest/category':
      return { ...state, ttl: Date.now() + hourTtl, category: action.payload }
    case 'tokopedia/manifest/city':
      return { ...state, cities: action.payload }
    default:
      return state
  }
}

export default persistReducer<IState, IAction>(persistConfig, TokopediaManifestReducer)

