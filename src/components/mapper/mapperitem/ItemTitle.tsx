import { Badge, Tag } from "antd"
import React from "react"

interface Props {
    names: string[]
    unmapped: boolean
    count: number
}

const ItemTitle: React.FC<Props> = (props: Props) => {

    const nameLength = props.names.length

    return <div style={{ display: "flex", gap: 5, fontSize: 13 }}>
        {props.names.reduce<React.ReactNode[]>((node, name, index) => {

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

        {props.unmapped && <Tag color="orange" className="ml-2">unmapped</Tag>}

        <div style={{ justifyContent: "end", flex: "1", "display": "flex" }}>
            <Badge count={props.count} />
        </div>
    </div>
}

export default ItemTitle
