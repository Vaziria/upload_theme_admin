import type { FormInstance } from 'rc-field-form';

import { Variant, VariantOption } from "../newapisdk"
import { FormModel } from "./ProductManualForm"

export type VariantDetail = Pick<Variant, "names" | "values"> & {
    firstIndex: number
    first: boolean
    key: string
}

export class VariantDetailModel {
    form: FormInstance<FormModel>
    options?: (VariantOption | undefined)[]
    variations?: Array<Variant | undefined>

    constructor(form: FormInstance<FormModel>) {
        this.form = form
        this.options = form.getFieldValue(["variant", "variant_option"])
        this.variations = form.getFieldValue(["variant", "variant"])
    }

    getItems(): VariantDetail[] {
        const option1 = this.options?.[0]
        const option2 = this.options?.[1]

        const items: VariantDetail[] = []
        if (option1) {
            option1.option?.forEach((option1_value, firstIndex) => {

                if (option2 && option2.option.length) {
                    option2.option.forEach((option2_value, index) => {
                        items.push({
                            names: [option1.name, option2.name],
                            values: [option1_value, option2_value],
                            firstIndex,
                            first: index === 0,
                            key: `${firstIndex}_${index}`
                        })
                    })

                } else {
                    items.push({
                        names: [option1.name],
                        values: [option1_value],
                        firstIndex,
                        first: true,
                        key: firstIndex.toString()
                    })
                }
            }, [])
        }

        return items
    }
    
    bulkUpdate(data: Partial<Variant>): void {
        const value = this.variations?.map((variant) => ({
            ...variant,
            ...data
        }))
        this.form.setFieldValue(["variant", "variant"], value)
    }
}
