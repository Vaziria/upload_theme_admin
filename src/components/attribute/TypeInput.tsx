import { InputNumber, Select, Space, Typography } from "antd";
import React from "react";

import { AttributeInputProps, FORMAT_TYPE_NUMBER, FORMAT_TYPE_STRING, createCustomValue } from "./base";

import AntdInput from "../common/AntdInput";

interface InputTypeProps extends AttributeInputProps {
    unit?: string;
}

const InputType: React.FC<InputTypeProps> = (props: InputTypeProps) => {
    const { attribute, value, unit, onChange } = props
    const { attributeId } = attribute
    const { formatType } = attribute.attributeInfo

    const inputValue = value?.attribute_values[0]?.raw_value

    function onInputChange(value?: string | null) {
        if (value) {
            onChange?.({
                attribute_id: attributeId,
                attribute_value_id: 0,
                custom_value: undefined,
                attribute_values: [createCustomValue(value, unit)],
            })
        } else {
            onChange?.(undefined)
        }
    }

    switch (formatType) {
        case FORMAT_TYPE_STRING:
            return <AntdInput
                className="w-100"
                value={inputValue}
                onChange={onInputChange}
            />

        case FORMAT_TYPE_NUMBER:
            return <InputNumber
                className="w-100"
                value={inputValue}
                onChange={onInputChange}
            />
    }

    return <Typography.Text type="secondary">
        Unsupported Format Type {formatType}
    </Typography.Text>
}

const TypeInput: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {
    const { attribute, value } = props
    const { attributeUnitList } = attribute.attributeInfo

    const [unit, setUnit] = React.useState(
        value?.attribute_values[0]?.unit ||
        attributeUnitList?.[0]
    )
    const options = attributeUnitList?.map((value) => ({
        label: value,
        value
    }))

    return <Space.Compact block>
        <InputType unit={unit} {...props} />
        {attributeUnitList && <Select
            value={unit}
            options={options}
            style={{ maxWidth: "30%" }}
            onChange={setUnit}
        />}
    </Space.Compact>
}

export default TypeInput
