import { Card, CardProps } from "antd"
import React from "react"

const ItemCard: React.FC<CardProps> = (props: CardProps) => {

    const { children, ...reprops } = props

    return <Card
        hoverable
        size="small"
        type="inner"
        {...reprops}
    >
        <span style={{ fontWeight: 300, fontSize: 13 }}>mapping menjadi:</span>
        {children}
    </Card>
}

export default ItemCard
