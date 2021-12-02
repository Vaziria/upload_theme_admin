import client from "./client"

// account query
export type QueryActive = 'all' | boolean
export type SortType = '' | 'last_up'
export interface AccountQuery {
	active: QueryActive
	limit: number
	start: number
	search: string
	sort: SortType
	reverse: string
}
export const defquery: AccountQuery = {
    active: 'all',
	limit: 100,
	start: 0,
	search: '',
	sort: '',
	reverse: '-1'
}

// account paging
export interface AccountPaging {
    total: number
    goPage: number
	data: unknown[]
	select: boolean
	active: boolean
}
export const defpaging: AccountPaging = {
    total: 0,
    goPage: 0,
	data:[],
	select: false,
	active: false
}

export type IShipping = {
    channelid: number
    enabled: boolean
}
export type ShippingPayload = {
	shipping: IShipping[],
	use_custom_shipping: boolean
}

export async function shippingConfig(payload: ShippingPayload): Promise<void> {
	// const res = 
	await client.post('/shopee/config_upload/', payload)
}
