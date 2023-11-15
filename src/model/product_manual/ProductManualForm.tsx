import { Form, FormInstance } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";

import {
	BasicUpdatePayload, CreateAttributePayloadShopeeAttribute,
	CreateAttributePayloadTokopediaAttribute, ManualProduct,
	UpdateFieldConfigPayload, UpdateVariationPayload
} from "../newapisdk";
import { ProductManualModel } from "./ProductManual";

export interface FormModel {
	basic: BasicUpdatePayload
	variant: UpdateVariationPayload
	fieldConfig: UpdateFieldConfigPayload
	shopeeAttribute: CreateAttributePayloadShopeeAttribute
	tokpedAttribute: CreateAttributePayloadTokopediaAttribute
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
				title: product?.title,
				desc: product?.desc,
				price: productModel.price,
				stock: productModel.stock,
				weight: productModel.weight,
				use_markup: product?.use_markup || undefined,
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
			const setData = (data: FormModel) => {
				resolve({
					basic: {
						...data.basic,
						product_id: this.pid
					},
					variant: {
						...data.variant,
						product_id: this.pid
					},
					fieldConfig: {
						...data.fieldConfig,
						product_id: this.pid
					},
					shopeeAttribute: {
						...data.shopeeAttribute,
						attribute_type: "shopee",
						product_id: this.pid
					},
					tokpedAttribute: {
						...data.tokpedAttribute,
						attribute_type: "tokopedia",
						product_id: this.pid
					}
				})
			}
			this.form.validateFields()
				.then((data) => setData(data))
				.catch((validateErr: ValidateErrorEntity<FormModel>) => {
					const { errorFields, values } = validateErr
					const errorLength = errorFields.filter((field) =>
						!values.basic.use_variant
						&& field.name[0] !== "variant"
					).length

					if (errorLength > 0) {
						reject(new Error(`terdapat ${errorLength} kesalahan`))
					} else {
						setData(values)
					}
				})
		})
	}
}
