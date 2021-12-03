// bakalan deprecated jika ada waktu maintenace

import client from "./client"

export type SettingName = 'cropSetting'
export interface LegacyRes {
    cropSetting: [string, string]
}

export interface LegacyPayload<K extends SettingName> {
    name: K
    data: LegacyRes[K]
}

export async function legacySettingGet(name: SettingName): Promise<{ data: LegacyRes[SettingName] }> {
    const res = await client.get(`/api/setting/get/${name}`)
  return res.data
}

export async function legacySettingUpdate<K extends SettingName>(data: LegacyPayload<K>): Promise<void> {
    await client.post(`/api/setting/add`, data)
}


export async function getUpInterval(): Promise<{uptmin: string, uptmax: string}> {
    const res = await client.get(`/api/upInterval`)
    return res.data.data
}

export async function updateUpInterval(params: { uptmin: string, uptmax: string }): Promise<void> {
    await client.post(`/api/upInterval`, params)
}


export async function getLimitGrab(): Promise<{ data: number }> {
    const res = await client.get(`/api/limitGrab`)
    return res.data
}

export async function updateLimitGrab(limit: number): Promise<void> {
    await client.post(`/api/limitGrab`, limit, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
}

export async function getUpThread(): Promise<{ data: number }> {
    // /api/config/upThread
    const res = await client.get(`/api/config/upThread`)
    return res.data
}

export async function updateUpThread(thread: number): Promise<void> {
    await client.post(`/api/config/upThread`, {
        data: thread
    })
}
