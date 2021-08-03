import { store } from "../.."
import { shopeeManifest } from "../../../api/shopee/preload"

export async function shopeeGetManifest(): Promise<void> {
  const state = store.getState().ShopeeManifestReducer
  if(Date.now() < state.ttl){
    return
  }

  const manifest = await shopeeManifest()
  store.dispatch({
    type: 'shopee/manifest',
    payload: manifest.public_category_repo
  })
}

export default {}