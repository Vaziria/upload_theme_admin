import { Checkbox } from "antd"
import React from "react"

import { DeleteConfig } from "../../model/newapisdk"

type Value = Pick<DeleteConfig, "blokir" | "diperiksa" | "diarsipkan">
type Key = keyof Value

interface Props {
    value: Value
    onChange: (value: Value) => void
}

interface Option {
    label: string
    value: Key
}

const DeleteGroupCheck: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    const options: Option[] = [
        {
            label: "Hanya yang Diblokir",
            value: "blokir",
        },
        {
            label: "Yang Diperiksa",
            value: "diperiksa",
        },
        {
            label: "Diarsipkan",
            value: "diarsipkan",
        },
    ]

    const checkvalue = Object.entries(value).reduce((res, val) => {
        if (val[1]) {
            res.push(val[0])
        }
        return res
    }, [] as string[])

    return <Checkbox.Group
        options={options}
        value={checkvalue}
        onChange={(value) => {
            const changeVal: Value = {
                blokir: false,
                diperiksa: false,
                diarsipkan: false
            }
            value.forEach((v) => {
                changeVal[v as Key] = true
            })

            onChange(changeVal)
        }}
    />
}

export default DeleteGroupCheck