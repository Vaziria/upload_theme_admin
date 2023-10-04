import { Descriptions, Tag, Typography } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";
import { FieldType, fieldLabels } from "../../../model/product_manual/FieldConfig";

interface Props {
    product: ProductManualModel
}

const DetailFieldConfig: React.FC<Props> = (props: Props) => {
    const { product } = props
    const fieldConfigItems: DescriptionsItemType[] = product.field_spin.map((spin) => {
        let text = "default"
        if (spin?.use_spin) {
            text = "spin"
        } else if (spin?.use_once_text) {
            text = "teks sekali pakai"
        }

        return {
            key: spin?.field_type,
            label: fieldLabels[spin?.field_type as FieldType],
            children: <Typography.Text>
                <Tag>{text}</Tag>
            </Typography.Text>
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
        size="small"
        title="Field Config"
        items={fieldConfigItems}
        labelStyle={{ width: empty ? "auto" : 150, marginRight: 32 }}
        contentStyle={{ fontWeight: empty ? "normal" : 500 }}
    />
}

export default DetailFieldConfig
