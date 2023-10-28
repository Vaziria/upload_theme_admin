import { Button, Descriptions, Space } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
    onSelect(index: number, value: string): void
}

const DetailVariant: React.FC<Props> = (props: Props) => {
    const { product, onSelect } = props

    const variantOptions = product.getVariantOptionPreviews()
    const variantItems: DescriptionsItemType[] = variantOptions.map((option, index) => ({
        key: option?.name,
        label: `Variasi ${index + 1} (${option?.name})`,
        children: <Space wrap>
            {option?.option.map(({ value, active, image_url }, key) => {
                const img = image_url ? <img
                    src={image_url}
                    width={20}
                    height={20}
                    style={{
                        marginTop: -6,
                        objectFit: "cover"
                    }}
                /> : undefined

                return <Button
                    key={key}
                    icon={img}
                    type={active ? "primary" : "default"}
                    onClick={() => onSelect(index, value)}
                >{value}</Button>
            })}
        </Space>
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
        title="Variasi Produk"
        items={variantItems}
        labelStyle={{ width: 150, marginRight: 32 }}
        contentStyle={{ fontWeight: 500 }}
    />
}

export default DetailVariant
