import { store } from "../.."
import { tokopediaGetCategories } from "../../../api/tokopedia/preload"

export async function tokopediaGetManifest(): Promise<void> {
  const state = store.getState().TokopediaManifestReducer
  if(Date.now() < state.ttl){
    return
  }
  const category = await tokopediaGetCategories()

  store.dispatch({
    type: 'tokopedia/manifest/category',
    payload: category
  })
}

export default {}