import { selector } from "recoil"

import type { ITokpedCateg } from "../../model/tokopedia/category"
import { tokopediaPublicCategoriesState } from "../atoms/categories"

export interface TokopediaCategoryNested {
    name: string
    catid: number
    chainids: number[]
    children?: TokopediaCategoryNested[]
}

function childrenFilter(parent: ITokpedCateg): (category: ITokpedCateg) => boolean {
    return (category: ITokpedCateg) => {
        return category.parentid === parent.id
    }
}

function parentMapper(source: ITokpedCateg[]): (category: ITokpedCateg) => TokopediaCategoryNested {
    return (category: ITokpedCateg): TokopediaCategoryNested => {

        const categoryNested: TokopediaCategoryNested = {
            name: category.name,
            catid: category.id,
            chainids: category.category_ids,
        }

        if (category.has_children) {
            const childrens = source.filter(childrenFilter(category))
            categoryNested.children = childrens.map(parentMapper(source))
        }

        return categoryNested
    }
}

export const tokopediaCategoryNestedState = selector<TokopediaCategoryNested[]>({
    key: "tokopediaCategoryNested",
    get: ({ get }) => {

        const categories = get(tokopediaPublicCategoriesState)
        const parents = categories.filter(c => !c.parentid)
        return parents.map<TokopediaCategoryNested>(parentMapper(categories))
    }
})