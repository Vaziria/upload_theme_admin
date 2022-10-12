import client from "../client"

interface ShippingWeight {
    asal: number[]
    harga: string
    jarak: number
    tujuan: number[]
}

export async function getShippingWeight(url: string): Promise<ShippingWeight> {

    let data = url.split("?")
    data = data[0].split('/')
    data = data[data.length - 1].split('.')
    
    const shopid = data[data.length - 2]
    const itemid = data[data.length - 1]
    
    const res = await client.post('/v4/shopee/weight/predict', {
        shopid,
        itemid
    })

    return res.data
}