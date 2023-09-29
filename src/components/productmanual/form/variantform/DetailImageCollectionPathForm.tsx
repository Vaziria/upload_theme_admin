import { Form } from "antd"
import React from "react"

import { UpdateVariationPayload } from "../../../../model/apisdk"
import ImageCollectionSelect, { ImageCollectionSelectProps } from "../../../common/ImageCollectionSelect"
import { CheckFS, pathValidator } from ".././validator/path_validator"

interface Props extends ImageCollectionSelectProps {
    cheker: CheckFS
    index: number
}

const DetailImageCollectionPathForm: React.FC<Props> = (props: Props) => {

    const { cheker, index, ...selectProps } = props

    return <Form.Item<UpdateVariationPayload>
        name={["variant", index, "image_collection_path"]}
        rules={[
            { required: true, message: 'Koleksi gambar wajib diisi, pastikan memilih path yang sesuai.' },
            { validator: pathValidator(cheker) }
        ]}
    >
        <ImageCollectionSelect {...selectProps} />
    </Form.Item>
}

export default DetailImageCollectionPathForm
