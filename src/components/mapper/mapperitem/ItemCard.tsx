import { Card, CardProps } from "antd"
import React from "react"

const ItemCard: React.FC<CardProps> = (props: CardProps) => {

    const { children, ...reprops } = props

    return <Card
        hoverable
        {...reprops}
    >
        <span>mapping menjadi:</span>
        {children}
    </Card>
}

export default ItemCard
