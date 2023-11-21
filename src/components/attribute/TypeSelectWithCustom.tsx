import { Divider } from "antd"
import { DefaultOptionType, SelectProps } from "antd/es/select"
import React from "react"

import { AttributePayload } from "../../model/newapisdk"
import { AttributeInputProps } from "./base"

import AddButton from "../button/AddButton"
import InputFormat from "./TypeInput"
import { TypeSelectProps } from "./TypeSelect"

export interface OptionCustom extends DefaultOptionType {
    type: "custom"
    unit: string
    value: string
}

interface Props extends AttributeInputProps {
    multiple?: true
    children(props: TypeSelectProps): JSX.Element
}

const TypeSelectWithCustom: React.FC<Props> = (props: Props) => {
    const { attribute, children, multiple, value, onChange } = props
    const { attributeId } = attribute

    const [customInput, setCustomInput] = React.useState<AttributePayload>()
    const [options, setOptions] = React.useState<OptionCustom[]>([])

    function addCustom() {
        const values = customInput?.attribute_values
        const customValue = values?.[0]
        if (customValue) {
            const { raw_value, unit } = customValue
            const option: OptionCustom = {
                type: "custom",
                label: raw_value + unit,
                value: raw_value,
                unit: unit
            }
            options.push(option)
        }

        if (multiple) {
            values?.unshift(...(value?.attribute_values || []))
        }

        if (values && values.length > 0) {
            onChange?.({
                attribute_id: attributeId,
                attribute_value_id: 0,
                custom_value: undefined,
                attribute_values: values,
            })
        } else {
            onChange?.(undefined)
        }
        setOptions([...options])
        setCustomInput(undefined)
    }

    const dropdownRender: SelectProps["dropdownRender"] = ((menu) => {
        return <>
            {menu}
            <Divider style={{ margin: "8px 0 4px" }} />
            <div className="c-flex c-gap-2" style={{ padding: 4 }}>
                <InputFormat
                    value={customInput}
                    attribute={attribute}
                    onChange={setCustomInput}
                />
                <AddButton onClick={addCustom} />
            </div>
        </>
    })

    return children({
        ...props,
        dropdownRender,
        customOptions: options
    })
}

export default TypeSelectWithCustom
