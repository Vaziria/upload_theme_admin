import { Descriptions, Image, Space, Typography } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";
import noimg from "../../../assets/images/no-image.webp";

interface Props {
    product: ProductManualModel
}

const DetailImage: React.FC<Props> = (props: Props) => {
    const { product } = props
    const imageItems: DescriptionsItemType[] = [
        {
            key: "img_collection_path",
            label: "Lokasi Koleksi Gambar",
            children: <Typography.Text>
                {product.image_collection_path}
            </Typography.Text>
        },
        {
            key: "img_count",
            label: "Jumlah Gambar",
            children: <Typography.Text>
                {product.count_image}
            </Typography.Text>
        },
    ]

    return <Space
        direction="vertical"
        className="d-flex"
        style={{
            width: 420,
            rowGap: 0,
            border: "1px solid #f0f0f0",
            borderRadius: 8
        }}
    >
        <Image
            width={400}
            style={{ borderRadius: "8px 8px 0 0" }}
            src={product.getImageUrl()}
            fallback={noimg}
        />
        <Descriptions
            column={1}
            colon={false}
            size="small"
            title="Gambar Produk"
            items={imageItems}
            className="p-3 c-bg-gray"
            labelStyle={{
                width: 150,
                marginRight: 32
            }}
            contentStyle={{
                fontWeight: 500
            }}
            style={{
                borderRadius: "0 0 8px 8px"
            }}
        />
    </Space>
}

export default DetailImage
