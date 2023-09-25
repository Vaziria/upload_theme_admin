import { store } from ".."
import { createMarkup, getListMarkup } from "../../api/markup"

export async function loadMarkup(): Promise<string[]> {
    const mark = await getListMarkup()
    store.dispatch({
        type: "markup/load",
        payload: mark.data,
    })

    return mark.data
}

export async function addMarkup(markup: string): Promise<void> {
    store.dispatch({
        type: "markup/add",
        payload: markup,
    })

    await createMarkup({
        data: [],
        fix_mark: 0,
        name: markup,
    })
}