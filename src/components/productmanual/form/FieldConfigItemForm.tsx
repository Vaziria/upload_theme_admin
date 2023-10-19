import { Card, Form, FormListFieldData, Modal, Radio, RadioChangeEvent, Space } from "antd";
import React from "react";

import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";

import { FieldConfig } from "../../../model/apisdk";
import TrashIconButton from "../../button/TrashIconButton";
import FieldConfigOnceTextForm from "./FieldConfigOnceTextForm";
import FieldConfigSpinTextForm from "./FieldConfigSpinTextForm";


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
    const [radioValue, setRadioValue] = React.useState<string>()

    React.useEffect(() => {
        if (value) {
            setRadioValue(() => {
                if (value.use_spin) {
                    return "use_spin"
                }
                if (value.use_once_text) {
                    return "use_once_text"
                }

                return undefined
            })
        }
    }, [value])

    function onRadioChange(e: RadioChangeEvent) {
        const spin: Partial<FieldConfig> = {
            ...value,
            use_spin: false,
            use_once_text: false,
        }

        switch (e.target.value) {
            case "use_spin":
                spin.use_spin = true
                return onChange?.(spin)

            case "use_once_text":
                spin.use_once_text = true
                return onChange?.(spin)

            default:
                return onChange?.(spin)
        }
    }

    return <Radio.Group value={radioValue} onChange={onRadioChange}>
        <Radio.Button>Default</Radio.Button>
        <Radio.Button value="use_spin">Gunakan Spin</Radio.Button>
        <Radio.Button value="use_once_text">Gunakan Teks Sekali Pakai</Radio.Button>
    </Radio.Group>
}

const FieldConfigItemForm: React.FC<Props> = (props: Props) => {
    return <Form.Item shouldUpdate noStyle>
        {(form) => {

            const { field, onDelete } = props

            const id: number | undefined = form.getFieldValue(["fieldConfig", "field_spin", field.name, "id"])
            const fieldType: FieldType = form.getFieldValue(["fieldConfig", "field_spin", field.name, "field_type"])

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

                <Form.Item shouldUpdate noStyle>
                    {(form) => {
                        const fieldSpin: FieldConfig | undefined = form.getFieldValue(["fieldConfig", "field_spin", field.name])

                        if (fieldSpin?.use_spin) {
                            return <FieldConfigSpinTextForm
                                field={field}
                                fieldType={fieldSpin.field_type as FieldType}
                            />
                        }

                        if (fieldSpin?.use_once_text) {
                            return <FieldConfigOnceTextForm field={field} />
                        }

                        return <p className="c-tx-gray mb-1">Tidak menggunakan config.</p>
                    }}
                </Form.Item>
            </Card>
        }}
    </Form.Item>
}

export default FieldConfigItemForm
