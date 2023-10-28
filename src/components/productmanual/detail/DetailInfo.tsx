import { Descriptions, Tag, Typography } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
}

const DetailInfo: React.FC<Props> = (props: Props) => {
    const { product } = props
    const infoItems: DescriptionsItemType[] = [
        {
            key: "status",
            label: "Status",
            children: <Tag color={product.as_draft ? "" : "blue"}>
                {product.getStatus()}
            </Tag>
        },
        {
            key: "collection",
            label: "Collection",
            children: product.collection.map((col, index) => <Tag key={`col_` + index}>
                {col?.name}
            </Tag>)
        },
        {
            key: "img_collection_path",
            label: "Lokasi Koleksi Gambar",
            children: <Typography.Text code>
                {product.image_collection_path || "no path"}
            </Typography.Text>
        },
        {
            key: "img_count",
            label: "Jumlah Gambar",
            children: <Typography.Text>
                {product.count_image}
            </Typography.Text>
        },
        {
            key: "price",
            label: "Harga",
            children: <Typography.Text type="warning" className="c-bold">
                {product.getFormatPrice()}
            </Typography.Text>
        },
        {
            key: "stock",
            label: "Stok",
            children: <Typography.Text>
                {product.stock}
            </Typography.Text>
        },
        {
            key: "weight",
            label: "Berat",
            children: <Typography.Text>
                {product.weight}
            </Typography.Text>
        },
        {
            key: "markup",
            label: "Markup",
            children: <Typography.Text>
                {product.use_markup}
            </Typography.Text>
        },
    ]

    return <Descriptions
        column={1}
        colon={false}
        title="Informasi Produk"
        items={infoItems}
        labelStyle={{ width: 150, marginRight: 32 }}
        contentStyle={{ fontWeight: 400 }}
    />
}

export default DetailInfo
