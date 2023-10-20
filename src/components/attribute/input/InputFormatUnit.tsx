import { Select, Space } from "antd"
import React from "react"

import InputFormat from "./InputFormat"

interface Props {
    formatType: number
    value?: string
    unit?: string
    unitlist?: string[]
    onChange?(value?: string, unit?: string): void
}

const InputFormatUnit: React.FC<Props> = (props: Props) => {

    const { formatType, value, unit, unitlist, onChange } = props
    const options = unitlist?.map((value) => ({
        label: value,
        value
    }))

    const [unitState, setUnitState] = React.useState(unit || unitlist?.[0])

    return <Space.Compact block>
        <InputFormat
            formatType={formatType}
            value={value}
            onChange={(v) => onChange?.(v, unitState)}
        />
        <Select
            value={unitState}
            options={options}
            style={{ maxWidth: 100 }}
            onChange={(v) => {
                setUnitState(v)
                onChange?.(value, v)
            }}
        />
    </Space.Compact>
}

export default InputFormatUnit
