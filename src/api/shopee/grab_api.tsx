import { ShopeeSettingGrab } from "../../model/shopee/grab_setting"
import client from "../client"

export async function getShopeeGrabSetting(): Promise<ShopeeSettingGrab> {
    const res = await client.get('/api/config/shopeeGrabSetting')
    return res.data.data
}

export async function updateShopeeGrabSetting(data: ShopeeSettingGrab): Promise<void> {
    await client.put('/api/config/shopeeGrabSetting', {
        data,
        name: 'shopeeGrabSetting'
    })
}