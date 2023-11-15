import { Cascader, Form } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { TokopediaCategoryNested, tokopediaCategoryNestedState } from "../../../recoil/selectors/tokopedia_category_nested"
import { CascaderOption } from "../../../types/cascader"
import { requiredValidator } from "./validator/basic_validator"
import { useSetTokopediaAttribute } from "../../../recoil/callbacks/set_tokopedia_attribute"


function tokopediaPublicNestedMapper(category: TokopediaCategoryNested): CascaderOption {
    return {
        value: category.catid,
        label: category.name,
        children: category.children?.map(tokopediaPublicNestedMapper)
    }
}

interface Props {
    value?: number[]
    onChange?: (value?: number[]) => void
}

const CategoryCascader: React.FC<Props> = (props: Props) => {
    const { onChange, ...reProps } = props

    const categories = useRecoilValue(tokopediaCategoryNestedState)
    const options = categories.map(tokopediaPublicNestedMapper)

    return <Cascader
        allowClear={false}
        {...reProps}
        options={options}
        onChange={(values) => onChange?.(values?.map((v) => parseInt(v.toString())))}
    />
}

const AttributeTokopediaCategoryForm: React.FC<Props> = () => {

    const setTokopediaAttribute = useSetTokopediaAttribute()

    return <Form.Item shouldUpdate noStyle>
        {(form) => <Form.Item
            label="Kategori"
            name={["tokpedAttribute", "data", "categories"]}
            labelAlign="left"
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            rules={[requiredValidator]}
            className="mb-0"
        >
            <CategoryCascader onChange={(categories) => {
                categories && setTokopediaAttribute(categories)
                form.setFieldValue(["tokpedAttribute", "data", "attributes"], [])}
            } />
        </Form.Item>}
    </Form.Item>
}

export default AttributeTokopediaCategoryForm
