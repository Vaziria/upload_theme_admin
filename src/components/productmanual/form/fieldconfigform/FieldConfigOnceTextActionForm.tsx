import { Form, FormInstance, FormListFieldData, FormListOperation, Space } from "antd";
import React from "react";

import { UpdateFieldConfigPayload, UseOnceText } from "../../../../model/apisdk";

import AddButton from "../../../button/AddButton";
import DeleteButton from "../../../button/DeleteButton";
import FieldConfigOnceTextUploadForm from "./FieldConfigOnceTextUploadForm";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    field: FormListFieldData
    opt: FormListOperation
    onChange?(): void
}

const FieldConfigOnceTextActionForm: React.FC<Props> = (props: Props) => {

    const { form, field, opt, onChange } = props
    const onceTextKey = ["field_spin", field.name, "once_text"]
    const onceTexts: UseOnceText[] | undefined = Form.useWatch(onceTextKey, form)

    function setField(value: Partial<UseOnceText>[]) {
        form.setFieldValue(onceTextKey, value)
        onChange?.()
    }

    function addField() {
        opt.add({ text: "" }, 0)
        onChange?.()
    }

    return <Space>
        <FieldConfigOnceTextUploadForm
            value={onceTexts}
            onChange={(value) => setField(value)}
        />
        <AddButton
            type="dashed"
            onClick={addField}
        >Tambah Teks Sekali Pakai</AddButton>
        <DeleteButton
            type="dashed"
            onClick={() => setField([])}
        >Hapus Semua</DeleteButton>
    </Space>
}

export default FieldConfigOnceTextActionForm
