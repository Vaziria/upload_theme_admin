import { Breadcrumb, Descriptions, Spin } from "antd";
import { DescriptionsItemType } from "antd/es/descriptions";
import React from "react";
import { useRecoilValue } from "recoil";

import { shopeeSellerCategoriesState } from "../../../recoil/atoms/categories";
import { shopeeAttributeFormState } from "../../../recoil/atoms/shopee_attribute";
import { ProductManualModel } from "../../../model/product_manual/ProductManual";

interface Props {
    product: ProductManualModel
}

const DetailShopeeAttribute: React.FC<Props> = (props: Props) => {
    const { product } = props

    const categories = useRecoilValue(shopeeSellerCategoriesState)
    const { data, pending } = useRecoilValue(shopeeAttributeFormState)

    const attributeItems: DescriptionsItemType[] = []
    const shopeeAttribute = product.getShopeeAttribute()

    if (shopeeAttribute?.categories && shopeeAttribute.categories.length > 0) {
        const category = categories.find((cat) => {
            return shopeeAttribute.categories
                .every((attrcat) => cat.chain_ids.includes(attrcat))
        })
        if (category) {
            attributeItems.push({
                key: "categories",
                label: "Kategori",
                children: <Breadcrumb
                    items={category.chain_name.map((title) => ({ title }))}
                />
            })
        }
    }

    data.attributes.forEach((attr) => {
        const sattr = shopeeAttribute?.attributes
            .find((sattr) => sattr?.attribute_id === attr.attributeId)

        if (sattr) {
            const sattrVal = sattr.attribute_values[0]
            const values = sattr.attribute_values.map((value) => {
                const childVal = attr.children.find((child) => child.valueId === value.value_id)
                return childVal?.displayName || value.raw_value
            })
            if (sattrVal) {
                attributeItems.push({
                    key: attr.attributeId,
                    label: attr.displayName,
                    children: values.join(", ")
                })
            }
        }
    })

    // attribute?.attributes.forEach((attr) => attributeItems.push({
    //     key: attr?.attribute_id,
    //     label: "Status",
    //     children: <Tag color={product.as_draft ? "" : "blue"}>
    //         {product.getStatus()}
    //     </Tag>
    // }))

    if (attributeItems.length === 0) {
        attributeItems.push({
            key: "novariant",
            label: `Tidak ada variasi.`,
            children: ""
        })
    }

    return <Spin spinning={pending} tip="Loading...">
        <Descriptions
            column={1}
            colon={false}
            title="Atribut Shopee"
            items={attributeItems}
            labelStyle={{ width: 150, marginRight: 32 }}
            contentStyle={{ fontWeight: 400 }}
        />
    </Spin>
}

export default DetailShopeeAttribute
