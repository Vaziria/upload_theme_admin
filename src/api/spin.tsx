import { Spin, SpinConfig } from "../model/Spin";
import client from "./client";


export async function getSpinConfig (): Promise<{
    data: SpinConfig,
    titlePool: Spin[]
}> {
    const res = await client.get('/api/settingSpin')
    return res.data
}

export async function exampleSpin (title: string): Promise<string> {
    const params = { title }
    const res = await client.get('/v1/examplespin', { params })

    return res.data.text
}

export async function settingSpin (titlePool: Spin[]): Promise<void> {
    await client.post('/api/config/settingSpin', {
        name: 'settingSpin',
        titlePool
    })
}

export async function configSpin (payload: SpinConfig): Promise<void> {
    await client.post('/api/settingSpin', payload)
}

export async function deleteSpin (name: string): Promise<void> {
    const params = { name }
    await client.delete('/api/dataspin', { params })
}
