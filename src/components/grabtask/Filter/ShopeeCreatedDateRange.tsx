import { DatePicker, TimeRangePickerProps } from "antd"
import dayjs from "dayjs"
import React from "react"

import { GrabShopeeProductCreated } from "../../../model/newapisdk"
import AntdCheckbox from "../../common/AntdCheckbox"

interface Props {
    value: GrabShopeeProductCreated
    onChange: (v: GrabShopeeProductCreated) => void
}

const presets: TimeRangePickerProps["presets"] = [
    { label: "1 Minggu", value: [dayjs().add(-1, "w"), dayjs()] },
    { label: "2 Minggu", value: [dayjs().add(-2, "w"), dayjs()] },
    { label: "1 Bulan", value: [dayjs().add(-1, "M"), dayjs()] },
    { label: "3 Bulan", value: [dayjs().add(-3, "M"), dayjs()] },
    { label: "1 Tahun", value: [dayjs().add(-1, "y"), dayjs()] },
];

const GrabTaskCreatedDateRange: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    const { active, min, max } = value
    const datemin = min ? dayjs.unix(min) : null
    const datemax = max ? dayjs.unix(max) : null

    return <div>
        <AntdCheckbox
            checked={active}
            className="mb-2"
            onChange={(active) => onChange({ active, min, max })}
        >Gunakan Product Created</AntdCheckbox>
        <br />

        <DatePicker.RangePicker
            value={[datemin, datemax]}
            placeholder={["Tanggal Awal", "Tanggal Akhir"]}
            presets={presets}
            disabled={!active}
            style={{ width: 300 }}
            onChange={(value) => {
                const min = value?.[0]?.unix() || 0
                const max = value?.[1]?.unix() || 0
                onChange({ active, min, max })
            }}
        />
    </div>
}

export default GrabTaskCreatedDateRange
