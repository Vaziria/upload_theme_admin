import { Empty, Select } from "antd"
import { DefaultOptionType, SelectProps } from "antd/es/select"
import React from "react"

import { AttributeValue } from "../../model/apisdk"
import { OptionCustom } from "./TypeSelectWithCustom"
import { AttributeInputProps, createCustomValue, createValue } from "./base"

interface OptionId extends DefaultOptionType {
    type: "id"
    value: number
}

type Value = string | number
type Option = OptionId | OptionCustom

interface Props extends AttributeInputProps, Pick<SelectProps, "dropdownRender"> {
    multiple?: true
    customOptions?: OptionCustom[]
}

export type TypeSelectProps = Props

function createOptions(mainOptions: OptionId[], customOptions: OptionCustom[], mapper: (option: Option) => Option): Option[] {
    mainOptions = mainOptions.length ? mainOptions : [{
        type: "id",
        label: "Tidak ada pilihan",
        value: 0,
        disabled: true
    }]

    if (customOptions.length) {
        return [
            {
                type: "id",
                label: "Pilihan Utama",
                options: mainOptions.map(mapper),
                value: 0,
            },
            {
                type: "custom",
                label: "Pilihan Isi Sendiri",
                options: customOptions.map(mapper),
                value: "",
                unit: ""
            },
        ]
    }
    return mainOptions.map(mapper)
}

const TypeSelect: React.FC<Props> = (props: Props) => {
    const { attribute, customOptions, dropdownRender, value, onChange, multiple } = props
    const { attributeId, attributeInfo, children } = attribute
    const { maxValueCount } = attributeInfo

    const mainOptions = children.map<OptionId>((child) => ({
        type: "id",
        label: child.displayName,
        value: child.valueId
    }))

    const selectValue = value?.attribute_values.map((attrval) => {
        if (attrval.value_id) {
            return attrval.value_id
        }
        return attrval.raw_value
    })

    function createOptionValue(option: Option): AttributeValue {
        if (option.type === "id") {
            return createValue(option.value)
        } else {
            return createCustomValue(option.value, option.unit)
        }
    }

    const disabled = (value?.attribute_values.length || 0) === maxValueCount
    const options = createOptions(mainOptions, customOptions || [], (option) => {
        const selected = value?.attribute_values.some((v) => {
            if (option.type === "id") {
                return option.value === v.value_id
            }
            return option.value === v.raw_value && option.unit === v.unit
        })

        return {
            ...option,
            disabled: disabled && !selected,
            selected
        }
    })

    function filterOption(input: string, option?: Option) {
        const label = option?.label?.toString().toLocaleLowerCase()
        return (label ?? "").includes(input.toLocaleLowerCase())
    }

    function onSelectChange(_: unknown, option: Option | Option[]) {
        const values: AttributeValue[] = []

        if (Array.isArray(option)) {
            option.forEach((opt) => {
                values.push(createOptionValue(opt))
            })
        } else if (option) {
            values.push(createOptionValue(option))
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
    }

    const notFound = <Empty
        image={Empty.PRESENTED_IMAGE_SIMPLE}
        description="Hasil tidak ditemukan"
    />

    return <Select<Value | Value[], Option>
        allowClear
        value={selectValue}
        mode={multiple && "multiple"}
        options={options}
        filterOption={filterOption}
        dropdownRender={dropdownRender}
        notFoundContent={notFound}
        onChange={onSelectChange}
    />
}

export default TypeSelect
