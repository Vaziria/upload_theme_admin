import { Anchor, Progress, ProgressProps } from "antd"
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor"
import React from "react"

import { ProductManualFormProgressModel, ProgressRes } from "../../model/product_manual/ProductManualFormProgress"

interface Props {
    progressModel: ProductManualFormProgressModel
}

interface ItemOptions {
    key: string
    title: string
    progress: ProgressRes
}

const ProductFormProgress: React.FC<Props> = (props: Props) => {
    const { progressModel } = props

    const progress = progressModel.useProgress()
    const { shopeeAttribute, tokpedAttribute } = progress

    const attrStatus: ProgressProps["status"] = [shopeeAttribute.status, tokpedAttribute.status].includes("exception")
        ? "exception"
        : "success"
    const attrPercent = Math.ceil((shopeeAttribute.percent + tokpedAttribute.percent) / 2)

    const itemOptions: ItemOptions[] = [
        {
            key: "productbasic",
            title: "Informasi Produk",
            progress: progress.basic
        },
        {
            key: "productattribute",
            title: "Atribut Produk",
            progress: {
                status: attrStatus,
                percent: attrPercent,
            },
        },
        {
            key: "productvariant",
            title: "Variasi Produk",
            progress: progress.variant
        },
        {
            key: "productfieldconfig",
            title: "Field Config",
            progress: progress.fieldConfig
        },
    ]

    return <Anchor
        offsetTop={158}
        items={itemOptions.map<AnchorLinkItemProps>((option) => ({
            key: option.key,
            href: location.pathname + "#" + option.key,
            title: <div className="c-flex c-item-center c-gap-2 my-2">
                <Progress
                    type="circle"
                    size={30}
                    {...option.progress}
                />
                <p className="c-bold mb-0">{option.title}</p>
            </div>,
        }))}
        className="ant-card ant-card-bordered card-body"
    />
}

export default ProductFormProgress
