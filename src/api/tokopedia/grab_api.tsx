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


interface SettingGrab {
    errcode: number
    data: {
        data: TokopediaSettingGrab
    }
}

export async function getTokopediaSettingGrab(): Promise<SettingGrab> {
    const res = await client.get<SettingGrab>("/legacy/api/settingGrab")
    const data = res.data

    data.data.data.fcity = data.data.data.fcity.filter((city) => {
        const cities = city.split(",")
        const num = parseInt(cities[0])
        return !isNaN(num)
    })

    return data
}

export async function updateTokopediaSettingGrab(data: TokopediaSettingGrab): Promise<void> {
    await client.post("/legacy/api/settingGrab", data)
}