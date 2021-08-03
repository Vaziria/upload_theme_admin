import client from "../../api/client"
import { IPublicCateg } from "./public_category"

export interface ShopeeManifest {
  public_category_repo: IPublicCateg[]
}
