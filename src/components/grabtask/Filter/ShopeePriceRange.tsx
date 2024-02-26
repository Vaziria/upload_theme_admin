import { InputNumber, Space } from "antd"
import React from "react"

import { GrabShopeeQuery } from "../../../model/newapisdk"

type PriceRange = Pick<GrabShopeeQuery, "price_min" | "price_max">

interface Props {
    value: PriceRange
    onChange: (value: PriceRange) => void
}

const PriceRange: React.FC<Props> = (props: Props): JSX.Element => {

    const { value, onChange } = props
    const { price_min: pMin, price_max: pMax } = value

    return <Space.Compact block style={{ width: 300 }}>
        <InputNumber
            value={pMin}
            prefix="Rp."
            min={0}
            className="flex-1"
            onChange={(v) => {
                const price_min = v || 0
                const price_max = price_min > pMax ? price_min : pMax
                onChange({
                    price_min,
                    price_max,
                })
            }}
        />
        <InputNumber
            value={pMax}
            prefix="-&nbsp;&nbsp;&nbsp;&nbsp;Rp."
            min={0}
            className="flex-1"
            style={{
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
                borderLeft: 0,
            }}
            onChange={(v) => {
                const val = v || 0
                const price_max = pMin > val ? pMin : val
                onChange({
                    ...value,
                    price_max,
                })
            }}
        />
    </Space.Compact>
}

export default PriceRange
