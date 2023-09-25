import { Form, Input } from "antd"
import React from "react"

import { BasicUpdatePayload } from "../../../model/apisdk"

const TitleForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Nama Produk"
        name="title"
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { min: 5, message: "Nama produkmu terlalu pendek. Mohon masukkan min. 5 karakter." }
        ]}
    >
        <Input placeholder="Mohon masukkan" showCount maxLength={255} />
    </Form.Item>
}

export default TitleForm
