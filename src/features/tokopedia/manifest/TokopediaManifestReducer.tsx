import storage from 'redux-persist/lib/storage'
import { persistReducer } from "redux-persist"
import { ITokpedCateg } from '../../../model/tokopedia/category'

const hourTtl = 3*60*60*1000

interface IState {
  category: ITokpedCateg[]
  ttl: number
}

interface IAction{
  type: 'tokopedia/manifest/category'
  payload: ITokpedCateg[]
}

const defstate: IState = {
  category: [],
  ttl: Date.now()
}

const persistConfig = {
  key: 'tokopedia/manifest',
  storage
}

function TokopediaManifestReducer(state: IState = defstate, action: IAction): IState {
  switch(action.type) {
    case 'tokopedia/manifest/category':
      return { ...state, ttl: Date.now() + hourTtl, category: action.payload }
    default:
      return state
  }
}

export default persistReducer<IState, IAction>(persistConfig, TokopediaManifestReducer)

