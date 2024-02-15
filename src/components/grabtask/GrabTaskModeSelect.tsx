import { Select, SelectProps } from "antd"
import React from "react"

export type GrabTaskMode = "toko_username" | "product_url" | "category" | "dump_category" | "keyword"

const options: {
    value: GrabTaskMode
    label: string
}[] = [
    {
        value: "toko_username",
        label: "list username toko txt"
    },
    {
        value: "product_url",
        label: "list url txt"
    },
    {
        value: "category",
        label: "kategori"
    },
    {
        value: "dump_category",
        label: "kategori csv"
    },
    {
        value: "keyword",
        label: "keyword"
    }
]

const GrabTaskModeSelect: React.FC<SelectProps> = (props: SelectProps) => {
    return <Select
        placeholder="pilih mode grab..."
        style={{ minWidth: 200, borderBottom: "1px solid #d9d9d9" }}
        options={options}
        {...props}
    />
}

export default GrabTaskModeSelect
