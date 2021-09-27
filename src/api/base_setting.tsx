import client from "./client"

interface IBotConfiguration {
  lisensi: {
    email: string
    pwd: string
  }
}

export async function getBotConfig(): Promise<IBotConfiguration> {
  const res = await client.get('/api/config/json_config')
  return res.data
}