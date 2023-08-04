import client from "../client"

export interface BlacklistTitle {
    name: 'blacklistTitle'
    data: string[]
    errcode: number
}

export async function getBlacklistTitle(): Promise<BlacklistTitle> {
    const res = await client.get('/legacy/api/setting/get/blacklistTitle')
    return res.data
}

export async function updateBlacklistTitle(blaklists: string[]): Promise<BlacklistTitle> {
    const res = await client.post('/legacy/api/setting/add', {
        name: "blacklistTitle",
        data: blaklists
    })
    return res.data
}

export async function getFilterTitle(): Promise<{ data: string[] }> {
    const res = await client.get('/legacy/api/config/filterTitle')
    return res.data
}

export async function updateFilterTitle(filter: string[]): Promise<BlacklistTitle> {
    const res = await client.post('/legacy/api/config/filterTitle', {
        name: "filterTitle",
        data: filter
    })
    return res.data
}


export async function getFilterWord(name: 'blacklistWord' | 'blacklistWordAja'): Promise<{ data: string[], errcode: number }> {
    const res = await client.get(`/legacy/api/filterWord`, {
        params: {
            name
        }
    })
    return res.data
}

export async function updateFilterWord(name: 'blacklistWord' | 'blacklistWordAja', filter: string[]): Promise<void> {
    const res = await client.post(`/legacy/api/filterWord`, {
        name,
        data: filter
    })
    return res.data
}

export async function setFilterWordDefault(): Promise<void> {
    await client.get('/legacy/api/filterWord', {
        params: {
            makedefault: true
        }
    })
}