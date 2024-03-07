import { Card } from "antd";
import React from "react";

import { MarketList } from "../../model/Common";

interface Props {
    children: React.ReactNode
    mode: MarketList
    onChange: (mode: MarketList) => void
}

const items: {
    key: MarketList
    label: string
}[] = [
        {
            key: "shopee",
            label: "Shopee",
        },
        {
            key: "tokopedia",
            label: "Tokopedia",
        },
        {
            key: "jakmall",
            label: "Jakmall",
        },
    ];

const GrabTaskTabs: React.FC<Props> = (props: Props) => {

    const { children, mode, onChange } = props

    return <Card
        activeTabKey={mode}
        tabList={items}
        tabProps={{
            size: 'middle',
        }}
        onTabChange={(key) => onChange(key as MarketList)}
    >{children}</Card>
}

export default GrabTaskTabs
