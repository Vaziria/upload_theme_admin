import { Button, Col, Empty, Form, FormInstance, FormListFieldData, FormListOperation, Input, Row, Space, Table } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

import { UpdateFieldConfigPayload, UseOnceText } from "../../../../model/apisdk";

import TrashIconButton from "../../../button/TrashIconButton";
import FieldConfigOnceTextActionForm from "./FieldConfigOnceTextActionForm";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    parentField: FormListFieldData
    fields: FormListFieldData[]
    opt: FormListOperation
}

interface Paging {
    page: number
    pagesize: number
}

const FieldConfigOnceTextListForm: React.FC<Props> = (props: Props) => {
    const { form, parentField, fields, opt } = props

    const [keyword, setKeyword] = React.useState("")
    const [paging, setPaging] = React.useState<Paging>({
        page: 1,
        pagesize: 20
    })

    const onceTexts: UseOnceText[] | undefined = Form.useWatch(["field_spin", parentField.name, "once_text"], form)
    const filteredFields = fields.filter((field: FormListFieldData) => {
        if (keyword) {
            const onceText = onceTexts?.[field.name]
            if (onceText) {
                return onceText.text.toLowerCase().includes(keyword.toLowerCase())
            }
        }
        return true
    })

    const columns: ColumnsType<FormListFieldData> = [
        {
            title: "Teks Sekali Pakai",
            key: "name",
            className: "p-2",
            render(_, field) {
                return <Form.Item
                    name={[field.name, "text"]}
                    rules={[
                        { required: true, message: "Kolom wajib diisi." },
                    ]}
                    className="w-100 mb-0"
                >
                    <Input
                        showCount
                        maxLength={255}
                        placeholder="Mohon masukkan"
                    />
                </Form.Item>
            }
        },
        {
            title: "Aksi",
            key: "action",
            width: 50,
            className: "p-2",
            render(_, field) {
                return <TrashIconButton onClick={() => opt.remove(field.name)} />
            }
        },
    ]

    return <Row gutter={[12, 12]}>
        <Col span={24}>
            <Space direction="vertical" size="middle" className="d-flex">
                <div className="d-flex c-justify-space-between">
                    <Input.Search
                        placeholder="Cari teks sekali pakai"
                        style={{ width: 300 }}
                        value={keyword}
                        onChange={(ev) => setKeyword(ev.target.value)}
                    />

                    <FieldConfigOnceTextActionForm
                        form={form}
                        field={parentField}
                        opt={opt}
                        onChange={() => setPaging({ ...paging, page: 1 })}
                    />
                </div>
            </Space>
        </Col>

        <Col span={24}>
            <Table
                bordered
                columns={columns}
                dataSource={filteredFields}
                locale={{
                    emptyText: <Empty description="Belum ada teks sekali pakai, silahkan upload txt atau tambah teks sekali pakai.">
                        {keyword && <Button onClick={() => setKeyword("")}>Reset Keyword</Button>}
                    </Empty>
                }}
                pagination={{
                    current: paging.page,
                    pageSize: paging.pagesize,
                    onChange(page, pagesize) {
                        setPaging({ page, pagesize })
                    }
                }}
            />
        </Col>
    </Row>
}

export default FieldConfigOnceTextListForm
