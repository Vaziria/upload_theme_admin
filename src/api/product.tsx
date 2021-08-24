import { MarketList } from "../model/Common"
import { ICategoryStat, IKotaStat, IPriceStat, ProductNamespace } from "../model/product"
import client from "./client"


export async function getNamespaces(mode: MarketList): Promise<ProductNamespace[]>{
  const res = await client.get(`/v1/product/namespace_all?marketplace=${mode}`)
  return res.data
}


export async function deleteNamespace(mode: MarketList, namespace: string): Promise<{ errcode: boolean }> {
  const res = await client.get(`/v1/product/delete?marketplace=${mode}&namespace=${namespace}`)
  return res.data
}



export async function statKota(mode: MarketList, namespace: string): Promise<IKotaStat[]> {
  const res = await client.get(`/v1/product/kota?marketplace=${mode}&namespace=${namespace}`)
  return res.data
}

interface IStatCategQuery {
  marketplace?: MarketList,
  namespace?: string,
  is_public?: boolean

}

export async function statCategory(params: IStatCategQuery): Promise<ICategoryStat[]> {
  const res = await client.get(`/v1/product/category`, {
    params
  })
  return res.data
}


export async function statPrice(mode: MarketList, namespace: string, rprice: number): Promise<IPriceStat[]> {
  const res = await client.get(`/v1/product/price_range?marketplace=${mode}&namespace=${namespace}&rprice=${rprice}`)
  return res.data
}

interface IDeleteQuery {
  marketplace?: MarketList,
  namespace?: string,
  kota?: string,
  pmin?: number,
  pmax?: number
}

export async function deleteProducts(params: IDeleteQuery): Promise<{ errcode: boolean }> {
  const res = await client.get(`/v1/product/delete`, {
    params
  })
  return res.data
}

export async function deleteStatCateg(categid: number): Promise<{ errcode: boolean }> {
  const res = await client.post(`/api/deleteItem`, [categid, null])
  return res.data
}
