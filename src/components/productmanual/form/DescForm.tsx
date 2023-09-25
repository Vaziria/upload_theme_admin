import { Form, Input } from "antd"
import React from "react"

import { BasicUpdatePayload } from "../../../model/apisdk"

const DescForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Deskripsi Produk"
        name="desc"
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { min: 20, message: "Deskripsi produk terlalu singkat. Mohon masukkan min.20 karakter." }
        ]}
    >
        <Input.TextArea showCount maxLength={3000} rows={8} />
    </Form.Item>
}

export default DescForm
