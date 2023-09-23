import React from "react"
import { Form, InputNumber } from "antd"

import { ProductManualForm } from "../../../model/product_manual/ProductManulForm"

function priceValidator(_: unknown, value: number) {
    if (!value || value > 99) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Nilai yang harus diisi setidaknya 99"));
}

const PriceForm: React.FC = () => {
    return <Form.Item<ProductManualForm>
        label="Harga"
        name="price"
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { validator: priceValidator }
        ]}
    >
        <InputNumber placeholder="Mohon masukkan" style={{ minWidth: 200, width: 300 }} />
    </Form.Item>
}

export default PriceForm
