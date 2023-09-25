import { Anchor, Progress } from "antd"
import { AnchorLinkItemProps } from "antd/es/anchor/Anchor"
import React from "react"

// eslint-disable-next-line @typescript-eslint/ban-types
type ProgressItemProps = React.PropsWithChildren<{
    percent: number
}>
const ProgressItem: React.FC<ProgressItemProps> = (props: ProgressItemProps) => {
    return <div className="c-flex c-item-center c-gap-2 my-2">
        <Progress
            type="circle"
            percent={props.percent}
            size={20}
        />
        {props.children}
    </div>
}

interface ItemOptions {
    key: string
    percent: number
    title: string
}

const itemOptions: ItemOptions[] = [
    {
        key: "productbasic",
        percent: 10,
        title: "Informasi Produk",
    },
    {
        key: "productvariation",
        percent: 30,
        title: "Variasi Produk",
    },
    {
        key: "productfieldconfig",
        percent: 0,
        title: "Field Config",
    },
    {
        key: "productfinish",
        percent: 15,
        title: "Selesaikan Produk",
    },
]

const ProductEditProgress: React.FC = () => {

    const items = itemOptions.map<AnchorLinkItemProps>((option) => ({
        key: option.key,
        href: location.pathname + "#" + option.key,
        title: <ProgressItem percent={option.percent}>
            <p className="c-bold mb-0">{option.title}</p>
        </ProgressItem>,
    }))

    return <Anchor offsetTop={20} items={items} className="ant-card ant-card-bordered card-body" />
}

export default ProductEditProgress
