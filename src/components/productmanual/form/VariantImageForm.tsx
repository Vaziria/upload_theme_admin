import { Form, FormInstance } from "antd"
import React from "react"

import { UpdateVariationPayload } from "../../../model/apisdk"
import ImageCollectionSelect from "../../common/ImageCollectionSelect"
import { CheckFS, pathValidator } from "./validator/path_validator"

interface Props {
    cheker: CheckFS
    index: number
    form: FormInstance<UpdateVariationPayload>
}

const VariantImageForm: React.FC<Props> = (props: Props) => {

    const { cheker, index, form } = props
    const optionName = Form.useWatch(["variant_option", 0, "option", index], form)

    React.useEffect(() => {
        if (typeof optionName === "string") {
            form.setFieldValue(["variant_image", index, "option_name"], optionName)
        }
    }, [optionName])

    return <>
        <Form.Item<UpdateVariationPayload> name={["variant_image", index, "option_name"]} hidden />
        <Form.Item<UpdateVariationPayload>
            name={["variant_image", index, "image_collection_path"]}
            rules={[
                { required: true, message: "Koleksi gambar wajib diisi, pastikan memilih path yang sesuai." },
                { validator: pathValidator(cheker) }
            ]}
        >
            <ImageCollectionSelect placeholder="Pilih koleksi gambar" />
        </Form.Item>
    </>
}

export default VariantImageForm
