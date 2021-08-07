import { combineReducers, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import ShopeeManifestReducer from './shopee/manifest/ShopeeManifestReducer'
import TokopediaManifestReducer from './tokopedia/manifest/TokopediaManifestReducer'
import DeleterReducer from './deleter/DeleterReducer'

const rootReducer = combineReducers({
  ShopeeManifestReducer,
  TokopediaManifestReducer,
  DeleterReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
// eslint-disable-next-line
export const persistor = persistStore(store as any)

export default {}