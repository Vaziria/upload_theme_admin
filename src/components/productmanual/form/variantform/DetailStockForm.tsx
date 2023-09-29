import { Form, InputNumber } from "antd";
import React from "react";

import { UpdateVariationPayload } from "../../../../model/apisdk";

interface Props {
    index: number
}

const DetailStockForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<UpdateVariationPayload>
        name={["variant", props.index, "stock"]}
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
        ]}
        className="mb-0"
    >
        <InputNumber
            placeholder="Mohon masukkan"
            style={{ width: "100%" }}
        />
    </Form.Item>
}

export default DetailStockForm
