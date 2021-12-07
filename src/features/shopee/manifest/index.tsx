import { store } from "../.."
import client from "../../../api/client"
import { shopeeManifest } from "../../../api/shopee/preload"
import { CategIds } from "../../../model/shopee/category"
import { ICategItem, IMainPublicCateg, IPopularCollection } from "../../../model/shopee/public_category"

export async function getShopeeCities(): Promise<void> {
  const res = await client.get("/static/assets/json/shopee.grab.location.json")
  const cities = res.data
  store.dispatch({
    type: 'shopee/manifest/cities',
    payload: cities,
  })

}

export async function getSearchShopeeShipping(): Promise<void> {
  const res = await client.get('/api/shopee_shipping')
  store.dispatch({
    type: 'shopee/manifest/search_shipping',
    payload: res.data,
  })
}

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

export interface IChainCateg extends IMainPublicCateg { type: 'category' }
export interface IChainCollection extends IPopularCollection { type: 'collection' }

export type IChain = IChainCateg | IChainCollection

export function toCategIds(ids: number[]): CategIds {
  const categ: CategIds = [0, 0, 0, 0]
  ids.forEach((value, index) => {
    categ[index] = value
  })

  return categ
}

export function getChainByid(idnya: number): CategIds {
  const categories = store.getState().ShopeeManifestReducer.category
  
  for(let c = 0; c < categories.length; c++){
    const category = categories[c]
    
    if(category.id === idnya){
      const categ: CategIds = toCategIds(category.chain_ids)
      categ[category.chain_ids.length] = category.id
      return categ
    }
  }

  return [0, 0, 0, 0]
}

export function publicChainCsvFormat(idnya: number): ICategItem | false {

  const publicCateg = store.getState().ShopeeManifestReducer.publicCategory

  for(let i=0; i < publicCateg.length; i++){
    const categ = publicCateg[i]
    const main = categ.main
    const subs = categ.sub
    const collections = categ.collections
    
    if(main.catid == idnya){
      return {
        parent_category: 0,
        catid: main.catid,
        parent_display_name: main.display_name,
        display_name: ''
      }
    }

    for(let c=0; c < subs.length; c++){
      const sub = subs[c]
      if(sub.catid == idnya){
        return {
          parent_category: sub.parent_category,
          catid: sub.catid,
          parent_display_name: main.display_name,
          display_name: sub.display_name
        }
      }
    }

    if(collections){
      for(let d=0; d < collections.length; d++){
        const collection = collections[d]
        if(collection.collection_id == idnya){
          return {
            parent_category: 0,
            catid: collection.collection_id,
            parent_display_name: main.display_name,
            display_name: collection.collection_title,
            is_collection: 1
          }
          
        }
      }
    }

  }

  return false
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