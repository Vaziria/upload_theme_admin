import { Tabs, TabsProps } from "antd"
import React from "react"

import { MarketList, marketList } from "../../model/Common"

interface Props extends Omit<TabsProps, "onChange"> {
    mp: MarketList
    onChange(mp: MarketList): void
}

const MarketplaceTabs: React.FC<Props> = (props: Props) => {

    const { mp, onChange, style, ...reprops } = props

    return <Tabs
        activeKey={mp}
        items={marketList.map((mp) => ({
            key: mp,
            label: mp.split("_").join(" "),
        }))}
        {...reprops}
        style={{
            height: 60,
            padding: 14,
            marginRight: -24,
            paddingBottom: 0,
            ...style
        }}
        onChange={(key) => onChange(key as MarketList)}
    />
}

export default MarketplaceTabs
