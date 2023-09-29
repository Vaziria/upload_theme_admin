import { Form, InputNumber } from "antd";
import React from "react";

import { UpdateVariationPayload } from "../../../../model/apisdk";
import { priceValidator } from "../validator/price_validator";

interface Props {
    index: number
}

const DetailPriceForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<UpdateVariationPayload>
        name={["variant", props.index, "price"]}
        initialValue={0}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            { validator: priceValidator }
        ]}
        className="mb-0"
    >
        <InputNumber
            addonBefore="Rp"
            placeholder="Mohon masukkan"
            style={{ width: "100%" }}
        />
    </Form.Item>
}

export default DetailPriceForm
