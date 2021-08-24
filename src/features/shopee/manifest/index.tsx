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
    payload: {
      publicCategory: manifest.public_category_repo,
      category: manifest.category
    }
  })
}

export function publicChainName(idnya: number): {
  is_collection: boolean
  chain: string[]
} {

  const publicCateg = store.getState().ShopeeManifestReducer.publicCategory
  const chain: string[] = []
  let is_collection = false

  for(let i=0; i < publicCateg.length; i++){
    const categ = publicCateg[i]
    const main = categ.main
    const subs = categ.sub
    const collections = categ.collections
    
    if(main.catid == idnya){
      chain.push(main.display_name)
      return { chain, is_collection }
    }

    for(let c=0; c < subs.length; c++){
      const sub = subs[c]
      if(sub.catid == idnya){
        chain.push(main.display_name)
        chain.push(sub.display_name)
        return { chain, is_collection }
      }
    }

    if(collections){
      for(let d=0; d < collections.length; d++){
        const collection = collections[d]
        if(collection.collection_id == idnya){
          
          chain.push(main.display_name)
          chain.push(collection.collection_title)
          is_collection = true
          return { chain, is_collection }
        }
      }
    }
  }

  return { chain, is_collection }
}

export default {}