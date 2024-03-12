import { Select, SelectProps } from "antd"
import React from "react"
import toCurrency from "../../model/product"

const rounds = [
    10000,
    20000,
    30000,
    40000,
    50000,
    100000,
    200000,
    300000,
    400000,
    500000
]

interface Props extends Omit<SelectProps, "value" | "onChange"> {
    value: number
    onChange(number: number): void
}

const RangeHargaSelect: React.FC<Props> = (props: Props) => {

    const { value, onChange, ...reprops } = props

    return <Select
        value={value}
        options={rounds.map((value) => ({
            value,
            label: toCurrency(value),
        }))}
        onChange={onChange}
        {...reprops}
    />
}

export default RangeHargaSelect
