import { Tabs } from "antd";
import React from "react";

import { MarketList } from "../../model/Common";

interface Props {
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

    const { mode, onChange } = props
    
    return <Tabs
        activeKey={mode}
        type="card"
        items={items}
        onChange={(key) => onChange(key as MarketList)}
    />
}

export default GrabTaskTabs
