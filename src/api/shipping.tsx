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
	// const res = 
	const res = await client.get('/shopee/config_upload')
	return res.data
}

export async function saveShippingConfig(payload: ShippingPayload): Promise<void> {
	// const res = 
	await client.put('/shopee/config_upload', payload)
}
