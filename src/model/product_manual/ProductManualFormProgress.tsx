import { Form, ProgressProps } from "antd";
import { ValidateErrorEntity } from "rc-field-form/lib/interface";
import React from "react";

import { ProductManualFormModel } from "./ProductManualForm";
import { InternalNamePath } from "antd/es/form/interface";
import { BasicUpdatePayload, UpdateFieldConfigPayload, UpdateVariationPayload } from "../apisdk";

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

const defProgress: ProgressRes = {
	status: "active",
	percent: 0,
}
const successProgress: ProgressRes = {
	status: "success",
	percent: 100,
}


function keyErrorReducer(numNested: number): (
	res: InternalNamePath[],
	err: ValidateErrorEntity["errorFields"][number]
) => InternalNamePath[] {

	return (res, err) => {
		if (typeof err.name === "object") {
			const key = err.name.slice(0, numNested)
			const inRes = res.some((resKey) => key.every((k, index) => k === resKey[index]))		
			if (!inRes) {
				res.push(key)
			}	
		}
		return res
	}
}

export class ProductManualFormProgressModel {
	formModel: ProductManualFormModel
	basicField = 8

	constructor(formModel: ProductManualFormModel) {
		this.formModel = formModel
	}

	useBasicProgress(): ProgressRes {
		const [progress, setProgress] = React.useState<ProgressRes>({ ...defProgress })
		const data = Form.useWatch([], this.formModel.basic)
		React.useEffect(() => {
			if (data) {
				this.formModel.basic.validateFields({ validateOnly: true })
					.then(() => setProgress({ ...successProgress }))
					.catch((validateErr: ValidateErrorEntity<BasicUpdatePayload>) => {
						const dataLength = Object.keys(validateErr.values).length
						const errLength = validateErr.errorFields.length
						const percent = Math.ceil(((dataLength - errLength) / this.basicField) * 100)
						setProgress({
							status: "exception",
							percent,
						})
					})
			}
		}, [data])

		return progress
	}

	useVariantProgress(): ProgressRes {
		const [progress, setProgress] = React.useState<ProgressRes>({ ...defProgress })
		const data = Form.useWatch([], this.formModel.variant)
		React.useEffect(() => {
			if (data) {
				this.formModel.variant.validateFields({ validateOnly: true })
					.then(() => setProgress({ ...successProgress }))
					.catch((validateErr: ValidateErrorEntity<UpdateVariationPayload>) => {
						const { variant, variant_option, variant_image } = validateErr.values
						const dataLength = (variant || []).length + (variant_option || []).length + (variant_image || []).length
						const errLength = validateErr.errorFields.reduce(keyErrorReducer(2), []).length
						const percent = Math.ceil(((dataLength - errLength) / dataLength) * 100)
						setProgress({
							status: "exception",
							percent,
						})
					})
			}
		}, [data])

		return progress
	}

	useFieldConfigProgress(): ProgressRes {
		const [progress, setProgress] = React.useState<ProgressRes>({ ...defProgress })
		const data = Form.useWatch([], this.formModel.fieldConfig)
		React.useEffect(() => {
			if (data) {
				this.formModel.fieldConfig.validateFields({ validateOnly: true })
					.then(() => setProgress({ ...successProgress }))
					.catch((validateErr: ValidateErrorEntity<UpdateFieldConfigPayload>) => {
						const dataLength = validateErr.values.field_spin.length
						const errLength = validateErr.errorFields.reduce(keyErrorReducer(2), []).length
						const percent = Math.ceil(((dataLength - errLength) / dataLength) * 100)
						setProgress({
							status: "exception",
							percent,
						})
					})
			}
		}, [data])

		return progress
	}
}
