import React from "react"
import { Badge, Button, Card, Divider, Image, Popconfirm, Tag, Tooltip } from "antd"

import { ProductManualModel } from "../../model/product_manual/ProductManual"

interface Props {
    product: ProductManualModel
    onEdit?(): void
}

const ProductVariation: React.FC<Props> = (props: Props): JSX.Element => {

    const { product } = props;

    if (!product.use_variant || !product.variant_option.length) {
        return <p
            className="c-tx-sm c-tx-gray mb-0"
            style={{ height: 22 }}
        >Tidak menggunakan variasi</p>
    }

    const variantPreview = product.getVariantPreview(5, 15)

    return <div className="c-flex">
        {variantPreview.items.map((item, index) => (
            <Tooltip key={index} title={item.original_text}>
                <Tag color={item.color} bordered={false}>
                    {item.show_text}
                </Tag>
            </Tooltip>
        ))}
        {variantPreview.remaining > 0 && <Tooltip title={`dan ${variantPreview.remaining} variasi lain`}>
            <Tag color="blue" bordered={false}>+{variantPreview.remaining}</Tag>
        </Tooltip>}
    </div>
}

const ProductAction: React.FC<Props> = (props: Props) => {
    return <div className="c-flex c-justify-space-arround c-item-center mt-2">
        <div />
        <Button
            type="text"
            icon={<i className='far fa-edit' />}
            onClick={props.onEdit}
        />

        <Divider type="vertical" />

        <Popconfirm
            title="Hapus Produk"
            description={`Yakin ingin menghapus produk?`}
            okText="Hapus"
            cancelText="Batal"
        >
            <Button danger type="text" icon={<i className='fas fa-trash' />} />
        </Popconfirm>
        <div />
    </div>
}

const ProductCard: React.FC<Props> = (props: Props): JSX.Element => {

    const { product } = props

    const [img, setImg] = React.useState("")
    React.useEffect(() => {
        fetch("https://loremflickr.com/400/400").then((res) =>
            res.arrayBuffer().then((data) => {
                const blob = new Blob([data])
                setImg(URL.createObjectURL(blob))
            })
        )
    }, [])

    const card = <Card
        size="small"
        cover={<Image
            src={img}
            fallback="https://demofree.sirv.com/nope-not-here.jpg"
        />}
    >
        <Tooltip title={product.title}>
            <h6 className="c-truncate c-bolder mb-1">{product.title}</h6>
        </Tooltip>
        <p className="c-bolder c-tx-price mb-1">{product.getFormatPrice()}</p>
        <ProductVariation {...props} />
        <ProductAction {...props} />
    </Card>

    if (product.as_draft) {
        return  <Badge.Ribbon text="Draft">{card}</Badge.Ribbon>
    }

    return card
}

export default ProductCard
