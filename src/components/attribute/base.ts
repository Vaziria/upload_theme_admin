import dayjs from 'dayjs'

import { DefaultOptionType } from 'antd/es/select'
import { ShopeeAttribute } from '../../api/shopee/attribute'
import { AttributePayload } from "../../model/apisdk"

export interface AttributeInputProps {
    attribute: ShopeeAttribute
    value?: AttributePayload
    onChange?: (value?: AttributePayload) => void
}

export class ValueModel {
    attribute: ShopeeAttribute
    defvalue: AttributePayload
    value?: AttributePayload

    constructor(attribute: ShopeeAttribute, value?: AttributePayload) {
        this.attribute = attribute
        this.defvalue = {
            attribute_id: attribute.attributeId,
            attribute_value_id: 0,
            custom_value: undefined,
            attribute_values: []
        }
		this.value = value
	}

    getDateValue(): dayjs.Dayjs | undefined {
        const { raw_value } = this.value?.custom_value || {}
        if (raw_value) {
            const value = dayjs(parseInt(raw_value) * 1000)
            if (value.isValid()) {
                value.toDate().getTime()
                return value
            }
        }

        return
    }

    getChildrenValue(): string | number | undefined {
        const { custom_value, attribute_value_id } = this.value || {}
        if (attribute_value_id) {
            return attribute_value_id
        }

        return custom_value?.raw_value.concat(" ", custom_value.unit || "")
    }

    getChilrendsOptions(): DefaultOptionType[] {
        const { children } = this.attribute
        return children.map((child) => ({
            label: child.displayName,
            value: child.valueId
        }))
    }

    createValue(value?: number): AttributePayload | undefined {
        if (value) {
            return {
                ...this.defvalue,
                attribute_value_id: value,
            }
        }
        return undefined
    }

    createCustomValue(value?: string, unit?: string): AttributePayload | undefined {
        if (value) {
            return {
                ...this.defvalue,
                custom_value: {
                    raw_value: value,
                    unit: unit || ""
                }
            }
        }
        return undefined
    }

    createCustomValueDate(value?: dayjs.Dayjs): AttributePayload | undefined {
        if (value) {
            const time = value.startOf("day").toDate().getTime()
            const raw_value = time && Math.trunc(time / 1000)
            return {
                ...this.defvalue,
                custom_value: {
                    raw_value: raw_value.toString(),
                    unit: ""
                }
            }
        }
        return undefined
    }
}
