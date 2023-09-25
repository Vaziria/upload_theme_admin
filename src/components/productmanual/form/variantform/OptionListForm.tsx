import { Button, Col, Form, Input, Row, Space } from "antd"
import React from "react"

interface Props {
    name: number
}

const OptionListForm: React.FC<Props> = (props: Props) => {
    return <Form.Item>
        <div>
            <label>Pilihan</label>
            <Form.List name={[props.name, 'option']}>

                {(fields, opt) => (
                    <Row gutter={[16, 16]}>

                        {fields.map((field) => (
                            <Col key={field.key} span={12}>
                                <Space.Compact className="w-100">
                                    <Form.Item
                                        className="w-100"
                                        name={[field.name]}
                                        rules={[
                                            { required: true, message: "Kolom wajib diisi." }
                                        ]}
                                    >
                                        <Input
                                            maxLength={20}
                                            showCount
                                            placeholder="contoh: Merah"
                                        />
                                    </Form.Item>
                                    {fields.length > 1 && <Button
                                        className="c-tx-gray-btn"
                                        icon={<i className='fas fa-trash' />}
                                        onClick={() => opt.remove(field.name)}
                                    />}
                                </Space.Compact>
                            </Col>
                        ))}

                        <Col span={12}>
                            <Button
                                block
                                type="dashed"
                                icon={<i className="fas fa-plus" />}
                                onClick={() => opt.add("")}
                            >Tambah Pilihan</Button>
                        </Col>
                    </Row>
                )}
            </Form.List>
        </div>
    </Form.Item>
}

export default OptionListForm
