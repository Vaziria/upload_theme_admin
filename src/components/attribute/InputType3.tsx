import { Typography } from "antd"
import React from "react"

import { AttributeInputProps, ValueModel } from "./base"

import DateFormat from "./input/DateFormat"
import InputFormat from "./input/InputFormat"
import InputFormatUnit from "./input/InputFormatUnit"

const InputType3: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const { attribute, value, onChange } = props
    const { attributeUnitList, inputType, inputValidationType, formatType } = attribute.attributeInfo

    const valueModel = new ValueModel(attribute, value)

    const customValue = value?.custom_value?.raw_value
    const customUnit = value?.custom_value?.unit || attributeUnitList?.[0]

    switch (inputValidationType) {
        case 2:
            return <InputFormat
                formatType={formatType}
                value={customValue}
                onChange={(v) => onChange?.(valueModel.createCustomValue(v || undefined))}
            />

        case 3:
            return <InputFormatUnit
                formatType={formatType}
                value={customValue}
                unit={customUnit}
                unitlist={attributeUnitList}
                onChange={(value, unit) => onChange?.(valueModel.createCustomValue(value, unit))}
            />

        case 4:
            return <DateFormat
                value={customValue}
                onChange={(value) => onChange?.(valueModel.createCustomValue(value))}
            />
    }

    return <Typography.Text type="secondary">
        Unsupported Validation Type {inputType} - {inputValidationType}
    </Typography.Text>
}

export default InputType3
