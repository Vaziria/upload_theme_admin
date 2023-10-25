import { Card, Form, FormListFieldData, Select, Space, message } from "antd";
import { DefaultOptionType } from "antd/es/select";
import React from "react";

import { useMutation } from "../../hooks/mutation";
import { FieldConfig } from "../../model/apisdk";
import { FieldType, fieldLabels, fieldTypes } from "../../model/product_manual/FieldConfig";
import { getErrMessage } from "../../utils/errmsg";

import AddButton from "../button/AddButton";
import FieldConfigItemForm from "./form/FieldConfigItemForm";

interface Props {
    pid: number
}

const ProductFormFieldConfig: React.FC<Props> = (props: Props): JSX.Element => {

    const { mutate: mutateCreate } = useMutation("PostPdcsourceSpinFieldConfig", {})
    const { mutate: mutateDelete } = useMutation("DeletePdcsourceSpinFieldConfig", {})

    const { pid } = props
    const [fieldType, setFieldType] = React.useState<FieldType>()

    return <Form.Item shouldUpdate noStyle>
        {(form) => {
            return <Card id="productfieldconfig" className="mb-3">
                <h5 className="c-bold mb-3">Field Config</h5>
                <p>Gunakan field config yang tersedia untuk meredaksi field produk ketika diupload.</p>

                <Form.List name={["fieldConfig", "field_spin"]} initialValue={[]}>
                    {(fields, opt) => {

                        const fieldSpin: Array<FieldConfig | undefined> | undefined = form.getFieldValue(["fieldConfig", "field_spin"])
                        const selected = fieldSpin?.map((fspin) => fspin?.field_type as FieldType)

                        const options = fieldTypes.map<DefaultOptionType>((field) => ({
                            value: field,
                            label: fieldLabels[field],
                            disabled: selected?.includes(field),
                        }))

                        function applyCreate() {
                            const payload = {
                                product_id: pid,
                                field_type: fieldType,
                            }
                            mutateCreate({
                                onSuccess: (res) => {
                                    if (res.data) {
                                        res.data.use_spin = true
                                        opt.add(res.data)
                                        setFieldType(undefined)
                                        message.info("field config dibuat.")
                                    }
                                },
                                onError: (err) => {
                                    const msg = getErrMessage(err as Error, "gagal membuat field config.")
                                    message.error(msg)
                                }
                            }, payload)
                        }

                        function applyDelete(field: FormListFieldData): (id: number) => void {
                            return (id) => {
                                mutateDelete({
                                    onSuccess: () => {
                                        opt.remove(field.name)
                                        message.info("field config dihapus.")
                                    },
                                    onError: (err) => {
                                        const msg = getErrMessage(err as Error, "gagal menghapus field config.")
                                        message.error(msg)
                                    }
                                }, { id })
                            }
                        }

                        return <Space direction="vertical" size="large" className="d-flex">
                            {fields.map((field) => <FieldConfigItemForm
                                key={field.key}
                                field={field}
                                onDelete={applyDelete(field)}
                            />)}

                            <Space>
                                <Select
                                    allowClear
                                    style={{ width: 300 }}
                                    placeholder="Pilih field"
                                    value={fieldType}
                                    onChange={setFieldType}
                                    options={options}
                                />
                                <AddButton
                                    type="dashed"
                                    disabled={!fieldType}
                                    onClick={applyCreate}
                                >
                                    Tambah Config
                                </AddButton>
                            </Space>
                        </Space>
                    }}
                </Form.List>
            </Card>
        }}
    </Form.Item>
}

export default ProductFormFieldConfig
