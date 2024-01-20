import React from "react"
import { Select } from "antd"

import type { SelectProps } from "antd"
import type { MarketList } from "../../model/Common"

type SelProps = SelectProps<MarketList | undefined>

interface Props extends Omit<SelProps, "options" | "onChange" | "value"> {
    onChange?: (collection?: MarketList) => void;
    value?: MarketList
    hidemp?: MarketList[]
}

const MarketplaceSelect: React.FC<Props> = (props: Props) => {

    const onChange: Props["onChange"] = (value) => {
        props.onChange?.(value || undefined)
    }

    const options: { value: MarketList, label: string }[] = [
        { value: 'shopee', label: 'Shopee' },
        { value: 'tokopedia', label: 'Tokopedia' },
        { value: 'jakmall', label: 'Jakmall' },
    ]

    return <Select
        showSearch
        placeholder="pilih marketplace"
        {...props}
        options={options.filter((option) => !props.hidemp?.includes(option.value))}
        onChange={onChange}
    />
}

export default MarketplaceSelect