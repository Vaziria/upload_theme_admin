export interface Collection {
	id: number     
	name: string   
	created_at: string
	updated_at: string
}

export interface ManualProductCollection {
	manual_product_id: number
	collection_id: number
}