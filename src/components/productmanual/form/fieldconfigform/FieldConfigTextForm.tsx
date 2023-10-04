import { Form, FormInstance, FormListFieldData, Input } from "antd";
import React from "react";

import { FieldConfig, UpdateFieldConfigPayload } from "../../../../model/apisdk";
import FieldConfigOnceTextForm from "./FieldConfigOnceTextForm";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    field: FormListFieldData
}

const FieldConfigTextForm: React.FC<Props> = (props: Props) => {
    const { form, field } = props

    const fieldSpin: FieldConfig | undefined = Form.useWatch(["field_spin", field.name], form)

    if (fieldSpin?.use_spin) {
        return <Form.Item
            name={[field.name, "spin_text"]}
            label="Spin"
            rules={[
                { required: true, message: "Kolom wajib diisi." },
            ]}
        >
            <Input placeholder="Mohon masukkan" />
        </Form.Item>
    }

    if (fieldSpin?.use_once_text) {
        return  <Form.Item name={[field.name, "once_text"]}>
            <FieldConfigOnceTextForm form={form} field={field} />
        </Form.Item>
    }

    return <p className="c-tx-gray">Tidak menggunakan config.</p>
}

export default FieldConfigTextForm
