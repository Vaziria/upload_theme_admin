import React from "react"
import { Badge, Card } from "antd"
import { useSetRecoilState } from "recoil"

import { MapperItem } from "../../api/mapper"
import { mapperItemsState } from "../../recoil/atoms/mapper_items"

import ShopeeCategoryCascader from "../shopee/ShopeeCategoryCascader"


interface Props {
    item: MapperItem
}

const TokopediaToShopeeMapperItem: React.FC<Props> = (props: Props) => {

    const setMapperItems = useSetRecoilState(mapperItemsState)
    function onCategoryChange(shopee_id: number) {
        setMapperItems((mapper) => mapper.map((map) => {

            if (map.tokopedia_id === props.item.tokopedia_id) {
                return { ...map, shopee_id }
            }

            return map
        }))
    }

    const nameLength = props.item.tokopedia_category_name?.length || 0
    const title = <div style={{ display: "flex", gap: 5, fontSize: 13 }}>
        {props.item.tokopedia_category_name?.reduce<React.ReactNode[]>((node, name, index) => {
            
            if (nameLength-1 != index) {
                node.push(
                    <span key={"name" + index} style={{fontWeight: 300}}>{name}</span>,
                    <span key={"slash" + index}>/</span>
                )
            } else {
                node.push(<strong key={"name" + index} style={{fontWeight: 700}}>{name}</strong>)
            }

            return node
    
        }, [])}

        <div style={{ justifyContent: "end", flex: "1", "display": "flex" }}>
            <Badge count={props.item.product_count} />
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
