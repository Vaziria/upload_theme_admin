import { Badge, Button, Card, Image, Popconfirm, Tag, Tooltip } from "antd"
import React from "react"
import { useRecoilState, useRecoilValue } from "recoil"

import noimg from "../../assets/images/no-image.webp"
import { ProductManualModel } from "../../model/product_manual/ProductManual"
import { productManualSelectedState } from "../../recoil/atoms/product_manual"
import { productManualIsSelectedIdState, productManualIsSelectedState } from "../../recoil/selectors/product_manual_page"

import AntdCheckbox from "../common/AntdCheckbox"

interface Props {
    product: ProductManualModel
    onEdit?(): void
    onDelete?(): void
}

export const Variation: React.FC<Props> = (props: Props): JSX.Element => {
    const { product } = props;

    if (!product.use_variant || !product.variant_option.length) {
        return <p
            className="c-tx-sm c-tx-gray mb-0"
            style={{ height: 22 }}
        >Tidak menggunakan variasi</p>
    }

    const previews = product.getVariantPreviews()

    return <div className="c-flex">
        {previews.map((preview, index) => (
            <Tooltip key={index} title={preview.original_text}>
                <Tag color={preview.color} bordered={false}>
                    {preview.show_text}
                </Tag>
            </Tooltip>
        ))}
    </div>
}

const ProductCard: React.FC<Props> = (props: Props): JSX.Element => {
    const { product } = props

    const [selectedIds, setSelectedIds] = useRecoilState(productManualSelectedState)
    const isSelected = useRecoilValue(productManualIsSelectedIdState(product.id))
    const isHaveSelected = useRecoilValue(productManualIsSelectedState)

    function applySelect(selected: boolean) {
        if (selected) {
            setSelectedIds([...selectedIds, product.id])
        } else {
            setSelectedIds(selectedIds.filter((id) => id !== product.id))
        }
    }

    const card = <Card
        size="small"
        cover={<Image
            src={product.image_preview}
            fallback={noimg}
        />}
        actions={[
            <Button
                key="product-edit"
                type="text"
                icon={<i className='far fa-edit' />}
                disabled={isHaveSelected}
                onClick={props.onEdit}
            />,
            <Popconfirm
                key="product-delete"
                title="Hapus Produk"
                description={`Yakin ingin menghapus produk?`}
                okText="Hapus"
                cancelText="Batal"                
                onConfirm={props.onDelete}
            >
                <Button
                    danger
                    type="text"
                    icon={<i className='fas fa-trash' />}
                    disabled={isHaveSelected}
                />
            </Popconfirm>
        ]}
    >
        <AntdCheckbox
            style={{ position: "absolute", top: 8 }}
            checked={isSelected}
            onChange={applySelect}
        />
        <Tooltip title={product.title}>
            <h6 className="c-truncate c-bolder mb-1">{product.title}</h6>
        </Tooltip>
        <p className="c-bolder c-tx-price mb-1">{product.getFormatPrice()}</p>
        <Variation {...props} />
    </Card>

    if (product.as_draft) {
        return  <Badge.Ribbon text="Draft">{card}</Badge.Ribbon>
    }

    return card
}

export default ProductCard
