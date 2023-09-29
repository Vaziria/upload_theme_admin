import { Form, InputNumber } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";
import { priceValidator } from "./validator/price_validator";

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
