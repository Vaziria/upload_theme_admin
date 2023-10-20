import { Typography } from "antd"
import React from "react"

import { AttributeInputProps } from "./base"

import InputType2 from "./InputType2"
import InputType3 from "./InputType3"
import InputType5 from "./InputType5"

const AttributeInput: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const inputType = props.attribute.attributeInfo.inputType
    const validationType = props.attribute.attributeInfo.inputValidationType

    switch (inputType) {
        case 2:
            return <InputType2 {...props} />

        case 3:
            return <InputType3 {...props} />

        case 5:
            return <InputType5 {...props} />
    }

    return <Typography.Text type="secondary">
        Unsupported Type {inputType} - {validationType}
    </Typography.Text>
}

export default AttributeInput
