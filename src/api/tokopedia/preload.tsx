import { ITokpedCateg } from "../../model/tokopedia/category"
import client from "../client"

export interface Category {
    id: number;
    name: string;
    url: string;
    children?: Category[];
    __typename: string;
}
export interface CategoryAllListLite {
    categories: Category[];
    __typename: string;
}
export interface CategoryAllListLiteData {
    categoryAllListLite: CategoryAllListLite;
}
export interface CategoryAllListLiteRes {
    data: CategoryAllListLiteData;
}

function categReducer(parent?: ITokpedCateg): (res: ITokpedCateg[], value: Category) => ITokpedCateg[] {
    return (res, value) => {
        const { id, name } = value
        const categ: ITokpedCateg = {
            _id: id,
            id: id,
            parentid: parent?.id || 0,
            category: [...(parent?.category || []), name],
            category_ids: [...(parent?.category_ids || []), id],
            has_children: !!value.children?.length,
            name,
        }

        return (value.children || []).reduce(categReducer(categ), [...res, categ])
    }
}

export async function tokopediaGetCategories(): Promise<ITokpedCateg[]> {
    const res = await client.get<CategoryAllListLiteRes>('/tokopedia/category/list')
    const category: ITokpedCateg[] = res.data.data.categoryAllListLite.categories
        .reduce<ITokpedCateg[]>(categReducer(), [])
    return category
}
