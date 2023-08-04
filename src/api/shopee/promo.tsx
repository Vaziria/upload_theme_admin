import { IPromosiTask, ITask } from "../../model/shopee/TaskSetup"
import client from "../client"

// seharusnya ada di task, tapi karena implementasi belum lengkap dan masih promosi task yang support

export async function getPromoTask(): Promise<IPromosiTask[]> {
  const res = await client.get('/legacy/v1/tasker/list')
  return res.data
}

export async function runPromo(): Promise<void>{
  await client.get('/legacy/api/scheduler')
}

export async function saveTask(data: ITask[]): Promise<void> {
  await client.post(`/legacy/v1/tasker/save_task`, data)
}

export async function deletePromoTask(id: string, task_type?: ITask['task_type']): Promise<void> {
  await client.delete(`/legacy/v1/tasker/${id}`,{
    params: {
      task_type: task_type || 'promosi'
    }
  })
}