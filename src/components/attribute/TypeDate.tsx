import { DatePicker } from "antd"
import dayjs from "dayjs"
import React from "react"

import { AttributeInputProps, createCustomValue } from "./base"

const TypeDate: React.FC<AttributeInputProps> = (props: AttributeInputProps) => {

    const { attribute, value, onChange } = props
    const { attributeId } = attribute
    const [dateValue, setDateValue] = React.useState<dayjs.Dayjs>()

    React.useEffect(() => {
        if (value?.custom_value) {
            const dvalue = dayjs(parseInt(value.custom_value.raw_value) * 1000)
            if (dvalue.isValid()) {
                setDateValue(dvalue)
                return
            }
        }

        setDateValue(undefined)
    }, [value])

    function onDateChange(dvalue: dayjs.Dayjs | null) {
        const time = dvalue?.startOf("day").toDate().getTime()
        const value = time ? Math.trunc(time / 1000).toString() : undefined

        if (value) {
            onChange?.({
                attribute_id: attributeId,
                attribute_value_id: 0,
                custom_value: undefined,
                attribute_values: [createCustomValue(value)],
            })
        } else {
            onChange?.(undefined)
        }
    }

    return <DatePicker
        placeholder=""
        className="w-100"
        value={dateValue}
        onChange={onDateChange}
    />
}

export default TypeDate
