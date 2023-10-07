import { Form, InputNumber, Table } from "antd";
import React from "react";


import { ColumnsType } from "antd/es/table";
import { UpdateVariationPayload, Variant, VariantOption } from "../../../model/apisdk";
import { FormModel } from "../../../model/product_manual/ProductManualForm";

import { requiredValidator } from "./validator/basic_validator";
import { priceValidator } from "./validator/price_validator";

interface Props {
    children: (index: number) => React.ReactNode
}

type TableItem = Pick<Variant, "names" | "values"> & {
    firstIndex: number
    first: boolean
    key: string
}

function createTableItems(options?: UpdateVariationPayload["variant_option"]): TableItem[] {
    const option1 = options?.[0]
    const option2 = options?.[1]

    const items: TableItem[] = []
    if (option1) {
        option1.option.forEach((option1_value, firstIndex) => {

            if (option2 && option2.option.length) {
                option2.option.forEach((option2_value, index) => {
                    items.push({
                        names: [option1.name, option2.name],
                        values: [option1_value, option2_value],
                        firstIndex,
                        first: index === 0,
                        key: `${firstIndex}_${index}`
                    })
                })

            } else {
                items.push({
                    names: [option1.name],
                    values: [option1_value],
                    firstIndex,
                    first: true,
                    key: firstIndex.toString()
                })
            }
        }, [])
    }

    return items
}

const VariantDetailForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<FormModel> noStyle shouldUpdate>
        {(form) => {

            const options: Array<VariantOption | undefined> | undefined = form.getFieldValue(["variant", "variant_option"])
            const items = createTableItems(options)

            const columns: ColumnsType<TableItem> = [
                {
                    title: options?.[0]?.name || "Variasi 1",
                    key: "variant1",
                    dataIndex: "variant1",
                    onCell(data) {
                        if (options && options.length > 1) {
                            if (data.first) {
                                const rowSpan = options[1]?.option.length || 1
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
                    title: options?.[1]?.name || "Variasi 2",
                    dataIndex: "variant2",
                    key: "variant2",
                    className: options && options.length > 1 ? "" : "d-none",
                    render(_, data) {
                        return <div style={{ minWidth: 50, textAlign: "center" }}>
                            {data.values[1]}
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
                    title: "Stock",
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

            return <Table
                dataSource={items}
                columns={columns}
                bordered
                rowKey="key"
                rowClassName="c-bg-gray"
                pagination={false}
            />
        }}
    </Form.Item>
}

export default VariantDetailForm
