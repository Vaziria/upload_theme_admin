import client from './client'


export async function getHastags (): Promise<string[]> {
    const res = await client.get('/api/hastag?list=1')    
    return res.data
}

export async function getLimit (): Promise<[number, number]> {
    const res = await client.get('/api/config/hastagLimit')
    return res.data.data
}

export async function getHastagData (name: string): Promise<string[]> {
    const params = { name }
    const res = await client.get('/api/hastag', { params })
    return res.data.data
}

export async function setLimit (limit: [number, number]): Promise<void> {
    const payload = {
        name: 'hastagLimit',
        data: limit
    }

    await client.post('/api/config/hastagLimit', payload)
}

export async function deleteHastag (name: string): Promise<void> {
    const params = { name }
    await client.delete('/api/hastag', { params })
}

export async function saveHastag (name: string, data: string[]): Promise<void> {
    await client.post('/api/hastag', {
        name,
        data
    })
}
