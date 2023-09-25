import { Form, InputNumber } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";

const WeightForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Berat"
        name="weight"
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
        ]}
    >
        <InputNumber
            addonAfter="gr"
            placeholder="Mohon masukkan"
            style={{ minWidth: 200, width: 300 }}
        />
    </Form.Item>
}

export default WeightForm
