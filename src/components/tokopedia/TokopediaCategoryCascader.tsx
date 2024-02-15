import { Cascader, CascaderProps } from 'antd'
import React from 'react'
import { useRecoilValue } from "recoil"

import { tokopediaCategoryNestedState } from '../../recoil/selectors/tokopedia_category_nested'
import { tokopediaCategoryValueState } from '../../recoil/selectors/tokopedia_category_value'

import type { TokopediaCategoryNested } from "../../recoil/selectors/tokopedia_category_nested"
import type { CascaderOption } from "../../types/cascader"


function shopeePublicNestedMapper(category: TokopediaCategoryNested): CascaderOption {
    return {
        value: category.catid,
        label: category.name,
        children: category.children?.map(shopeePublicNestedMapper)
    }
}

interface Props extends Pick<CascaderProps, "style" | "disabled" | "className"> {
    value: number
    onChange?: (value: number) => void
    onOptionsChange?: (options: CascaderOption[]) => void
}

const TokopediaCategoryCascader: React.FC<Props> = (props: Props) => {

    const { onChange, onOptionsChange, ...reProps } = props

    const categories = useRecoilValue(tokopediaCategoryNestedState)
    const options = categories.map(shopeePublicNestedMapper)

    const categoryValue = useRecoilValue(tokopediaCategoryValueState(props.value))

    return <Cascader
        placeholder="pilih kategori tokopedia..."
        allowClear={false}
        {...reProps}
        value={categoryValue?.category_ids}
        options={options}
        onChange={(values, options) => {
            const val = values[values.length - 1] as number
            onChange?.(val || 0)
            onOptionsChange?.(options)
        }}
    />
}

export default TokopediaCategoryCascader
