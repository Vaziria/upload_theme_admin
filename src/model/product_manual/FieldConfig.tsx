type FieldType = "field_title" | "field_desc"

export interface UseOnceText {
	id: number
	field_config_id: number
	text: string
}

export interface FieldConfig {
	id: number
	product_id: number
	field_type: FieldType
	use_spin: boolean
	spin_text: string
	use_once_text: boolean
	once_text: UseOnceText[]
}