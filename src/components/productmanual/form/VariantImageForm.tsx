import { Form, Input, InputProps } from "antd"
import React from "react"

import { FormModel } from "../../../model/product_manual/ProductManualForm"
import { requiredValidator } from "./validator/basic_validator"
import { CheckFS, pathValidator } from "./validator/path_validator"

import ImageCollectionSelect from "../../common/ImageCollectionSelect"

interface Props {
    cheker: CheckFS
    index: number
}

const OptionName: React.FC<InputProps> = (props: InputProps) => {
    return <>
        <p className="mb-2 c-tx-center">{props.value || "-"}</p>
        <Input hidden {...props} />
    </>
}

const VariantImageForm: React.FC<Props> = (props: Props) => {
    const { cheker, index } = props
    return <div>
        <Form.Item<FormModel> name={["variant", "variant_image", index, "option_name"]} noStyle>
            <OptionName />
        </Form.Item>

        <Form.Item<FormModel>
            name={["variant", "variant_image", index, "image_collection_path"]}
            rules={[requiredValidator, pathValidator(cheker)]}
            className="mb-0"
        >
            <ImageCollectionSelect placeholder="Pilih koleksi gambar" />
        </Form.Item>
    </div >
}

export default VariantImageForm
