import { Anchor, Progress } from "antd"
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor"
import React from "react"

import { FormModelKey } from "../../model/product_manual/ProductManualForm"
import { ProductManualFormProgressModel, ProgressRes } from "../../model/product_manual/ProductManualFormProgress"

interface Props {
    progressModel: ProductManualFormProgressModel
}

interface ItemOptions {
    key: string
    resKey?: FormModelKey
    title: string
    progress: ProgressRes
}

const ProductFormProgress: React.FC<Props> = (props: Props) => {
    const { progressModel } = props

    const progress = progressModel.useProgress()

    const itemOptions: ItemOptions[] = [
        {
            key: "productbasic",
            resKey: "basic",
            title: "Informasi Produk",
            progress: progress.basic
        },
        {
            key: "productvariant",
            resKey: "variant",
            title: "Variasi Produk",
            progress: progress.variant
        },
        {
            key: "productfieldconfig",
            resKey: "fieldConfig",
            title: "Field Config",
            progress: progress.fieldConfig
        },
    ]

    return <Anchor
        offsetTop={116}
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
