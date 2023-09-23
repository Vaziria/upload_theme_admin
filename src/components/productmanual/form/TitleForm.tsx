import React from "react"
import { Form, Input } from "antd"

import { ProductManualForm } from "../../../model/product_manual/ProductManulForm"

const TitleForm: React.FC = () => {
    return <Form.Item<ProductManualForm>
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
