import { Form } from "antd"
import React from "react"

import { BasicUpdatePayload } from "../../../model/apisdk"
import ImageCollectionSelect from "../../common/ImageCollectionSelect"
import { CheckFS, pathValidator } from "./validator/path_validator"

interface Props {
    cheker: CheckFS
}

const ImageCollectionPathForm: React.FC<Props> = (props: Props) => {

    return <Form.Item<BasicUpdatePayload>
        label="Koleksi Gambar"
        name="image_collection_path"
        rules={[
            { required: true, message: 'Koleksi gambar wajib diisi, pastikan memilih path yang sesuai.' },
            { validator: pathValidator(props.cheker) }
        ]}
    >
        <ImageCollectionSelect style={{ width: 300 }} />
    </Form.Item>
}

export default ImageCollectionPathForm
