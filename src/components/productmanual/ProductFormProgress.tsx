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

    const basicProgress = progressModel.useBasicProgress()
    const variantProgress = progressModel.useVariantProgress()
    const fieldConfigProgress = progressModel.useFieldConfigProgress()

    const batchProgress = [
        basicProgress,
        variantProgress,
        fieldConfigProgress
    ]
    const batchPercent = batchProgress.reduce((res, progress) => {
        return res + (progress.percent / batchProgress.length)
    }, 0)
    const haveException = batchProgress.some((progress) => progress.status === "exception")

    const finishProgress: ProgressRes = {
        percent: Math.ceil(batchPercent),
        status: haveException ? "exception" : "success"
    }

    const itemOptions: ItemOptions[] = [
        {
            key: "productbasic",
            resKey: "basic",
            title: "Informasi Produk",
            progress: basicProgress
        },
        {
            key: "productvariation",
            resKey: "variant",
            title: "Variasi Produk",
            progress: variantProgress
        },
        {
            key: "productfieldconfig",
            resKey: "fieldConfig",
            title: "Field Config",
            progress: fieldConfigProgress
        },
        {
            key: "productfinish",
            title: "Selesaikan Produk",
            progress: finishProgress
        },
    ]

    return <Anchor
        offsetTop={16}
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
