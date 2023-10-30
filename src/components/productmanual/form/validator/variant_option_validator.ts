import { FormListFieldData, Rule } from "antd/es/form";
import type { ValidatorRule } from 'rc-field-form/lib/interface';

import { VariantOption } from "../../../../model/apisdk";
import { FormModelInstance } from "../../../../model/product_manual/ProductManualForm";

function validator(_: unknown, options?: VariantOption[]): Promise<void> {
    if ((options?.length || 0) === 0) {
        return Promise.reject("Variasi tidak boleh kosong")
    }

    return Promise.resolve()
}

export const lengthValidator: ValidatorRule = { validator }

function nameValidator(form: FormModelInstance, field: FormListFieldData){
    return async (_: unknown, value: string) => {

        const options: Array<VariantOption | undefined> = form.getFieldValue(["variant", "variant_option"])
        const onlyOne = (options || []).every((option, optindex) => {
            if (value && option?.name == value) {
                return field.name === optindex
            }
            return true
        })
        if (!onlyOne) {
            return Promise.reject("Nama variasi harus berbeda.")
        }

        Promise.resolve()
    }
}

export const variantNameValidator: (field: FormListFieldData) => Rule = (field) => (form) => ({
    validator: nameValidator(form as FormModelInstance, field),
})

function optionValidator(form: FormModelInstance, field: FormListFieldData) {
    return async (_: unknown, value: string) => {
        const option: VariantOption = form.getFieldValue(["variant", "variant_option", field.name])

        const onlyOne = (option?.option || []).every((optvalue, optindex) => {
            if (optvalue == value) {
                return option.option.indexOf(optvalue) === optindex
            }
            return true
        })

        if (!onlyOne) {
            return Promise.reject("Pilihan variasi harus berbeda.")
        }

        Promise.resolve()
    }
}

export const variantOptionValidator: (field: FormListFieldData) => Rule = (field) => (form) => ({
    validator: optionValidator(form as FormModelInstance, field),
})
