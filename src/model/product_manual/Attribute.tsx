type AttributeType = "shopee" | "tokopedia"

export interface Attribute {
	id: number
	product_id: number
	attribute_type: AttributeType
	data: string
}