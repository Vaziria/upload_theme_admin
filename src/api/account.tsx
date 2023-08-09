import { IAccount } from "../model/Account"
import client from "./client"

// account query
export type QueryActive = 'all' | boolean
export type SortType = '' | 'last_up'
export interface AccountQuery {
	active: QueryActive
	search: string
	sort: SortType
	reverse: number
	start: number
	limit: number
}
export const defquery: AccountQuery = {
    active: 'all',
	search: '',
	sort: '',
	reverse: -1,
	start: 0,
	limit: 250
}

export interface AccountPaging {
	total: number
    data: IAccount[]
	select: boolean
	active: boolean
}
export const defpaging: AccountPaging = {
    total: 1,
	select: false,
	active: false,
	data: []
}

export async function run (): Promise<void> {
	await client.get('/legacy/api/run')
}

export async function upload (): Promise<void> {
	await client.get('/shopee/v5/run_upload')
}

export async function grab (): Promise<void> {
	await client.get('/launcher/v1/run_grab')
}

export async function backup (): Promise<void> {
	await client.get('/legacy/api/backupAkun')
}

export async function getAccounts (query: AccountQuery): Promise<{ akuns: IAccount[], count: number }> {
	const res = await client.get('/legacy/api/akuns', {
		params: query
	})

	return res.data
}

export async function getProductAccount (akun: IAccount): Promise<number> {
	const res = await client.post('/legacy/api/produkAkun', akun)
	const count = res.data.data

	if (count === 'gagal') return 0

	return count
}

export async function updateAccount (akun: IAccount): Promise<void> {
    await client.put('/legacy/api/user', {
		'action' : 'update',
		'data' : akun
	})
}

export async function deleteAccount (name: string): Promise<void> {
	await client.delete('/legacy/api/user', {
		data: {
			'action' : 'del',
			'data' : [name]
		}
	})
}

export async function resetAccount (): Promise<void> {
	await client.get('/legacy/v1/akun/reset')
}
