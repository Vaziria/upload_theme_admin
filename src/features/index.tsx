import { combineReducers, createStore } from 'redux'
import { persistStore } from 'redux-persist'
import ShopeeManifestReducer from './shopee/manifest/ShopeeManifestReducer'
import TokopediaManifestReducer from './tokopedia/manifest/TokopediaManifestReducer'

const rootReducer = combineReducers({
  ShopeeManifestReducer,
  TokopediaManifestReducer
})

export type RootState = ReturnType<typeof rootReducer>
export const store = createStore(rootReducer)
// eslint-disable-next-line
export const persistor = persistStore(store as any)

export default {}