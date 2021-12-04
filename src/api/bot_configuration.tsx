import client from "./client";

export interface BotConfiguration {
    thread_count: number,
    lisensi: {
        email: string
        pwd: string
    }
}

export type UploadMode = 'tokopedia'|'shopee'


export async function getBotConfiguration(): Promise<BotConfiguration> {
    const res = await client.get('/v3/configuration/get')
    return res.data
}

export async function updateBotConfiguration(param: Partial<BotConfiguration>): Promise<void> {
    await client.post('/v3/configuration/update', param)
}

export async function getUploadMode (): Promise<UploadMode> {
    const res = await client.get('/api/config/upMode')
    return res.data.data
}
