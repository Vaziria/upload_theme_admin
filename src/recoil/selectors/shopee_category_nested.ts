import { selector } from "recoil"

import { shopeeCategoryManifestState } from "../atoms/manifest"
import type { IShopeeCateg } from "../../model/shopee/category"

export interface ShopeeCategoryNested {
    name: string
    catid: number
    chainids: number[]
    children?: ShopeeCategoryNested[]
}

function childrenFilter(parent: IShopeeCateg): (IShopeeCateg) => boolean {
    return (category: IShopeeCateg) => {
        return category.parent_id === parent.id
    }
}

function parentMapper(source: IShopeeCateg[]): (IShopeeCateg) => ShopeeCategoryNested {
    return (category: IShopeeCateg): ShopeeCategoryNested => {

        const categoryNested: ShopeeCategoryNested = {
            name: category.display_name,
            catid: category.id,
            chainids: category.chain_ids,
        }

        if (category.has_children) {
            const childrens = source.filter(childrenFilter(category))
            categoryNested.children = childrens.map(parentMapper(source))
        }

        return categoryNested
    }
}

export const shopeeCategoryNestedState = selector<ShopeeCategoryNested[]>({
    key: "shopeeCategoryNested",
    get: ({ get }) => {

        const manifest = get(shopeeCategoryManifestState)
        const parents = manifest.sellerCategories.filter(c => !c.parent_id)
        return parents.map<ShopeeCategoryNested>(parentMapper(manifest.sellerCategories))
    }
})