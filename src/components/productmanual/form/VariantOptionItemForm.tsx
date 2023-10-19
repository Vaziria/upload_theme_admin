import { Card, Col, Form, FormListFieldData, Input, Row } from "antd";
import React from "react";

import { requiredValidator } from "./validator/basic_validator";
import { variantNameValidator, variantOptionValidator } from "./validator/variant_option_validator";

import TrashIconButton from "../../button/TrashIconButton";
import AddButton from "../../button/AddButton";
import { FormModel } from "../../../model/product_manual/ProductManualForm";

interface Props {
    field: FormListFieldData
    showRemove: boolean
    onRemove(): void
}

const VariantOptionItemForm: React.FC<Props> = (props: Props) => {
    const { field: parentField, showRemove, onRemove } = props
    const isVariant1 = parentField.name === 0

    return <Form.Item<FormModel> noStyle shouldUpdate>
        {(form) => {
            return <Card
                key={parentField.key}
                size="small"
                type="inner"
                className="c-bg-gray"
            >
                {showRemove && <TrashIconButton
                    style={{ position: "absolute", right: 12 }}
                    onClick={onRemove}
                />}
                <div>
                    <label>Nama Variasi</label>
                    <Form.Item
                        className="mb-3"
                        name={[parentField.name, "name"]}
                        rules={[requiredValidator, variantNameValidator(parentField)]}
                    >
                        <Input maxLength={14} showCount placeholder="Warna" style={{ width: 300 }} />
                    </Form.Item>
                </div>
                <div>
                    <label>Pilihan</label>
                    <Form.List name={[parentField.name, "option"]}>
                        {(fields, opt) => {

                            const showRemoveOption = fields.length > 1
                            const addOption = () => opt.add("")
                            const removeOption = (index: number) => () => opt.remove(index)

                            return <Row gutter={[16, 16]}>
                                {fields.map((field) => (
                                    <Col key={field.key} span={12} xl={8} className="d-flex c-gap-2">
                                        <Form.Item
                                            name={[field.name]}
                                            rules={[requiredValidator, variantOptionValidator(field)]}
                                            wrapperCol={{ span: 24 }}
                                            className="w-100"
                                        >
                                            <Input
                                                showCount
                                                maxLength={20}
                                                placeholder="contoh: Merah"
                                                onChange={(ev) => isVariant1 && form.setFieldValue(
                                                    ["variant", "variant_image", field.name, "option_name"],
                                                    ev.target.value
                                                )}
                                            />
                                        </Form.Item>
                                        {showRemoveOption && <TrashIconButton onClick={removeOption(field.name)} />}
                                    </Col>
                                ))}

                                <Col span={12} xl={8}>
                                    <AddButton block type="dashed" onClick={addOption}>
                                        Tambah Pilihan
                                    </AddButton>
                                </Col>
                            </Row>
                        }}
                    </Form.List>
                </div>
            </Card>
        }}
    </Form.Item>
}

export default VariantOptionItemForm
