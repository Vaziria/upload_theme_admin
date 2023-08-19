import React from "react"
import { Select } from "antd"

import type { SelectProps } from "antd"
import type { MarketList } from "../../model/Common"

type SelProps = SelectProps<MarketList | undefined>

interface Props extends Omit<SelProps, "options" | "onChange" | "value"> {
    onChange?: (collection?: MarketList) => void;
    value?: MarketList
}

const MarketplaceSelect: React.FC<Props> = (props: Props) => {

    const onChange: Props["onChange"] = (value) => {
        props.onChange?.(value || undefined)
    }

    const options: SelProps["options"] = [
        { value: 'shopee', label: 'Shopee' },
        { value: 'tokopedia', label: 'Tokopedia' },
    ]

    return <Select
        showSearch
        placeholder="pilih marketplace"
        {...props}
        options={options}
        onChange={onChange}
    />
}

export default MarketplaceSelect