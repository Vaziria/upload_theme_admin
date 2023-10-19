import { Form, FormListFieldData, Input } from "antd";
import React from "react";

import { FieldType } from "../../../model/product_manual/FieldConfig";
import { requiredValidator } from "./validator/basic_validator";


interface Props {
    field: FormListFieldData
    fieldType?: FieldType
}

const FieldConfigSpinTextForm: React.FC<Props> = (props: Props) => {

    if (props.fieldType === "field_desc") {
        return <Form.Item
            name={[props.field.name, "spin_text"]}
            rules={[requiredValidator]}
            label={"Spin Text"}
            labelCol={{ span: 0 }}
            wrapperCol={{ span: 24 }}
            className="mb-0"
        >
            <Input.TextArea rows={8} />
        </Form.Item>
    }

    return <Form.Item
        name={[props.field.name, "spin_text"]}
        rules={[requiredValidator]}
        label={"Spin Text"}
        labelCol={{ span: 0 }}
        wrapperCol={{ span: 24 }}
        className="mb-0"
    >
        <Input placeholder="Mohon masukkan" />
    </Form.Item>
}

export default FieldConfigSpinTextForm
