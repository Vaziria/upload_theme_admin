import { INotif } from "../model/Notif"
import { getBotConfiguration } from "./bot_configuration"
import client from "./client"

export async function getNotifAll(): Promise<INotif[]> {
  const res = await client.get('/v2/notif/all')
  return res.data
}

export async function readNotifAll(): Promise<void> {
  await client.get('/v2/notif/readall')
}

// fungsi ini harus install plugin pdc notification agar tidak error
// alamatplugin https://github.com/Vaziria/pdcnotification.git
export async function setupV2Notification(): Promise<void> {

  // getting bot configuration
  const configBot = await getBotConfiguration();

  // belum di typing
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  (window as any).pdcnotification.initializeNotification(configBot.lisensi.email)
}