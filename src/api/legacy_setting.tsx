// bakalan deprecated jika ada waktu maintenace

import { MarketList } from "../model/Common"
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

// http://localhost:5000/api/config/concurentRequest
// http://localhost:5000/api/config/concurentRequest

type LegacyConfigName = 'concurentRequest' | 'upThread'

interface LegacyConfigRes {
    data: number
}

export async function getLegacyConfig(key: LegacyConfigName): Promise<LegacyConfigRes> {
    const res = await client.get(`/api/config/${key}`)
    return res.data
}

export async function updateLegacyConfig(key: LegacyConfigName, data: number): Promise<void> {
    await client.post(`/api/config/${key}`, {
        data
    })
}


interface LegacyGrabFilter {
    penjualan: string
    prosentase: number
    stock: number
    tokped_point: [number, number]
}

export async function getGrabFilter(): Promise<{ data: LegacyGrabFilter }> {
    const res = await client.get(`/api/config/grabFilter`)
    return res.data
}

export async function updateGrabFilter(data: Partial<LegacyGrabFilter>): Promise<void> {
    await client.post(`/api/config/grabFilter`, { data })
}


export interface LastLoginData {
    active: boolean
    days: number
}

export async function getLastLogin(): Promise<{ data: LastLoginData }> {
    const res = await client.get(`/api/config/last_login`)
    return res.data
}

export async function updateLastLogin(data: LastLoginData): Promise<void> {
    await client.post(`/api/config/last_login`, {
        name: "last_login",
        data
    })
}

export interface LastReviewData {
    active: boolean
    days: number
}

export async function getLastReview(): Promise<{ data: LastReviewData }> {
    const res = await client.get(`/api/config/lastReview`)
    return res.data
}


export async function updateLastReview(data: LastReviewData): Promise<void> {
    await client.post(`/api/config/lastReview`, {
        name: "lastReview",
        data
    })
}


export async function getUpMode(): Promise<{ data: MarketList }> {
    const res = await client.get(`/api/config/upMode`)
    return res.data
}

export async function updateUpMode(shop: MarketList): Promise<void> {
    await client.post(`/api/config/upMode`, {
        data: shop,
        name: "upMode"
    })
}


interface Blacklist {
    filename: string
}
interface BlacklistUsername {
    shopee: Blacklist
    tokopedia: Blacklist
    active: boolean
}
export interface V3Setting {
    blacklist_username: BlacklistUsername
    name: string
    use_price_discount: boolean
    _id: string
}

export async function getV3Setting(): Promise<V3Setting> {
    const res = await client.get('/v3/setting/default')
    return res.data
}

export async function updateV3Setting(data: V3Setting): Promise<void> {
    await client.post('/v3/setting/default', data)
}

// pilih random
export async function getProductRandom(): Promise<{ data: boolean }> {
    const res = await client.get('/api/config/get_random')
    return res.data
}

export async function updateProductRandom(data: boolean): Promise<void> {
    await client.post('/api/config/get_random', {data})
}

// getting random attribute
export async function getRandomAttribute(): Promise<{ data: {
    active: boolean
    force_tidakada: boolean
} }> {
    const res = await client.get('/api/config/rnd_attribute')
    return res.data
}

export async function updateRandomAttribute(data: {
    active: boolean
    force_tidakada: boolean
}): Promise<void> {
    await client.post('/api/config/rnd_attribute', {data})
}

// config sameresource
export async function getSameResource(): Promise<{ data: boolean }> {
    const res = await client.get('/api/config/userSameResource')
    return res.data
}

export async function updateSameResource(data: boolean): Promise<void> {
    await client.post('/api/config/userSameResource', {data})
}

// Cloudinary
export async function getCloudinary(): Promise<{ data: {
    active: boolean
    url: string
} }> {
    const res = await client.get('/api/config/cloudinary')
    return res.data
}

export async function updateCloudinary(data: {
    active: boolean
    url: string
}): Promise<void> {
    await client.post('/api/config/cloudinary', {data})
}

// backup setting

export async function runBackup(): Promise<void> {
    await client.get('/api/backupSetting')
}

export async function restoreSetting(data: string[]): Promise<void> {
    await client.post('/api/restoreSetting', data)
}