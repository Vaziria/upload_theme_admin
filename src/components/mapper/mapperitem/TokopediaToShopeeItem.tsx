import React from "react"

import { MapperTokpedShopeeItem } from "../../../recoil/atoms/mapper_items"

import ShopeeCategoryCascader from "../../shopee/ShopeeCategoryCascader"
import ItemCard from "./ItemCard"
import ItemTitle from "./ItemTitle"


interface Props {
    item: MapperTokpedShopeeItem
    onChange: (item: MapperTokpedShopeeItem) => void
}

const TokopediaToShopeeItem: React.FC<Props> = (props: Props) => {

    const { item, onChange } = props
    const { product_count, unmapped, tokopedia_category_name } = item

    return <ItemCard title={
        <ItemTitle
            names={tokopedia_category_name || []}
            count={product_count}
            unmapped={unmapped}
        />
    }>
        <ShopeeCategoryCascader
            value={props.item?.shopee_id || 0}
            style={{ width: "100%" }}
            onChange={(shopee_id) => onChange({ ...item, shopee_id })}
        />
    </ItemCard>
}

export default TokopediaToShopeeItem
