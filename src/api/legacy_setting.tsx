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