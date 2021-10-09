import { IPromosiTask, ITask } from "../../model/shopee/PromosiSetup"
import client from "../client"

// seharusnya ada di task, tapi karena implementasi belum lengkap dan masih promosi task yang support

export async function getPromoTask(): Promise<IPromosiTask[]> {
  const res = await client.get('/v1/tasker/list')
  return res.data
}

export async function runPromo(): Promise<void>{
  await client.get('/api/scheduler')
}

export async function saveTask(data: ITask[]): Promise<void> {
  await client.post(`/v1/tasker/save_task`, data)
}

export async function deletePromoTask(id: string): Promise<void> {
  await client.delete(`/v1/tasker/${id}`,{
    params: {
      task_type: "promosi"
    }
  })
}