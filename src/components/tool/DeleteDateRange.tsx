import { DatePicker } from "antd"
import dayjs from "dayjs"
import React from "react"

import { DeleteConfig } from "../../model/newapisdk"

type Value = Pick<DeleteConfig, "awaltanggal" | "tanggal">

interface Props {
    value: Value
    onChange: (v: Value) => void
}

const dateformat = "YYYY-MM-DD HH:mm:ss"

const DeleteDateRange: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    const datemin = dayjs(value.awaltanggal, dateformat)
    const datemax = dayjs(value.tanggal, dateformat)

    return <DatePicker.RangePicker
        value={[datemin, datemax]}
        className="w-100"
        placeholder={["Tanggal Awal", "Tanggal Akhir"]}
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