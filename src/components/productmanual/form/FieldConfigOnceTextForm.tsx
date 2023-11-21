import { Badge, Button, Col, Empty, Form, FormListFieldData, Input, Row, Space, Table, Upload } from "antd";
import { ColumnsType } from "antd/es/table";
import React from "react";

import { UseOnceText } from "../../../model/newapisdk";

import { UploadChangeParam, UploadFile } from "antd/es/upload";
import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";
import { requiredValidator } from "./validator/basic_validator";
import { onceTextValidator } from "./validator/once_text_validator";

import AddButton from "../../button/AddButton";
import DeleteButton from "../../button/DeleteButton";
import TrashIconButton from "../../button/TrashIconButton";
import AntdCheckbox from "../../common/AntdCheckbox";
import DrawerBottom from "../../feedback/DrawerBottom";

interface Props {
    field: FormListFieldData
    disabled?: boolean
}

interface Paging {
    page: number
    pagesize: number
}

const FieldConfigOnceTextForm: React.FC<Props> = (props: Props) => {
    const { field: parentField, disabled } = props

    const [open, setOpen] = React.useState(false)
    const [keyword, setKeyword] = React.useState("")
    const [onlyEmpty, setOnlyEmpty] = React.useState(false)
    const [paging, setPaging] = React.useState<Paging>({
        page: 1,
        pagesize: 10
    })

    return <Form.Item shouldUpdate noStyle>
        {(form) => {
            return <Form.List name={[parentField.name, "once_text"]} rules={[onceTextValidator]}>
                {(fields, opt, { errors }) => {

                    const fieldType: FieldType = form.getFieldValue(["fieldConfig", "field_spin", parentField.name, "field_type"])
                    const label = fieldType && fieldLabels[fieldType]

                    const onceTextKey = ["fieldConfig", "field_spin", parentField.name, "once_text"]
                    const onceTexts: UseOnceText[] | undefined = form.getFieldValue(onceTextKey)
                    const filteredFields = fields
                        .filter(() => {
                            if (keyword) {
                                const onceText = onceTexts?.[parentField.name]
                                if (onceText) {
                                    return onceText.text.toLowerCase().includes(keyword.toLowerCase())
                                }
                            }
                            return true
                        })
                        .filter((field) => {
                            if (onlyEmpty) {
                                return !onceTexts?.[field.name].text
                            }
                            return true
                        })

                    const reader = new FileReader()

                    reader.onload = function (ev: ProgressEvent<FileReader>) {
                        const texts = ev.target?.result?.toString().split("\n")
                        if (texts) {
                            const newOnceTexts = texts.map<Partial<UseOnceText>>((text) => ({ text }))
                            form.setFieldValue(onceTextKey, [...(onceTexts || []), ...newOnceTexts])
                        }
                    }

                    function onUploadTxt(info: UploadChangeParam<UploadFile<unknown>>) {
                        const file = info.file.originFileObj
                        file && reader.readAsText(file)
                    }

                    const columns: ColumnsType<FormListFieldData> = [
                        {
                            title: "Teks Sekali Pakai",
                            key: "name",
                            className: "p-2",
                            render(_, field) {
                                if (fieldType === "field_desc") {
                                    return <Form.Item
                                        name={[field.name, "text"]}
                                        rules={[requiredValidator]}
                                        wrapperCol={{ span: 24 }}
                                        className="mb-0 w-100"
                                    >
                                        <Input.TextArea showCount maxLength={3000} rows={4} placeholder="Mohon masukkan" />
                                    </Form.Item>
                                }

                                return <Form.Item
                                    name={[field.name, "text"]}
                                    rules={[requiredValidator]}
                                    wrapperCol={{ span: 24 }}
                                    className="mb-0 w-100"
                                >
                                    <Input showCount maxLength={255} placeholder="Mohon masukkan" />
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

                    return <>
                        <Badge count={fields.length}>
                            <Button
                                danger={errors.length > 0}
                                type="dashed"
                                className="c-btn-active"
                                icon={<i className="fas fa-table" />}
                                disabled={disabled}
                                onClick={() => setOpen(true)}
                            >Buka Teks Sekali Pakai</Button>
                        </Badge>

                        <Form.ErrorList errors={errors} />

                        <DrawerBottom
                            title={`${label} - Teks Sekali Pakai ( ${fields.length} )`}
                            open={open}
                            onClose={() => setOpen(false)}
                        >

                            <Row gutter={[12, 12]}>
                                <Col span={24}>
                                    <Space direction="vertical" size="middle" className="d-flex">
                                        <div className="d-flex c-justify-space-between">
                                            <Input.Search
                                                placeholder="Cari teks sekali pakai"
                                                style={{ width: 300 }}
                                                value={keyword}
                                                onChange={(ev) => setKeyword(ev.target.value)}
                                            />

                                            <Space>
                                                <Upload
                                                    fileList={[]}
                                                    showUploadList={false}
                                                    accept=".txt"
                                                    onChange={onUploadTxt}
                                                >
                                                    <Button icon={<i className="fa fa-upload" />}>
                                                        Upload Txt
                                                    </Button>
                                                </Upload>
                                                <AddButton
                                                    type="dashed"
                                                    onClick={() => opt.add({ text: "" }, 0)}
                                                >
                                                    Tambah Teks Sekali Pakai
                                                </AddButton>
                                                <DeleteButton
                                                    type="dashed"
                                                    onClick={() => form.setFieldValue(["fieldConfig", "field_spin", parentField.name, "once_text"], [])}
                                                >
                                                    Hapus Semua
                                                </DeleteButton>
                                            </Space>
                                        </div>
                                        <AntdCheckbox
                                            value={onlyEmpty}
                                            onChange={setOnlyEmpty}
                                        >Hanya tampilkan yang kosong</AntdCheckbox>
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
                                            hideOnSinglePage: true,
                                            current: paging.page,
                                            pageSize: paging.pagesize,
                                            onChange(page, pagesize) {
                                                setPaging({ page, pagesize })
                                            }
                                        }}
                                    />
                                </Col>
                            </Row>
                        </DrawerBottom>
                    </>
                }}
            </Form.List >
        }}
    </Form.Item>
}

export default FieldConfigOnceTextForm
