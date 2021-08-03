import { ShopeeManifest } from "../../model/shopee/system"
import client from "../client"

export async function shopeeManifest(): Promise<ShopeeManifest> {
    const res = await client.get('/shopee/manifest')
    return res.data
  }
  