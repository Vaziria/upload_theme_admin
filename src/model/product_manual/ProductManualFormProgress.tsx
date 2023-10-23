import { Form, ProgressProps } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import React from "react";

import { InternalNamePath } from "antd/es/form/interface";
import { FormModel, FormModelKey, ProductManualFormModel } from "./ProductManualForm";
import { useRecoilValue } from "recoil";
import { shopeeAttributeFormState } from "../../recoil/atoms/shopee_attribute";

export type ValidatePayload<T> = {
	validate: true
	data: T
} | {
	validate: false
	message: string
}

export interface ProgressRes {
	status: ProgressProps["status"]
	percent: number
}

export type BatchProgressRes = {
	[key in FormModelKey]: ProgressRes
}


const defProgress: ProgressRes = {
	status: "active",
	percent: 0,
}
const successProgress: ProgressRes = {
	status: "success",
	percent: 100,
}


function progressReducer(key: FormModelKey, dataLen: number, numNested = 1): (
	res: ProgressRes,
	err: ValidateErrorEntity["errorFields"][number]
) => ProgressRes {
	const savedKeys: InternalNamePath[] = []
	return (_, err) => {
		if (typeof err.name === "object" && err.name[0] == key) {
			const keys = err.name.slice(0, numNested + 1)
			const inRes = savedKeys.some((resKey) => keys.every((k, index) => k === resKey[index]))
			if (!inRes) {
				savedKeys.push(keys)
			}
		}

		if (savedKeys.length === 0 || dataLen === 0) {
			return {
				status: "success",
				percent: 100
			}
		}

		const percent = Math.ceil(((dataLen - savedKeys.length) / dataLen) * 100)
		return {
			status: percent === 100 ? "success" : "exception",
			percent: percent
		}
	}
}

export class ProductManualFormProgressModel {
	formModel: ProductManualFormModel

	constructor(formModel: ProductManualFormModel) {
		this.formModel = formModel
	}

	useProgress(): BatchProgressRes {
		const [progress, setProgress] = React.useState<BatchProgressRes>({
			basic: { ...defProgress },
			variant: { ...defProgress },
			fieldConfig: { ...defProgress },
			shopeeAttribute: { ...defProgress },
			tokpedAttribute: { ...defProgress },
		})
		const data = Form.useWatch([], this.formModel.form)

		const shopeeAttributes = useRecoilValue(shopeeAttributeFormState)

		React.useEffect(() => {
			this.formModel.form.validateFields({ validateOnly: true })
				.then(() => setProgress({
					basic: { ...successProgress },
					variant: { ...successProgress },
					fieldConfig: { ...successProgress },
					shopeeAttribute: { ...successProgress },
					tokpedAttribute: { ...successProgress },
				}))
				.catch((validateErr: ValidateErrorEntity<FormModel>) => {

					const { basic, variant } = validateErr.values

					const { attributes } = shopeeAttributes.data
					const shopeeAttrLen = attributes.filter(attr => attr.mandatory).length || 1

					const { variant: variations, variant_option, variant_image } = variant
					const variantLen = !basic.use_variant ? 0 : [
						...(variations || []),
						...(variant_option || []),
						...(variant_image || [])
					].length

					const { field_spin } = validateErr.values.fieldConfig
					const fieldConfigLen = (field_spin || []).length

					setProgress({
						basic: validateErr.errorFields.reduce(progressReducer("basic", 8), { ...defProgress }),
						variant: validateErr.errorFields.reduce(progressReducer("variant", variantLen, 2), { ...defProgress }),
						fieldConfig: validateErr.errorFields.reduce(progressReducer("fieldConfig", fieldConfigLen, 2), { ...defProgress }),
						shopeeAttribute: validateErr.errorFields.reduce(progressReducer("shopeeAttribute", shopeeAttrLen, 3), { ...defProgress }),
						tokpedAttribute: { ...successProgress },
					})
				})
		}, [data])

		return progress
	}
}
