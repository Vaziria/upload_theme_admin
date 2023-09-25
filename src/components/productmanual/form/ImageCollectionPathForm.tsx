import { Button, Form, FormInstance, Space } from "antd"
import React from "react"

import { BasicUpdatePayload } from "../../../model/apisdk"
import AntdInput from "../../common/AntdInput"

interface Props {
    form: FormInstance<BasicUpdatePayload>
}

async function pathValidator(_: unknown, path: string): Promise<string> {
    if (path?.length < 5 || path === "error") {
        throw "Path tidak ditemukan"
    }

    return ""
}

const ImageCollectionPathForm: React.FC<Props> = (props: Props) => {

    const clip = navigator.clipboard
    const [value, setValue] = React.useState("")

    function pasteClipboard() {
        navigator.clipboard
            .readText()
            .then((value) => {
                setValue(value)
                props.form.setFieldValue("image_collection_path", value)
                props.form.validateFields(["image_collection_path"])
            })
    }

    return <Form.Item<BasicUpdatePayload>
        label="Koleksi Gambar"
        name="image_collection_path"
        rules={[
            { required: true, message: 'Koleksi gambar wajib diisi, pastikan memilih path yang sesuai.' },
            { validator: pathValidator }
        ]}
    >
        <Space.Compact style={{ width: '100%' }}>
            <AntdInput placeholder="D:\my_images" value={value} onChange={setValue} />
            {clip && <Button
                icon={<i className="fas fa-paste"></i>}
                onClick={pasteClipboard}
            >Tempel</Button>}
        </Space.Compact>
    </Form.Item>
}

export default ImageCollectionPathForm
