import { Card, Form, FormListFieldData, Modal, Radio, RadioChangeEvent, Space } from "antd";
import React from "react";

import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";

import { FieldConfig } from "../../../model/apisdk";
import TrashIconButton from "../../button/TrashIconButton";
import FieldConfigOnceTextForm from "./FieldConfigOnceTextForm";


interface Props {
    field: FormListFieldData
    onDelete(id: number): void
}

interface FieldTypeProps {
    value?: Partial<FieldConfig>
    onChange?(v: Partial<FieldConfig>): void
}

const FieldTypeRadio: React.FC<FieldTypeProps> = (props: FieldTypeProps) => {
    const { value, onChange } = props

    function onRadioChange(e: RadioChangeEvent) {
        const spin: Partial<FieldConfig> = {
            ...value,
            use_spin: false,
            use_once_text: false,
        }

        switch (e.target.value) {
            case 0:
                spin.use_spin = true
                return onChange?.(spin)

            case 1:
                spin.use_once_text = true
                return onChange?.(spin)
        }
    }

    return <Radio.Group value={value?.use_spin ? 0 : 1} onChange={onRadioChange}>
        <Radio.Button value={0}>Gunakan Spin</Radio.Button>
        <Radio.Button value={1}>Gunakan Teks Sekali Pakai</Radio.Button>
    </Radio.Group>
}

const FieldConfigItemForm: React.FC<Props> = (props: Props) => {
    const { field, onDelete } = props
    return <div>
        <Form.Item shouldUpdate noStyle>
            {(form) => {

                

                const id: number | undefined = form.getFieldValue(["fieldConfig", "field_spin", field.name, "id"])
                const fieldType: FieldType = form.getFieldValue(["fieldConfig", "field_spin", field.name, "field_type"])
                const useSpin: boolean = form.getFieldValue(["fieldConfig", "field_spin", field.name, "use_spin"])

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
                    <Form.Item name={field.name} className="mb-3 mt-1">
                        <FieldTypeRadio />
                    </Form.Item>

                    <FieldConfigOnceTextForm field={field} disabled={useSpin} />
                </Card>
            }}
        </Form.Item>
    </div>
}

export default FieldConfigItemForm
