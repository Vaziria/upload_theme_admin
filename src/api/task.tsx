import { ITask } from "../model/Task"
import client from "./client"

export async function getTaskAll(): Promise<ITask[]> {
  const res = await client.get('/legacy/v1/tasker/all')
  return res.data
}

export async function deleteTask(id: string): Promise<void> {
  await client.delete(`/legacy/v1/tasker/${id}`)
}

export async function generateShopeeCategoryCsv(): Promise<{ errcode: number }> {
  const res = await client.get(`/legacy/api/category/dump_csv?mp=shopee`)
  return res.data
}

export async function generateTokopediaCategoryCsv(): Promise<{ errcode: number }> {
  const res = await client.get(`/tokopedia/dump/category_dump`)
  return res.data
}

export async function saveTask(data: ITask[]): Promise<void> {
  await client.post(`/legacy/v1/tasker/save`, data)
}

export async function runUploadAndGrab(): Promise<void> {
  await client.get('/legacy/api/run?custom=true')
}

export async function runGrabShopee(): Promise<void> { 
  await client.get('/launcher/v1/run_grab_shopee')
}

export async function runGrabTokopedia(): Promise<void> { 
  await client.get('/launcher/v1/run_grab_tokopedia')
}

export async function generateCategoryFacetCsv(): Promise<{ errcode: number }> {
  const res = await client.get("/legacy/v4/shopee/search_filter/dump_facet_category")
  return res.data
}