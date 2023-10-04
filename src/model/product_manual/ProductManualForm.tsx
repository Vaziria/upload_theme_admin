import { Form, FormInstance } from "antd";

import { BasicUpdatePayload, ManualProduct, UpdateFieldConfigPayload, UpdateVariationPayload } from "../apisdk";

export interface FormModel {
	basic: FormInstance<BasicUpdatePayload>
	variant: FormInstance<UpdateVariationPayload>
	fieldConfig: FormInstance<UpdateFieldConfigPayload>
}

export type FormModelKey = keyof FormModel

export type ValidatePayload<T> = {
	validate: true
	data: T
} | {
	validate: false
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
			variant_option: product?.variant_option
		})

		this.fieldConfig.setFieldsValue({
			field_spin: product?.field_spin
		})
	}

	async getBasicPayload(): Promise<ValidatePayload<BasicUpdatePayload>> {
		return new Promise<ValidatePayload<BasicUpdatePayload>>((resolve) => {
			this.basic.validateFields()
				.then((data) => resolve({
					validate: true,
					data: {
						...data,
						product_id: this.pid
					}
				}))
				.catch(() => resolve({
					validate: false,
					message: "informasi produk tidak lengkap."
				}))
		})
	}

	async getVariantPayload(): Promise<ValidatePayload<UpdateVariationPayload>> {
		return new Promise<ValidatePayload<UpdateVariationPayload>>((resolve) => {
			this.variant.validateFields()
				.then((data) => resolve({
					validate: true,
					data: {
						...data,
						product_id: this.pid
					}
				}))
				.catch(() => resolve({
					validate: false,
					message: "variasi produk tidak lengkap."
				}))
		})
	}

	async getFieldConfigPayload(): Promise<ValidatePayload<UpdateFieldConfigPayload>> {
		return new Promise<ValidatePayload<UpdateFieldConfigPayload>>((resolve) => {
			this.fieldConfig.validateFields()
				.then((data) => resolve({
					validate: true,
					data: {
						...data,
						product_id: this.pid
					}
				}))
				.catch(() => resolve({
					validate: false,
					message: "field config tidak lengkap."
				}))
		})
	}
}
