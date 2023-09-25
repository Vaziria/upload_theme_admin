import { Form, InputNumber } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";

function priceValidator(_: unknown, value: number) {
    if (!value || value > 99) {
        return Promise.resolve();
      }
      return Promise.reject(new Error("Nilai yang harus diisi setidaknya 99"));
}

const PriceForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Harga"
        name="price"
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { validator: priceValidator }
        ]}
    >
        <InputNumber
            addonBefore="Rp"
            placeholder="Mohon masukkan"
            style={{ minWidth: 200, width: 300 }}
        />
    </Form.Item>
}

export default PriceForm
