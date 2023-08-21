import client from "../client"

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
    shipping: string[]
}

export async function getTokopediaSettingGrab(): Promise<{errcode: number, data: {data: TokopediaSettingGrab}}> {
    const res = await client.get("/legacy/api/settingGrab")

    return res.data
}

export async function updateTokopediaSettingGrab(data: TokopediaSettingGrab): Promise<void> {
    await client.post("/legacy/api/settingGrab", data)
}