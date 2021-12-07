import { MarkupItem } from "../model/markup"
import client from "./client"

export async function getListMarkup(): Promise<{data: string[]}> {
    const res = await client.get('/api/listMarkup')

    return res.data
}

interface AddMarkupPayload {
    data: MarkupItem[]
    fix_mark: number
    name: string
}

export async function createMarkup(payload: AddMarkupPayload): Promise<void> {
    await client.post('/api/addMarkup', payload)
}

export async function deleteMarkup(name: string): Promise<void> {
    await client.post('/api/deleteMarkup', [ name ])
}


export async function updateMarkup(name: string, payload: Omit<AddMarkupPayload, 'name'>): Promise<void> {
    await client.post('/api/markup', payload, {
        params: {
            name
        }
    })
}

interface MarkupRes {
    name: string
    fix_harga: string
    data: MarkupItem[]
}

export async function getMarkupData(name: string): Promise<MarkupRes> {
    const res = await client.get(`/api/markup`, {
        params: {
            name
        }
    })

    return res.data
}