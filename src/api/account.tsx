import { IAccount } from "../model/Account"
import { UploadMode } from "./bot_configuration"
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
	limit: 100
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
	await client.get('/api/run')
}

export async function upload (): Promise<void> {
	await client.get('/api/uploadScheduler')
}

export async function grab (): Promise<void> {
	await client.get('/api/grabScheduler')
}

export async function backup (): Promise<void> {
	await client.get('/api/backupAkun')
}

export async function getAccounts (query: AccountQuery): Promise<{ akuns: IAccount[], count: number }> {
	const res = await client.get('/api/akuns', {
		params: query
	})

	return res.data
}

export async function getItemCount (user: string, cat: number, mode: UploadMode): Promise<number> {
	const res = await client.post('/api/productCount', [
		user,
		cat,
		mode
	])

	return res.data.data
}
