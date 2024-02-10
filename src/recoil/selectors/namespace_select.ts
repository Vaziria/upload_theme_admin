import { selectorFamily } from "recoil"

import { namespaceDataState } from "../atoms/namespace"
import type { MarketList } from "../../model/Common"
import type { ProductNamespace } from "../../model/product"

export type NamespaceSelectKey = MarketList | "all"

export const namespaceSelectState = selectorFamily<ProductNamespace[], NamespaceSelectKey>({
    key: "namespaceSelect",
    get: (key) => ({ get }) => {

        const data = get(namespaceDataState)
        const namespaces: ProductNamespace[] = []

        switch (key) {

            case "shopee":
                namespaces.push(...data.shopeeNamespaces)
                break

            case "tokopedia":
                namespaces.push(...data.tokopediaNamespaces)
                break

            case "qlobot_shopee":
                namespaces.push(...data.qlobotShopeeNamespaces)
                break


            case "jakmall":
                namespaces.push(...data.jakmallNamespaces)
                break

            default:
                namespaces.push(
                    ...data.shopeeNamespaces,
                    ...data.tokopediaNamespaces,
                    ...data.qlobotShopeeNamespaces
                )
        }

        const str_namespaces = namespaces.map((namespace) => namespace.name)
        return namespaces
            .filter((namespace, index) => str_namespaces.indexOf(namespace.name) === index)
            .sort((a, b) => (a.name > b.name ? 1 : -1))
    },
})