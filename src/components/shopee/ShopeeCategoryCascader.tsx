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

interface Props extends Pick<CascaderProps, "style" | "disabled" | "className"> {
    value: number
    onChange?: (value: number, values: number[]) => void
    onOptionsChange?: (options: CascaderOption[]) => void
}

const ShopeeeCategoryCascader: React.FC<Props> = (props: Props) => {

    const { onChange, onOptionsChange, ...reProps } = props

    const categories = useRecoilValue(shopeeCategoryNestedState)
    const options = categories.map(shopeePublicNestedMapper)

    const categoryValue = useRecoilValue(shopeeCategoryValueState(props.value))

    return <Cascader
        placeholder="pilih kategori shopee..."
        allowClear={false}
        {...reProps}
        value={categoryValue?.chain_ids}
        options={options}
        onChange={(values, options) => {
            const val = values[values.length - 1] as number
            onChange?.(val || 0, values as number[])
            onOptionsChange?.(options)
        }}
    />
}

export default ShopeeeCategoryCascader
