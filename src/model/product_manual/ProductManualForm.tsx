import { Form, FormInstance } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

import { BasicUpdatePayload, ManualProduct, UpdateFieldConfigPayload, UpdateVariationPayload } from "../apisdk";
import { ProductManualModel } from "./ProductManual";

export interface FormModel {
	basic: BasicUpdatePayload
	variant: UpdateVariationPayload
	fieldConfig: UpdateFieldConfigPayload
}

export type FormModelInstance = FormInstance<FormModel>
export type FormModelKey = keyof FormModel
export type ValidateError = {
	message: string
}

export class ProductManualFormModel {
	pid: number
	form: FormModelInstance

	constructor(pid: number) {
		const [form] = Form.useForm<FormModel>()
		this.pid = pid
		this.form = form
	}

	initializeFields(product?: ManualProduct): void {
		const productModel = new ProductManualModel(product)
		this.form.setFieldsValue({
			basic: {
				image_collection_path: productModel.image_collection_path,
				title: productModel.title,
				desc: productModel.desc,
				price: productModel.price,
				stock: productModel.stock,
				weight: productModel.weight,
				use_markup: productModel.use_markup,
				use_variant: productModel.use_variant
			},
			variant: {
				variant: productModel.variant,
				variant_option: productModel.variant_option,
				variant_image: productModel.variant_image
			},
			fieldConfig: {
				field_spin: productModel.field_spin
			}
		})
	}

	async getPayload(): Promise<FormModel> {
		return new Promise<FormModel>((resolve, reject) => {
			this.form.validateFields()
				.then((data) => resolve({
					basic: { ...data.basic, product_id: this.pid },
					variant: { ...data.variant, product_id: this.pid },
					fieldConfig: { ...data.fieldConfig, product_id: this.pid },
				}))
				.catch((validateErr: ValidateErrorEntity<BasicUpdatePayload>) => {
					reject(new Error(`terdapat ${validateErr.errorFields.length} kesalahan`))
				})
		})
	}
}
