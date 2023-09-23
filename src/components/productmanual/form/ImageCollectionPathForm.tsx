import React from "react"
import { Button, Form, Input, Space } from "antd"

import { ProductManualForm } from "../../../model/product_manual/ProductManulForm"

async function pathValidator(_: unknown, path: string): Promise<string> {
    if (path?.length < 5 || path === "error") {
        throw "path tidak ditemukan"
    }

    return ""
}

const ImageCollectionPathForm: React.FC = () => {

    const clip = navigator.clipboard
    const [value, setValue] = React.useState("1234123")

    function pasteClipboard() {
        navigator.clipboard
            .readText()
            .then(setValue)
    }

    return <Form.Item<ProductManualForm>
        label="Koleksi Gambar"
        name="image_collection_path"
        // getValueFromEvent={}
        rules={[
            { required: true, message: 'Koleksi gambar wajib diisi, pastikan memilih path yang sesuai.' },
            { validator: pathValidator }
        ]}
    >
        {/* <Space.Compact style={{ width: '100%' }}> */}
            <Input placeholder="D:\my_images" disabled={!!clip} />
            {/* {clip && <Button
                icon={<i className="fas fa-paste"></i>}
                onClick={pasteClipboard}
            >Tempel</Button>} */}
        {/* </Space.Compact> */}
    </Form.Item>
}

export default ImageCollectionPathForm
