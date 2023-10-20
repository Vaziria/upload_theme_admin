import { Cascader, CascaderProps, Form } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { ShopeeCategoryNested, shopeeCategoryNestedState } from "../../../recoil/selectors/shopee_category_nested"
import { CascaderOption } from "../../../types/cascader"
import { requiredValidator } from "./validator/basic_validator"


function shopeePublicNestedMapper(category: ShopeeCategoryNested): CascaderOption {
    return {
        value: category.catid,
        label: category.name,
        children: category.children?.map(shopeePublicNestedMapper)
    }
}

interface Props extends Pick<CascaderProps, "style" | "disabled"> {
    value?: number[]
    onChange?: (value?: number[]) => void
}

const CategoryCascader: React.FC<Props> = (props: Props) => {

    const { onChange, ...reProps } = props

    const categories = useRecoilValue(shopeeCategoryNestedState)
    const options = categories.map(shopeePublicNestedMapper)

    return <Cascader
        {...reProps}
        options={options}
        onChange={(values) => onChange?.(values?.map((v) => parseInt(v.toString())))}
    />
}

const AttributeShopeeCategoryForm: React.FC<Props> = () => {
    return <Form.Item
        label="Kategori"
        name={["shopeeAttribute", "data", "categories"]}
        labelAlign="left"
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        rules={[requiredValidator]}
        className="mb-0"
    >
        <CategoryCascader />
    </Form.Item>
}

export default AttributeShopeeCategoryForm
