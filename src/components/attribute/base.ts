import { ShopeeAttribute } from '../../api/shopee/attribute'
import { AttributePayload, AttributeValue } from "../../model/apisdk"

// input validation
export const
    INPUT_VALIDATION_SELECT = 0,
    INPUT_VALIDATION_SELECT_CUSTOM = 1,
    INPUT_VALIDATION_STRING = 2,
    INPUT_VALIDATION_NUMBER = 3,
    INPUT_VALIDATION_DATE = 4

// input type
export const
    INPUT_TYPE_SELECT_SINGLE = 1,
    INPUT_TYPE_SELECT_SINGLE_CUSTOM = 2,
    INPUT_TYPE_INPUT = 3,
    INPUT_TYPE_SELECT_MULTI = 4,
    INPUT_TYPE_SELECT_MULTI_CUSTOM = 5

// format type
export const
    FORMAT_TYPE_STRING = 1,
    FORMAT_TYPE_NUMBER = 2

export interface AttributeInputProps {
    attribute: ShopeeAttribute
    value?: AttributePayload
    onChange?: (value?: AttributePayload) => void
}

export function isSelectMultiply(inputType: number): boolean {
    return [
        INPUT_TYPE_SELECT_MULTI,
        INPUT_TYPE_SELECT_MULTI_CUSTOM
    ].includes(inputType)
}

export function createValue(value: number): AttributeValue {
    return {
        value_id: value,
        raw_value: "",
        unit: "",
    }
}

export function createCustomValue(value: string, unit?: string): AttributeValue {
    return {
        value_id: 0,
        raw_value: value,
        unit: unit || "",
    }
}
