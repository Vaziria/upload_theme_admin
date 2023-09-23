import { currency_custom } from "../../utils/currency"
import { Attribute } from "./Attribute"
import { Collection } from "./Collection"
import { FieldConfig } from "./FieldConfig"
import { Variant, VariantOption, VariantPreviewModel } from "./Variant"

interface BasicProduct {
	title: string
	price: number
	image_collection_path: string
	desc: string
	use_variant: boolean
}

export interface ProductManual extends BasicProduct {
	id: number
	as_draft: boolean
	attribute: Attribute[]
	field_spin: FieldConfig[]
	variant_option: VariantOption[]
	variant: Variant[]
	collection: Collection[]
}

export class ProductManualModel implements ProductManual {
	title: string
	price: number
	image_collection_path: string
	desc: string
	use_variant: boolean

	id: number
	as_draft: boolean
	attribute: Attribute[]
	field_spin: FieldConfig[]
	variant_option: VariantOption[]
	variant: Variant[]
	collection: Collection[]

	constructor(product: ProductManual) {
        this.title = product.title
		this.price = product.price
		this.image_collection_path = product.image_collection_path
		this.desc = product.desc
		this.use_variant = product.use_variant
		this.id = product.id
		this.as_draft = product.as_draft
		this.attribute = product.attribute
		this.field_spin = product.field_spin
		this.variant_option = product.variant_option
		this.variant = product.variant
		this.collection = product.collection
    }

	getFormatPrice(): string {
		if (this.use_variant && this.variant.length > 2) {
			const pricelist = [this.price, ...this.variant.map((v) => v.price)]
			const min = Math.min(...pricelist)
			const max = Math.max(...pricelist)
			return `${ currency_custom(min) } - ${ currency_custom(max) }`
		}

		return currency_custom(this.price)
	}

	getVariantPreview(maxVariant: number, maxText: number): VariantPreviewModel {
		const variantPreview = new VariantPreviewModel(this.variant, maxVariant, maxText)
		return variantPreview
	}
}