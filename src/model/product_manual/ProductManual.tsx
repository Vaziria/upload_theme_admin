import { currency_custom } from "../../utils/currency"
import { AttributeProduct, Collection, FieldConfig, FrameConfig, ManualProduct, ProductMap, Variant, VariantOption, WatermarkConfig } from "../apisdk"

export interface VariantOptionPreviewItem {
	original_text: string
	show_text: string
	color: string
}

const colors = ["red", "blue"]

export class ProductManualModel implements ManualProduct {
	id: number
	as_draft: boolean
	image_preview: string
	image_collection_path: string
	count_image: number
	title: string
	price: number
	desc: string
	use_variant: boolean
	use_markup: string
	weight: number
	stock: number
	attribute: Array<AttributeProduct | undefined>
	field_spin: Array<FieldConfig | undefined>
	variant_option: Array<VariantOption | undefined>
	variant: Array<Variant | undefined>
	collection: Array<Collection | undefined>
	watermark: WatermarkConfig | undefined
	frame_config: FrameConfig | undefined
	last_error: string
	map: Array<ProductMap | undefined>

	constructor(product: ManualProduct) {
        this.id = product.id
		this.as_draft = product.as_draft
		this.image_preview = product.image_preview
		this.image_collection_path = product.image_collection_path
		this.count_image = product.count_image
		this.title = product.title
		this.price = product.price
		this.desc = product.desc
		this.use_variant = product.use_variant
		this.use_markup = product.use_markup
		this.weight = product.weight
		this.stock = product.stock
		this.attribute = product.attribute
		this.field_spin = product.field_spin
		this.variant_option = product.variant_option
		this.variant = product.variant
		this.collection = product.collection
		this.watermark = product.watermark
		this.frame_config = product.frame_config
		this.last_error = product.last_error
		this.map = product.map
    }

	getFormatPrice(): string {
		if (this.use_variant && this.variant.length > 2) {
			const pricelist = [this.price, ...this.variant.map((v) => v?.price || 0)]
			const min = Math.min(...pricelist)
			const max = Math.max(...pricelist)
			return `${ currency_custom(min) } - ${ currency_custom(max) }`
		}

		return currency_custom(this.price)
	}

	getVariantPreviews(maxText = 10): VariantOptionPreviewItem[] {
		return this.variant_option.map<VariantOptionPreviewItem>((v, index) => {
			const item: Partial<VariantOptionPreviewItem> = {
				show_text: v?.name,
				original_text: v?.name,
			}

			if (v && v.name.length > maxText) {
				item.show_text = v.name.slice(0, maxText - 3) + "..."
			}

			return {
				show_text: "",
				original_text: "",
				color: colors[index],
				...item,
			}
		})
	}
}