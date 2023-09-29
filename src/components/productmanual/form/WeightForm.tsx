import { Form, InputNumber } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";

const MIN_WEIGHT = 1
const MAX_WEIGHT = 1000000

function weightValidator(_: unknown, value: number) {
    if (Number.isFinite(value)) {
        if (value < MIN_WEIGHT || value > MAX_WEIGHT) {
            return Promise.reject(new Error("Masukkan 1 sampai 1000000."));
        }
    }

    return Promise.resolve();
}

const WeightForm: React.FC = () => {
    return <Form.Item<BasicUpdatePayload>
        label="Berat"
        name="weight"
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { validator: weightValidator },
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
