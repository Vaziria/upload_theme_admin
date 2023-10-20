import { Typography } from "antd"
import React from "react"

import { AttributeInputProps } from "./base"
import SelectMultiFormat from "./input/SelectMultiCustomFormat"

const InputType5: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const { attribute } = props
    const { formatType, inputType, inputValidationType } = attribute.attributeInfo

    switch (inputValidationType) {
        case 2:
            return <SelectMultiFormat
                attrchilds={attribute.children}
                formatType={formatType}
            />
    }

    return <Typography.Text type="secondary">
        {props.attribute.attributeId}&nbsp;
        Unsupported Validation Type {inputType} - {inputValidationType}
    </Typography.Text>
}

export default InputType5
