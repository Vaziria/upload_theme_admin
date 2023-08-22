import { store } from "../.."
import client from "../../../api/client"
import { tokopediaGetCategories } from "../../../api/tokopedia/preload"
import { ITokpedCateg } from "../../../model/tokopedia/category"
import { TokpedCity } from '../../../model/tokopedia/city'

export interface TokopediaManifest {
  cities: TokpedCity[]
  categories: ITokpedCateg[]
}

export async function tokopediaGetManifest(): Promise<TokopediaManifest> {

  // geting city
  const cities = await client.get<TokpedCity[]>('/tokopedia/filter/fcity')
  store.dispatch({
    type: 'tokopedia/manifest/city',
    payload: cities.data
  })

  try {
    const categories = await tokopediaGetCategories()

    store.dispatch({
      type: 'tokopedia/manifest/category',
      payload: categories
    })

    return {
      cities: cities.data,
      categories: categories,
    }

  } catch {

    return {
      cities: cities.data,
      categories: [],
    }
  }
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