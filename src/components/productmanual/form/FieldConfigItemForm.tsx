import { Card, Form, FormInstance, FormListFieldData, Modal, Space } from "antd";
import React from "react";

import { UpdateFieldConfigPayload } from "../../../model/apisdk";
import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";

import TrashIconButton from "../../button/TrashIconButton";
import FieldConfigRadio from "./fieldconfigform/FieldConfigRadioForm";
import FieldConfigTextForm from "./fieldconfigform/FieldConfigTextForm";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    field: FormListFieldData
    onDelete(id: number): void
}

const FieldConfigItemForm: React.FC<Props> = (props: Props) => {
    const { form, field, onDelete } = props

    const id: number | undefined = Form.useWatch(["field_spin", field.name, "id"], form)
    const fieldType: FieldType = Form.useWatch(["field_spin", field.name, "field_type"], form)
    const label = <Space>
        <i className="fas fa-cog c-tx-gray" />
        {fieldType && fieldLabels[fieldType]}
    </Space>

    function removeItem() {
        Modal.confirm({
            closable: true,
            maskClosable: true,
            centered: true,
            title: "Hapus Field Config?",
            content: <div className="my-3 mx-0">
                Penghapusan field config bersifat mutlak, config tidak akan kembali setelah dihapus, harap hati-hati.
            </div>,
            cancelButtonProps: {
                style: {
                    width: "calc(50% - 4px)",
                },
            },
            cancelText: "Batal",
            okButtonProps: {
                style: {
                    width: "calc(50% - 4px)",
                },
            },
            okText: "Hapus",
            onOk() {
                id && onDelete(id)
            }
        })
    }

    return <Card
        size="small"
        title={label}
        type="inner"
        className="c-bg-gray"
        extra={<TrashIconButton onClick={removeItem} />}
    >
        <FieldConfigRadio {...props} />
        <FieldConfigTextForm {...props} />
    </Card>
}

export default FieldConfigItemForm
