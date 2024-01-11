import { Space } from "antd"
import React from "react"

import { GrabSearchFilter } from "../../../model/newapisdk"
import AntdCheckbox from "../../common/AntdCheckbox"

type FilterGroup = Pick<GrabSearchFilter, "bulk_price" | "in_stock" | "untung_paling_besar">
type FilterKey = keyof FilterGroup

interface FilterItem {
    key: FilterKey
    label: string
}

interface Props {
    value: FilterGroup
    onChange: (value: FilterGroup) => void
}

const filterItems: FilterItem[] = [
    {
        key: "bulk_price",
        label: "Harga Grosir",
    },
    {
        key: "in_stock",
        label: "Hanya Stock Tersedia",
    },
    {
        key: "untung_paling_besar",
        label: "Untung Paling Besar",
    },
]

const SearchFilterGroupCheckbox: React.FC<Props> = (props: Props): JSX.Element => {

    const { value, onChange } = props

    return <Space direction="vertical">
        {filterItems.map((item) => <AntdCheckbox
            key={item.key}
            checked={!!value[item.key]}
            onChange={(checked) => onChange({
                ...value,
                [item.key]: checked ? 1 : 0,
            })}
        >
            {item.label}
        </AntdCheckbox>)}
    </Space>
}

export default SearchFilterGroupCheckbox
