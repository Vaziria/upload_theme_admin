import client from "../client"

export type ShippingData = {
    [k: number]: number | number[] | undefined
}

export interface TokopediaSettingGrab {
    preorder: boolean
    condition: string
    fcity: string[]
    goldmerchant: boolean
    ob: string
    official: boolean
    pmax: number
    pmin: number
    rt: string
    shipping: ShippingData
}

export async function getTokopediaSettingGrab(): Promise<TokopediaSettingGrab> {
    const res = await client.get("/api/settingGrab")
    return res.data.data.data
}

export async function updateTokopediaSettingGrab(data: TokopediaSettingGrab): Promise<void> {
    await client.post("/api/settingGrab", data)
}