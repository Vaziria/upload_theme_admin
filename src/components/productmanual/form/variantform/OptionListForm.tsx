import { Col, Form, FormInstance, Input, Row } from "antd"
import React from "react"

import { UpdateVariationPayload, VariantOption } from "../../../../model/apisdk"

import AddButton from "../../../button/AddButton"
import TrashIconButton from "../../../button/TrashIconButton"

interface Props {
    name: number
}

type VariantForm = FormInstance<UpdateVariationPayload>

function optionValidator(form: VariantForm, name: number) {
    return async (_: unknown, value: string) => {
        const option: VariantOption | undefined = form.getFieldValue(["variant_option", name])

        const onlyOne = option?.option.every((optvalue, optindex) => {
            if (optvalue == value) {
                return option.option.indexOf(optvalue) === optindex
            }
            return true
        })
        if (!onlyOne) {
            return Promise.reject("Pilihan variasi harus berbeda.")
        }

        Promise.resolve()
    }
}

const OptionListForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<UpdateVariationPayload["variant_option"]> className="mb-2">
        <div>
            <label>Pilihan</label>
            <Form.List name={[props.name, "option"]}>

                {(fields, opt) => (
                    <Row gutter={[16, 16]}>
                        {fields.map((field) => (
                            <Col key={field.key} span={12} xl={8} className="d-flex c-gap-2">
                                <Form.Item
                                    className="w-100 mb-0"
                                    name={[field.name]}
                                    rules={[
                                        { required: true, message: "Kolom wajib diisi." },
                                        (form) => ({
                                            validator: optionValidator(form as VariantForm, props.name),
                                        })
                                    ]}
                                >
                                    <Input
                                        maxLength={20}
                                        showCount
                                        placeholder="contoh: Merah"
                                    />
                                </Form.Item>
                                {fields.length > 1 && <TrashIconButton onClick={() => opt.remove(field.name)} />}
                            </Col>
                        ))}

                        <Col span={12} xl={8}>
                            <AddButton
                                block
                                type="dashed"
                                onClick={() => opt.add("")}
                            >Tambah Pilihan</AddButton>
                        </Col>
                    </Row>
                )}
            </Form.List>
        </div>
    </Form.Item>
}

export default OptionListForm
