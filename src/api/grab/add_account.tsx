import client from "../client";

export interface IAddAccount {
    username: string
    password: string
    email: string
    email_password: string
}

export async function getAccount(): Promise<IAddAccount> {
    const res = await client.get('/legacy/shopee/config_crawler')

    return res.data
}

export async function updateAccount(payload: IAddAccount): Promise<IAddAccount> {
    const res = await client.put('/legacy/shopee/config_crawler', payload)

    return res.data
}
