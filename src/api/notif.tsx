import { INotif } from "../model/Notif"
import client from "./client"

export async function getNotifAll(): Promise<INotif[]> {
  const res = await client.get('/v2/notif/all')
  return res.data
}

export async function readNotifAll(): Promise<void> {
  await client.get('/v2/notif/readall')
}