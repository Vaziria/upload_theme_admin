import { Cascader, CascaderProps } from "antd"
import { DefaultOptionType } from "antd/es/cascader"
import React from "react"
import { useRecoilValue } from "recoil"

import { CategoryNavigation } from "../../../model/newapisdk"
import { jakmallCategoriesState } from "../../../recoil/atoms/categories"

interface OptionType extends Omit<DefaultOptionType, "value"> {
    value: string
}

interface Props extends Pick<CascaderProps, "style" | "disabled" | "className" | "size"> {
    value: string[]
    onChange?: (value: string[]) => void
}

function categoryOptMapper(category?: CategoryNavigation): OptionType {

    const { url, name, children } = category || {}
    const paths = url?.split("/")

    return {
        label: name,
        value: paths?.[paths.length - 1] || "",
        children: children?.map(categoryOptMapper)
    }
}

const CategoryCascader: React.FC<Props> = (props: Props): JSX.Element => {

    const { onChange, ...reprops } = props
    const categories = useRecoilValue(jakmallCategoriesState)
    const options = categories.map(categoryOptMapper)


    return <Cascader
        placeholder="pilih kategori jakmall..."
        options={options}
        onChange={(values) => {
            const categories = values?.map((v) => v.toString())
            onChange?.(categories)
        }}
        {...reprops}
    />
}

export default CategoryCascader