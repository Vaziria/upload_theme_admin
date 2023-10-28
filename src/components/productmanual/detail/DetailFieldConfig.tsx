import { Descriptions, Tag } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";
import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
}

const DetailFieldConfig: React.FC<Props> = (props: Props) => {
    const { product } = props
    const fieldConfigItems: DescriptionsItemType[] = product.field_spin.map((spin) => {
        if (spin?.use_once_text) {
            return {
                key: spin?.field_type,
                label: fieldLabels[spin?.field_type as FieldType],
                children: <Tag
                    bordered={false}
                    color="volcano"
                >
                    <i className="fas fa-random" /> Teks Sekali Pakai
                </Tag>
            }
        }

        return {
            key: spin?.field_type,
            label: fieldLabels[spin?.field_type as FieldType],
            children: <Tag
                bordered={false}
                color="magenta"
            >
                <i className="fas fa-spinner" /> Spin
            </Tag>
        }
    })

    const empty = fieldConfigItems.length === 0
    if (empty) {
        fieldConfigItems.push({
            key: "nofieldconfig",
            label: `Tidak menggunakan field config.`,
            children: "",
        })
    }

    return <Descriptions
        column={1}
        colon={false}
        title="Field Config"
        items={fieldConfigItems}
        labelStyle={{ width: empty ? "auto" : 150, marginRight: 32 }}
        contentStyle={{ fontWeight: empty ? "normal" : 500 }}
    />
}

export default DetailFieldConfig
