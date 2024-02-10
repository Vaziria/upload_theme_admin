import { DatePicker, TimeRangePickerProps } from "antd"
import dayjs from "dayjs"
import React from "react"

import { DeleteConfig } from "../../model/newapisdk"

type Value = Pick<DeleteConfig, "awaltanggal" | "tanggal">

interface Props {
    value: Value
    onChange: (v: Value) => void
}

const dateformat = "YYYY-MM-DD HH:mm:ss"

const presets: TimeRangePickerProps["presets"] = [
    { label: "1 Minggu", value: [dayjs().add(-1, "w"), dayjs()] },
    { label: "2 Minggu", value: [dayjs().add(-2, "w"), dayjs()] },
    { label: "1 Bulan", value: [dayjs().add(-1, "m"), dayjs()] },
    { label: "3 Bulan", value: [dayjs().add(-3, "m"), dayjs()] },
    { label: "1 Tahun", value: [dayjs().add(-1, "y"), dayjs()] },
  ];

const DeleteDateRange: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    const datemin = value.awaltanggal ? dayjs(value.awaltanggal, dateformat) : null
    const datemax = value.tanggal ? dayjs(value.tanggal, dateformat) : null

    return <DatePicker.RangePicker
        value={[datemin, datemax]}
        className="w-100"
        placeholder={["Tanggal Awal", "Tanggal Akhir"]}
        presets={presets}
        onChange={(value) => {

            const awaltanggal = value?.[0]?.format(dateformat) || ""
            const tanggal = value?.[1]?.format(dateformat) || ""

            onChange({
                awaltanggal,
                tanggal,
            })
        }}
    />
}

export default DeleteDateRange