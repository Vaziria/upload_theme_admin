import { ITokpedCateg } from "../../model/tokopedia/category"
import client from "../client"

export async function tokopediaGetCategories(): Promise<ITokpedCateg[]> {
    const res = await client.get('/static/assets/json/tokopediaCategories.json')
    // eslint-disable-next-line
    const category: ITokpedCateg[] = res.data.map((data: any) => {
        const name = data.category[data.category.length - 1]
        const categ: ITokpedCateg = {
            _id: data._id,
            id: data.id,
            parentid: data.parentid.toString(),
            category: data.category,
            name,
        }
        return categ
    })

    return category
}
