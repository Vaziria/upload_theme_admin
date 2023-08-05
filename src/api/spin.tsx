import { Spin, SpinConfig } from "../model/Spin";
import client from "./client";


export async function getSpinConfig (): Promise<{
    data: SpinConfig,
    titlePool: Spin[]
}> {
    const res = await client.get('/api/settingSpin')
    const { data, titlePool } = res.data
    return {
        data,
        titlePool: titlePool || []
    }
}

export async function exampleSpin (title: string): Promise<string> {
    const params = { title }
    const res = await client.get('/v1/examplespin/title', { params })

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

export async function getDataspin (): Promise<string[]> {
    const res = await client.get('/api/dataspin')
    return res.data
}

export async function getDataspinData (name: string): Promise<{ data: string[], name: string }> {
    const params = { name }
    const res = await client.get('/api/dataspin', { params })
    
    if (res.data[0]) {
        return res.data[0]
    }
    
    return {
        name,
        data: []
    }
}

export async function postDataspin (name: string, data: string[]): Promise<void> {
    await client.post('/api/dataspin', {
        name,
        data
    })
}

export async function deleteDataspin (name: string): Promise<void> {
    const params = { name }
    await client.delete('api/dataspin', { params })
}
