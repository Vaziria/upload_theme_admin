import { Descriptions, Typography } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";

import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
}

const DetailDesc: React.FC<Props> = (props: Props) => {
    const { product } = props
    const descItems: DescriptionsItemType[] = [
        {
            key: "desc",
            children: <Typography.Paragraph style={{ whiteSpace: "pre-wrap" }}>
                {product.desc}
            </Typography.Paragraph>,
        }
    ]

    return <Descriptions
        column={1}
        colon={false}
        layout="vertical"
        size="small"
        title="Deskripsi Produk"
        items={descItems}
    />
}

export default DetailDesc
