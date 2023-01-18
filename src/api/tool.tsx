import { CategIds } from "../model/shopee/category"
import client from "./client"

export async function cekBot(): Promise<{ errcode: number }> {
  const res = await client.get('/api/runGetInfo?output=cekBOT.csv')

  return res.data
}

export async function cekOrder(): Promise<{ errcode: number }> {
  const res = await client.get('/api/runGetOrder?output=getOrder.csv')
  return res.data
}

export async function uploadAkun(payload: { data: string }): Promise<{ errcode: number }> {
  const res = await client.post('/api/tool', payload)

  return res.data
  
}

export interface IDeleteQuery {
  sold: number
  view: number
  awaltanggal: string
  tanggal: string
  delete: number
  blokir: boolean
  diarsipkan: boolean
  diperiksa: boolean
}

export async function runDelete(payload: IDeleteQuery): Promise<{ errcode: number }> {
  const res = await client.post('/api/runDelete', payload)
  return res.data
  
}

export interface IDeleteConfig extends IDeleteQuery {
  akun: string
}

export async function getDeleteConfig(): Promise<IDeleteConfig> {
  const res = await client.get('/api/config_delete')
  return res.data
  
}

export interface IConfigDelete {
  category: CategIds[],
  fil_category: boolean,
  fil_harga: boolean,
  fil_keyword: boolean,
  harga: {
    min: number,
    max: number
  },
  keyword: string
}

export async function getConfigDeleteProduct(): Promise<{
  name: 'deleteProduct',
  data: IConfigDelete
}> {

  const res = await client.get('/api/config/deleteProduct')
  return res.data

}

export async function setConfigDeleteProduct(payload: IConfigDelete): Promise<{ errcode: number }> {
  const res = await client.post('/api/config/deleteProduct', {
    name: 'deleteProduct',
    data: payload
  })
  return res.data
}
