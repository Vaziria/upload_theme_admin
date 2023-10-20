import { Badge, Card } from "antd"
import React from "react"


export interface MapperItem {
    _id: number
    count: number
    name: string[]
}

interface Props {
    item: MapperItem
}

const ShopeeToTokopediaMapperItem: React.FC<Props> = (props: Props) => {

    const nameLength = props.item.name.length
    const title = <div style={{ display: "flex", gap: 5, fontSize: 13 }}>
        {props.item.name.reduce<React.ReactNode[]>((node, name, index) => {
            
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
            <Badge count={props.item.count} />
        </div>
    </div>

    return <Card hoverable title={title} size="small" type="inner">
        {/* <ShopeeeCategoryCascader /> */}
    </Card>
}

export default ShopeeToTokopediaMapperItem