import { Form, InputNumber, Space, Table } from "antd";
import React from "react";


import { ColumnsType } from "antd/es/table";
import { Variant } from "../../../model/apisdk";
import { FormModel } from "../../../model/product_manual/ProductManualForm";
import { requiredValidator } from "./validator/basic_validator";
import { priceValidator } from "./validator/price_validator";

import { VariantDetailModel } from "../../../model/product_manual/VariantDetailForm";
import AddButton from "../../button/AddButton";

interface Props {
    children: (index: number) => React.ReactNode
}

type TableItem = Pick<Variant, "names" | "values"> & {
    firstIndex: number
    first: boolean
    key: string
}

const VariantDetailForm: React.FC<Props> = (props: Props) => {

    const [bulkUpdate, setBulkUpdate] = React.useState<Partial<Variant>>({})

    return <Form.Item<FormModel> noStyle shouldUpdate>
        {(form) => {

            const detailModel = new VariantDetailModel(form)
            const items = detailModel.getItems()

            function applyBulkUpdate() {
                detailModel.bulkUpdate(bulkUpdate)
                setBulkUpdate({})
            }

            const columns: ColumnsType<TableItem> = [
                {
                    title: detailModel.options?.[0]?.name || "Variasi 1",
                    key: "variant1",
                    dataIndex: "variant1",
                    onCell(data) {
                        if (detailModel.options && detailModel.options.length > 1) {
                            if (data.first) {
                                const rowSpan = detailModel.options[1]?.option.length || 1
                                return { rowSpan }
                            }
                            return { rowSpan: 0 }
                        }
                        return {}
                    },
                    width: 200,
                    render(_, data) {
                        return props.children(data.firstIndex)
                    },
                },
                {
                    title: detailModel.options?.[1]?.name || "Variasi 2",
                    dataIndex: "variant2",
                    key: "variant2",
                    className: detailModel.options && detailModel.options.length > 1 ? "" : "d-none",
                    render(_, data) {
                        return <div style={{ minWidth: 50, textAlign: "center" }}>
                            {data.values[1] || "-"}
                        </div>
                    }
                },
                {
                    title: "Harga",
                    dataIndex: "price",
                    key: "price",
                    render(_, __, index) {
                        return <Form.Item<FormModel>
                            name={["variant", "variant", index, "price"]}
                            rules={[requiredValidator, priceValidator]}
                            initialValue={0}
                            wrapperCol={{ span: 24 }}
                            className="mb-0"
                        >
                            <InputNumber addonBefore="Rp" placeholder="Mohon masukkan" className="w-100" />
                        </Form.Item>
                    },
                },
                {
                    title: "Stok",
                    dataIndex: "stock",
                    key: "stock",
                    render(_, __, index) {
                        return <Form.Item<FormModel>
                            name={["variant", "variant", index, "stock"]}
                            rules={[requiredValidator]}
                            initialValue={0}
                            wrapperCol={{ span: 24 }}
                            className="mb-0"
                        >
                            <InputNumber placeholder="Mohon masukkan" className="w-100" />
                        </Form.Item>
                    },
                },
            ]

            return <Space direction="vertical" size="large" className="d-flex">
                <Space>
                    <Space.Compact block>
                        <InputNumber<number>
                            className="w-100"
                            addonBefore="Rp"
                            placeholder="Harga"
                            disabled={!items.length}
                            style={{ minWidth: 250 }}
                            value={bulkUpdate.price}
                            onChange={(v) => setBulkUpdate((bulk) => ({
                                ...bulk,
                                price: v || undefined,
                            }))}
                        />
                        <InputNumber
                            className="w-100"
                            placeholder="Stok"
                            disabled={!items.length}
                            style={{
                                borderLeftWidth: 0,
                                minWidth: 250
                            }}
                            value={bulkUpdate.stock}
                            onChange={(v) => setBulkUpdate((bulk) => ({
                                ...bulk,
                                stock: v || undefined,
                            }))}
                        />
                    </Space.Compact>
                    <AddButton onClick={applyBulkUpdate}>Terapkan ke Semua</AddButton>
                </Space>
                <Table
                    dataSource={items}
                    columns={columns}
                    bordered
                    rowKey="key"
                    className="w-100"
                    rowClassName="c-bg-gray w-100"
                    pagination={false}
                />
            </Space>
        }}
    </Form.Item>
}

export default VariantDetailForm
