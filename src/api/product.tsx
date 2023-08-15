import { MarketList } from "../model/Common"
import { ICategoryStat, IKotaStat, IPriceStat, ProductNamespace } from "../model/product"
import { ICategItem } from "../model/shopee/public_category"
import client from "./client"


export async function getNamespaces(mode?: MarketList): Promise<ProductNamespace[]>{
  const res = await client.get(`/legacy/v1/product/namespace_all`, {
    params: {
      marketplace: mode
    }
  })
  return res.data
}


export async function deleteNamespace(mode: MarketList, namespace: string): Promise<{ errcode: boolean }> {
  const res = await client.get(`/legacy/v1/product/delete?marketplace=${mode}&namespace=${namespace}`)
  return res.data
}


export async function exportDataSupplier(mode: MarketList, namespace: string): Promise<void> {
  await client.put(`/shopee/v5/product/export_supplier?marketplace=${mode}&namespace=${namespace}`)
}

export async function exportDataUrl(mode: MarketList, namespace: string): Promise<void> {
  await client.put(`/shopee/v5/product/export_url?marketplace=${mode}&namespace=${namespace}`)
}


export async function statKota(mode: MarketList, namespace: string): Promise<IKotaStat[]> {
  const res = await client.get(`/legacy/v1/product/kota?marketplace=${mode}&namespace=${namespace}`)
  return res.data
}

interface IStatCategQuery {
  marketplace?: MarketList,
  namespace?: string,
  is_public?: boolean

}

export async function aggsCategToCsv(categs: ICategItem[]): Promise<{ errcode: boolean }> {
  const res = await client.post('/legacy/v1/product/categstat_to_csv', categs)
  return res.data
}

export async function statCategory(params: IStatCategQuery): Promise<ICategoryStat[]> {
  const res = await client.get(`/legacy/v1/product/category`, {
    params
  })
  return res.data
}

export async function shopeeResyncCateg(params: Omit<IStatCategQuery, 'is_public' | 'namespace'>): Promise<ICategoryStat[]> {
  const res = await client.get(`/legacy/v1/product/resync`, {
    params
  })
  return res.data
}

export async function statPrice(mode: MarketList, namespace: string, rprice: number): Promise<IPriceStat[]> {
  const res = await client.get(`/legacy/v1/product/price_range?marketplace=${mode}&namespace=${namespace}&rprice=${rprice}`)
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
  const res = await client.get(`/legacy/v1/product/delete`, {
    params
  })
  return res.data
}

export async function deleteStatCateg(categid: number, is_public: boolean): Promise<{ errcode: boolean }> {
  let url = `/legacy/api/deleteItem`
  if (is_public){
    url = `/legacy/api/deleteItem?is_public=${is_public}`
  }

  const res = await client.post(url, [categid, null])
  return res.data
}

interface RenameNamespacePayload {
  marketplace: MarketList
  namespace: string
  update_namespace: string
}

export async function renameNamespace(payload: RenameNamespacePayload): Promise<{ errcode: boolean }> {
  const url = '/v1/product/rename_namespace'
  const res = await client.post(url, payload)
  return res.data
}
