import client from "./client"

export interface ISavePayload {
  key: number,
  data: {
    shopee_categ: string[]
  }
}

export async function saveCategmapper(payload: ISavePayload): Promise<{ errcode: boolean }> {
  const res = await client.post('/legacy/v1/category_mapper/tokopedia', payload)
  return res.data
}

export interface MapItem {
  shopee_categ: string[]
}

export interface ICategMapper {
  [k: number]: {
    shopee_categ: string[]
  } | undefined
}

export async function getCategmapper(): Promise<ICategMapper> {
  const res = await client.get('/legacy/v1/category_mapper/tokopedia')
  return res.data
}

export async function autoSuggest(): Promise<void> {
  await client.get('/legacy/v1/category_mapper/tokopedia?action=auto_suggest')
}
