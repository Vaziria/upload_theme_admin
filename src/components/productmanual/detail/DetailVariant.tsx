import { Descriptions } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
}

const DetailVariant: React.FC<Props> = (props: Props) => {
    const { product } = props
    const variantItems: DescriptionsItemType[] = product.variant_option.map((option, index) => ({
        key: option?.name,
        label: `Variasi ${index + 1} (${option?.name})`,
        children: option?.option.join(", ")
    }))

    if (variantItems.length === 0) {
        variantItems.push({
            key: "novariant",
            label: `Tidak ada variasi.`,
            children: ""
        })
    }

    return <Descriptions
        column={1}
        colon={false}
        size="small"
        title="Variasi Produk"
        items={variantItems}
        labelStyle={{ width: 150, marginRight: 32 }}
        contentStyle={{ fontWeight: 500 }}
    />
}

export default DetailVariant
