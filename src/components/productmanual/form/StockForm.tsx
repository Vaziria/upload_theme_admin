import { Form, InputNumber } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";

const StockForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Stock"
        name="stock"
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
        ]}
    >
        <InputNumber
            placeholder="Mohon masukkan"
            style={{ minWidth: 200, width: 300 }}
        />
    </Form.Item>
}

export default StockForm
