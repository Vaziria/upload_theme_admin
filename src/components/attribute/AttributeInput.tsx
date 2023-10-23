import { Typography } from "antd"
import React from "react"

import { AttributeInputProps, INPUT_TYPE_INPUT, INPUT_TYPE_SELECT_MULTI, INPUT_TYPE_SELECT_MULTI_CUSTOM, INPUT_TYPE_SELECT_SINGLE, INPUT_TYPE_SELECT_SINGLE_CUSTOM, INPUT_VALIDATION_DATE } from "./base"

import TypeInput from "./TypeInput"
import TypeSelect from "./TypeSelect"
import TypeDate from "./TypeDate"
import TypeSelectWithCustom from "./TypeSelectWithCustom"

const AttributeInput: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const { inputType, inputValidationType } = props.attribute.attributeInfo

    switch (inputType) {
        case INPUT_TYPE_SELECT_SINGLE:
            return <TypeSelect {...props} />

        case INPUT_TYPE_SELECT_SINGLE_CUSTOM:
            return <TypeSelectWithCustom {...props}>
                {(selecProps) => <TypeSelect {...selecProps} />}
            </TypeSelectWithCustom>

        case INPUT_TYPE_INPUT:
            if (inputValidationType === INPUT_VALIDATION_DATE) {
                return <TypeDate {...props} />
            }
            return <TypeInput {...props} />

        case INPUT_TYPE_SELECT_MULTI:
            return <TypeSelect multiple {...props} />

        case INPUT_TYPE_SELECT_MULTI_CUSTOM:
            return <TypeSelectWithCustom multiple {...props}>
                {(selecProps) => <TypeSelect {...selecProps} />}
            </TypeSelectWithCustom>
    }

    return <Typography.Text type="secondary">
        Unsupported Type {inputType} - {inputValidationType}
    </Typography.Text>
}

export default AttributeInput
