import React from "react"
import { useRecoilValue } from "recoil"

import { MapperShopeeTokpedItem } from "../../../recoil/atoms/mapper_items"
import { mapperCategoryShopeeState } from "../../../recoil/selectors/mapper_value"
import TokopediaCategoryCascader from "../../tokopedia/TokopediaCategoryCascader"
import ItemCard from "./ItemCard"
import ItemTitle from "./ItemTitle"


interface Props {
    item: MapperShopeeTokpedItem
    onChange: (item: MapperShopeeTokpedItem) => void
}

const ShopeeToTokopediaItem: React.FC<Props> = (props: Props) => {

    const { item, onChange } = props
    const category = useRecoilValue(mapperCategoryShopeeState(item.shopee_id))
    const { unmapped } = item

    return <ItemCard title={
        <ItemTitle
            names={category.name}
            count={category.count}
            unmapped={unmapped}
        />
    }>
        <TokopediaCategoryCascader
            value={props.item?.tokopedia_id || 0}
            style={{ width: "100%" }}
            onChange={(tokopedia_id) => onChange({
                ...item,
                tokopedia_id,
                unmapped: !tokopedia_id
            })}
        />
    </ItemCard>
}

export default ShopeeToTokopediaItem
