import { Badge, Card, Tag } from "antd"
import React from "react"
import { useSetRecoilState } from "recoil"

import { MapperItemState, mapperItemsState } from "../../recoil/atoms/mapper_items"

import ShopeeCategoryCascader from "../shopee/ShopeeCategoryCascader"


interface Props {
    item: MapperItemState
}

const TokopediaToShopeeMapperItem: React.FC<Props> = (props: Props) => {

    const {
        tokopedia_id,
        tokopedia_category_name,
        product_count,
        unmapped
    } = props.item

    const setMapperItems = useSetRecoilState(mapperItemsState)
    function onCategoryChange(shopee_id: number) {
        setMapperItems((mapper) => mapper.map((map) => {

            if (map.tokopedia_id === tokopedia_id) {
                return { ...map, shopee_id }
            }

            return map
        }))
    }

    const nameLength = tokopedia_category_name?.length || 0
    const title = <div style={{ display: "flex", gap: 5, fontSize: 13 }}>
        {tokopedia_category_name?.reduce<React.ReactNode[]>((node, name, index) => {

            if (nameLength - 1 != index) {
                node.push(
                    <span key={"name" + index} style={{ fontWeight: 300 }}>{name}</span>,
                    <span key={"slash" + index}>/</span>
                )
            } else {
                node.push(<strong key={"name" + index} style={{ fontWeight: 700 }}>{name}</strong>)
            }

            return node

        }, [])}

        {unmapped && <Tag color="orange" className="ml-2">unmapped</Tag>}

        <div style={{ justifyContent: "end", flex: "1", "display": "flex" }}>
            <Badge count={product_count} />
        </div>
    </div>

    return <Card hoverable title={title} size="small" type="inner">
        <span style={{ fontWeight: 300, fontSize: 13 }}>mapping menjadi:</span>
        <ShopeeCategoryCascader
            value={props.item?.shopee_id || 0}
            style={{ width: "100%" }}
            onChange={onCategoryChange}
        />
    </Card>
}

export default TokopediaToShopeeMapperItem
