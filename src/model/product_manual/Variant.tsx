export interface Variant {
	id: number
	product_id: number
	names: string[]
	values: string[]
	price: number
	image_collection_path: string
}

export interface VariantOption {
	id: number
	product_id: number
	name: string
	option: string[]
}

export interface VariantPreviewItem {
	original_text: string
	show_text: string
	color: string
}

export interface VariantPreview {
	text_length: number
	tag_count: number
	remaining: number
	items: VariantPreviewItem[]
}

export class VariantPreviewModel implements VariantPreview {
	text_length: number
	tag_count: number
	remaining: number
	items: VariantPreviewItem[]

	colors = ["red", "gold", "green", "magenta", "orange", "lime", "purple", "volcano", "cyan"]

	constructor(variants: Variant[], maxVariant: number, maxText: number) {

		let text_length = 0,
			tag_count = 0,
			remaining = 0
		const items: VariantPreviewItem[] = []

		variants.forEach((option, index) => {

			const name = option.names.join(" - ")
			let showText = name
			if (showText.length > 10) {
				showText = showText.slice(0, 7) + "..."
			}

			text_length += showText.length
			if (items.length < maxVariant && text_length <= maxText) {
				tag_count += 1
				items.push({
					original_text: name,
					show_text: showText,
					color: this.colors[index],
				})
			} else {
				remaining += 1
			}
		})

		this.text_length = text_length
		this.tag_count = tag_count
		this.remaining = remaining
		this.items = items
	}
}