import { FormInstance } from "antd";

import { BasicUpdatePayload, UpdateVariationPayload } from "../apisdk";

export type ValidatePayload<T> = {
	validate: true
	data: T
} | {
	validate: false
	message: string
}

export class ProductManualFormModel {
	pid: number
    basic: FormInstance<BasicUpdatePayload>
	variant: FormInstance<UpdateVariationPayload>

	constructor(pid: number, basic: FormInstance<BasicUpdatePayload>, variant: FormInstance<UpdateVariationPayload>) {
		this.pid = pid
		this.basic = basic
		this.variant = variant
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
}