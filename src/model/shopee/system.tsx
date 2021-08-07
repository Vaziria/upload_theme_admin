import { IShopeeCateg } from "./category"
import { IPublicCateg } from "./public_category"

export interface ShopeeManifest {
  public_category_repo: IPublicCateg[]
  category: IShopeeCateg[]
}
