import { Form, FormInstance } from "antd";

import { BasicUpdatePayload, ManualProduct, UpdateFieldConfigPayload, UpdateVariationPayload } from "../apisdk";

export interface FormModel {
	basic: FormInstance<BasicUpdatePayload>
	variant: FormInstance<UpdateVariationPayload>
	fieldConfig: FormInstance<UpdateFieldConfigPayload>
}

export type FormModelKey = keyof FormModel
export type ValidateError = {
	message: string
}

export class ProductManualFormModel implements FormModel {
	pid: number
	basic: FormInstance<BasicUpdatePayload>
	variant: FormInstance<UpdateVariationPayload>
	fieldConfig: FormInstance<UpdateFieldConfigPayload>

	constructor(pid: number) {
		const [basicForm] = Form.useForm<BasicUpdatePayload>()
		const [variantForm] = Form.useForm<UpdateVariationPayload>()
		const [fieldConfigForm] = Form.useForm<UpdateFieldConfigPayload>()

		this.pid = pid
		this.basic = basicForm
		this.variant = variantForm
		this.fieldConfig = fieldConfigForm
	}

	initializeFields(product?: ManualProduct): void {
		this.basic.setFieldsValue({
			image_collection_path: product?.image_collection_path,
			title: product?.title,
			desc: product?.desc,
			price: product?.price,
			stock: product?.stock,
			weight: product?.weight,
			use_markup: product?.use_markup,
			use_variant: product?.use_variant
		})

		this.variant.setFieldsValue({
			variant: product?.variant,
			variant_option: product?.variant_option,
			variant_image: product?.variant_image
		})

		this.fieldConfig.setFieldsValue({
			field_spin: product?.field_spin
		})
	}

	async getBasicPayload(): Promise<BasicUpdatePayload> {
		return new Promise<BasicUpdatePayload>((resolve, reject) => {
			this.basic.validateFields()
				.then((data) => resolve({
					...data,
					product_id: this.pid
				}))
				.catch(() => reject({
					message: "informasi produk tidak lengkap."
				}))
		})
	}

	async getVariantPayload(): Promise<UpdateVariationPayload> {
		return new Promise<UpdateVariationPayload>((resolve, reject) => {
			this.variant.validateFields()
				.then((data) => resolve({
					...data,
					product_id: this.pid
				}))
				.catch(() => reject({
					message: "variasi produk tidak lengkap."
				}))
		})
	}

	async getFieldConfigPayload(): Promise<UpdateFieldConfigPayload> {
		return new Promise<UpdateFieldConfigPayload>((resolve, reject) => {
			this.fieldConfig.validateFields()
				.then((data) => resolve({
					...data,
					product_id: this.pid
				}))
				.catch(() => reject({
					message: "field config tidak lengkap."
				}))
		})
	}
}
