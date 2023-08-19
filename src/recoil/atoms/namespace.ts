import { atom } from "recoil"

import type { ProductNamespace } from "../../model/product"

interface NamespaceData {
    shopeeNamespaces: ProductNamespace[]
    tokopediaNamespaces: ProductNamespace[]
}

export const namespaceDataState = atom<NamespaceData>({
    key: "namespaceData",
    default: {
        shopeeNamespaces: [],
        tokopediaNamespaces: [],
    },
})