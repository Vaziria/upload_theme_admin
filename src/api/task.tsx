import { MarketList } from "../model/Common"
import { ITask } from "../model/Task"
import client from "./client"

export async function getTaskAll(): Promise<ITask[]> {
  const res = await client.get('/v1/tasker/all')
  return res.data
}

export async function deleteTask(id: string): Promise<void> {
  await client.delete(`/v1/tasker/${id}`)
}

export async function generateCategoryCsv(marketplace: MarketList): Promise<{ errcode: number }> {
  const res = await client.get(`/api/category/dump_csv?mp=${marketplace}`)
  return res.data
}

export async function saveTask(data: ITask[]): Promise<void> {
  await client.post(`/v1/tasker/save`, data)
}

export async function runUploadAndGrab(): Promise<void> {
  await client.get('/api/run?custom=true')
}

export async function runGrab(): Promise<void> {
  await client.get('/api/grabScheduler?custom=true')
}

export async function generateCategoryFacetCsv(): Promise<{ errcode: number }> {
  const res = await client.get("/v4/shopee/search_filter/dump_facet_category")
  return res.data
}