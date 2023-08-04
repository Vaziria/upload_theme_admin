import { ShopeeFilterGrab, ShopeeSettingGrab } from "../../model/shopee/grab_setting"
import client from "../client"

export async function getShopeeGrabSetting(): Promise<ShopeeSettingGrab | false > {
    const res = await client.get('/legacy/api/config/shopeeGrabSetting')
    
    if(Object.keys(res.data.data).length === 0){
        console.log(res.data, 'asdasdasdas')
        return false
    }
    return res.data.data
}

export async function updateShopeeGrabSetting(data: ShopeeSettingGrab): Promise<void> {
    await client.post('/legacy/api/config/shopeeGrabSetting', {
        data,
        name: 'shopeeGrabSetting'
    })
}

// api terbaru
// /shopee/filter_grabber/

export async function getShopeeFilterGrabber(): Promise<ShopeeFilterGrab> {
    const res = await client.get('/legacy/shopee/filter_grabber')
    return res.data
}

export async function updateShopeeFilterGrabber(data: Partial<ShopeeFilterGrab>): Promise<void> {
    await client.put('/legacy/shopee/filter_grabber', data)
}
