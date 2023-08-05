import axios from "axios"
import { IShopeeShipping } from "../../model/shopee/shipping"
import { ShopeeManifest } from "../../model/shopee/system"
import client, { clientTokopedia } from "../client"

export async function shopeeManifest(): Promise<ShopeeManifest> {
    const res = await client.get('/shopee/manifest')
    return res.data
}

export async function shopeeShipping(): Promise<IShopeeShipping[]> {
  const res = await axios.get('/v2/channel_list.json')
  return res.data.list
}
  