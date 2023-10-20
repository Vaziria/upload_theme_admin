import { InputNumber, Select, Space, Typography } from "antd"
import React from "react"

import { AttributeInputProps, ValueModel } from "./base"

const InputType2: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const { attribute, value, onChange } = props
    const { inputType, inputValidationType } = props.attribute.attributeInfo

    const valueModel = new ValueModel(attribute, value)
    const childrens = valueModel.getChilrendsOptions()
    // const units = valueModel.getUnitOptions()
    
    // const customValue = value?.custom_value?.raw_value
    // const customUnit = value?.custom_value?.unit || units?.[0].value?.toString()

    switch (inputValidationType) {
        case 3:
            break
            // return <Select
            //     allowClear
            //     value={valueModel.getChildrenValue()}
            //     options={childrens}
            //     onChange={(v) => {
            //         if (typeof v === "number") {
            //             onChange?.(valueModel.createValue(v))
            //         } else {
            //             onChange?.(valueModel.createCustomValue(v))
            //         }
            //     }}
            // />
    }

    return <Typography.Text type="secondary">
        {props.attribute.attributeId}&nbsp;
        Unsupported Validation Type {inputType} - {inputValidationType}
    </Typography.Text>
}

export default InputType2
