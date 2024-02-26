import { Button, Card, InputNumber, Select, Space } from "antd";
import React from "react";

import { MarkupData } from "../../model/newapisdk";
import AntdSelectAddon from "../common/AntdSelectAddon";
import { DeleteOutlined } from "@ant-design/icons";

interface Props {
    title: string
    item: MarkupData
    onChange(data: MarkupData): void
    onDelete(): void
}

const markOptions = [
    { label: "kurang <", value: "<" },
    { label: "kurangsama <=", value: "<=" },
    { label: "lebih >", value: ">" },
    { label: "lebihsama >=", value: ">=" },
    { label: "range harga", value: "range" }
]

const typeOptions = [
    { label: "Persen %", value: "percent" },
    { label: "Harga", value: "number" }
]

const SpinMarkupItem: React.FC<Props> = (props: Props) => {

    const { title, item, onChange, onDelete } = props
    const isRange = item.mark === "range"
    const prefix = item.type === "number" ? "Rp." : ""
    const priceRange: number[] = []
    const markupRange: number[] = item.up.map((i) => Number(i.toString().replaceAll("%", "")))

    switch (typeof item.range) {
        case "number":
        case "string":
            priceRange.push(Number(item.range))
            break

        case "object":
            priceRange.push(...item.range.map(Number))
            break
    }

    return <Card hoverable size="small" type="inner" title={<div className="d-flex">
        <span className="flex-1">{title}</span>
        <Button
            danger
            type="text"
            icon={<DeleteOutlined />}
            onClick={onDelete}
       />
    </div>}>
        <Space direction="vertical" className="d-flex">

            <Space.Compact block>
                <AntdSelectAddon addon="Harga" style={{ width: "auto" }}>
                    <Select
                        value={item.mark}
                        options={markOptions}
                        style={{ minWidth: 150 }}
                        onChange={(mark) => onChange({
                            ...item,
                            mark,
                            range: mark === "range" ? [0, 0] : 0
                        })}
                    />
                </AntdSelectAddon>
                <InputNumber
                    value={priceRange[0]}
                    prefix="Rp."
                    min={0}
                    style={{
                        width: 200,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                    onChange={(val) => onChange({
                        ...item,
                        range: isRange ? [val || 0, priceRange[1]] : val || 0
                    })}
                />
                {isRange && <InputNumber
                    value={priceRange[1]}
                    prefix="-&nbsp;&nbsp;&nbsp;&nbsp;Rp."
                    min={0}
                    style={{
                        width: 200,
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderLeft: 0,
                        marginLeft: -4
                    }}
                    onChange={(val) => onChange({ ...item, range: [priceRange[0], val || 0] })}
                />}
            </Space.Compact>

            <Space wrap>
                <Space.Compact block className="d-flex">
                    <AntdSelectAddon addon="Markup" style={{ width: "auto" }}>
                        <Select
                            value={item.type}
                            options={typeOptions}
                            style={{ width: 100 }}
                            onChange={(type) => onChange({ ...item, type })}
                        />
                    </AntdSelectAddon>
                    <InputNumber
                        value={markupRange[0]}
                        prefix={prefix}
                        min={0}
                        style={{
                            width: 200,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        onChange={(val) => onChange({ ...item, up: [val || 0, markupRange[1]] })}
                    />
                    <InputNumber
                        value={markupRange[1]}
                        prefix={<>-&nbsp;&nbsp;&nbsp;&nbsp;{prefix}</>}
                        min={0}
                        style={{
                            width: 200,
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderLeft: 0,
                            marginLeft: -4
                        }}
                        onChange={(val) => onChange({ ...item, up: [markupRange[0], val || 0] })}
                    />
                </Space.Compact>
            </Space>
        </Space>
    </Card>
}

export default SpinMarkupItem
