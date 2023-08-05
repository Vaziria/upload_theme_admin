import client from "./client"

export type IShipping = {
    channelid: number
    enabled: boolean
}
export type ShippingPayload = {
	shipping: IShipping[],
	use_custom_shipping: boolean
}

export async function getShippingConfig(): Promise<ShippingPayload> {

	const res = await client.get('/legacy/shopee/config_upload')
	return res.data
}

export async function saveShippingConfig(payload: ShippingPayload): Promise<void> {
	await client.put('/legacy/shopee/config_upload', payload)
}
