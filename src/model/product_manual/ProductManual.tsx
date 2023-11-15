import noimg from "../../assets/images/no-image.webp";
import { BASEURL } from "../../api/client"
import { currency_custom } from "../../utils/currency"
import {
	AttributeProduct,
	Collection,
	FieldConfig,
	FrameConfig,
	ManualProduct,
	ProductMap,
	ShopeeAttribute,
	Variant,
	VariantImage,
	VariantOption,
	WatermarkConfig
} from "../newapisdk"

export interface VariantPreviewItem {
	original_text: string
	show_text: string
	color: string
}

export interface VariantOptionPreview extends Omit<VariantOption, "option"> {
	option: {
		value: string
		active: boolean
		image_url: string
	}[]
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
	variant_image: Array<VariantImage | undefined>
	variant: Array<Variant | undefined>
	collection: Array<Collection | undefined>
	watermark: WatermarkConfig | undefined
	frame_config: FrameConfig | undefined
	last_error: string
	map: Array<ProductMap | undefined>

	selectVariant: string[]

	constructor(product?: ManualProduct, selectVariant?: string[]) {
		this.id = product?.id || 0
		this.as_draft = product?.as_draft || false
		this.image_preview = product?.image_preview || ""
		this.image_collection_path = product?.image_collection_path || ""
		this.count_image = product?.count_image || 0
		this.title = product?.title || "Tidak ada judul"
		this.price = product?.price || 0
		this.desc = product?.desc || "Tidak ada deskripsi."
		this.use_variant = product?.use_variant || false
		this.use_markup = product?.use_markup || "-"
		this.weight = product?.weight || 0
		this.stock = product?.stock || 0
		this.attribute = product?.attribute || []
		this.field_spin = product?.field_spin || []
		this.variant_option = product?.variant_option || []
		this.variant_image = product?.variant_image || []
		this.variant = product?.variant || []
		this.collection = product?.collection || []
		this.watermark = product?.watermark
		this.frame_config = product?.frame_config
		this.last_error = product?.last_error || ""
		this.map = product?.map || []

		this.selectVariant = selectVariant || []
	}

	getStatus(): string {
		if (this.as_draft) {
			return "Draft"
		}
		return "Aktif"
	}

	getFormatPrice(): string {
		const activeVariant = this.variant.find((variant) => {
			const active = variant?.values.every((v) => this.selectVariant.includes(v))
			return active
		})
		if (activeVariant) {
			return currency_custom(activeVariant.price)
		}

		if (this.use_variant && this.variant.length > 2) {
			const pricelist = [this.price, ...this.variant.map((v) => v?.price || 0)]
			const min = Math.min(...pricelist)
			const max = Math.max(...pricelist)
			return `${currency_custom(min)} - ${currency_custom(max)}`
		}

		return currency_custom(this.price)
	}

	getImageUrl(): string {
		if (this.image_preview) {
			const imgPath = this.image_preview.replaceAll("\\", "/")
			return BASEURL + '/' + imgPath
		}
		return noimg
	}

	getVariantPreviews(maxText = 10): VariantPreviewItem[] {
		return this.variant_option.map<VariantPreviewItem>((v, index) => {
			const item: Partial<VariantPreviewItem> = {
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

	getVariantOptionPreviews(): (VariantOptionPreview | undefined)[] {
		return this.variant_option.map((voption, index) => {
			if (voption) {
				const { option, ...data } = voption
				const optionpre: VariantOptionPreview = {
					...data,
					option: option.map((value, optindex) => {
						let image_url = ""
						if (index === 0) {
							const image = this.variant_image[optindex]
							if (image) {
								const imgPath = image.image_preview.replaceAll("\\", "/")
								image_url = BASEURL + '/' + imgPath
							}
						}

						return {
							value,
							active: this.selectVariant.includes(value),
							image_url,
						}
					})
				}

				return optionpre
			}
			return undefined
		})
	}

	getShopeeAttribute(): ShopeeAttribute | undefined {
		const attribute = this.attribute.find((attr) => attr?.attribute_type === "shopee")
		if (attribute) {
			return JSON.parse(attribute.data)
		}
		return
	}
}