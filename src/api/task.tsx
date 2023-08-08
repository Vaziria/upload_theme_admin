import { MarketList } from "../model/Common"
import { ITask } from "../model/Task"
import client from "./client"

export async function getTaskAll(): Promise<ITask[]> {
  const res = await client.get('/legacy/v1/tasker/all')
  return res.data
}

export async function deleteTask(id: string): Promise<void> {
  await client.delete(`/legacy/v1/tasker/${id}`)
}

export async function generateCategoryCsv(marketplace: MarketList): Promise<{ errcode: number }> {
  const res = await client.get(`/legacy/api/category/dump_csv?mp=${marketplace}`)
  return res.data
}

export async function saveTask(data: ITask[]): Promise<void> {
  await client.post(`/legacy/v1/tasker/save`, data)
}

export async function runUploadAndGrab(): Promise<void> {
  await client.get('/legacy/api/run?custom=true')
}

export async function runGrab(): Promise<void> {
  await client.get('/shopee/v5/run_grab')
}

export async function generateCategoryFacetCsv(): Promise<{ errcode: number }> {
  const res = await client.get("/legacy/v4/shopee/search_filter/dump_facet_category")
  return res.data
}