import { store } from "../.."
import client from "../../../api/client"
import { tokopediaGetCategories } from "../../../api/tokopedia/preload"

export async function tokopediaGetManifest(): Promise<void> {

  // geting city
  const cities = await client.get('/static/assets/json/tokopedia_fcity.json')
  store.dispatch({
    type: 'tokopedia/manifest/city',
    payload: cities.data
  })

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

export function getChainName(idnya: number): string[] {

  const categories = store.getState().TokopediaManifestReducer.category

  for(let i = 0; i < categories.length; i++){
    const categ = categories[i]
    
    if(parseInt(categ._id) === idnya){
      console.log(categ)
      return categ.category
    }
    

  }

  return []
}

export default {}