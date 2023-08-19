import React from 'react'
import { Cascader, CascaderProps } from 'antd'
import { useRecoilValue } from "recoil"

import { shopeeCategoryNestedState } from "../../recoil/selectors/shopee_category_nested"
import { shopeeCategoryValueState } from "../../recoil/selectors/shopee_category_value"

import type { ShopeeCategoryNested } from "../../recoil/selectors/shopee_category_nested"
import type { CascaderOption } from "../../types/cascader"


function shopeePublicNestedMapper(category: ShopeeCategoryNested): CascaderOption {
    return {
        value: category.catid,
        label: category.name,
        children: category.children?.map(shopeePublicNestedMapper)
    }
}

interface Props extends Pick<CascaderProps, "style" | "disabled"> {
    value: number
    onChange?: (value: number) => void
}

const ShopeeeCategoryCascader: React.FC<Props> = (props: Props) => {

    const { onChange, ...reProps } = props

    const categories = useRecoilValue(shopeeCategoryNestedState)
    const options = categories.map(shopeePublicNestedMapper)

    const categoryValue = useRecoilValue(shopeeCategoryValueState(props.value))

    return <Cascader
        placeholder="pilih kategori shopee..."
        {...reProps}
        value={categoryValue?.chain_ids}
        options={options}
        onChange={(values) => {
            const val = values[values.length - 1] as number
            onChange?.(val || 0)
        }}
    />
}

export default ShopeeeCategoryCascader