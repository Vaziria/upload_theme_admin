import { Tabs, TabsProps } from "antd"
import React from "react"

export type ColMode = "range_price" | "category" | "city"

interface Props extends Omit<TabsProps, "onChange"> {
    mode: ColMode
    onChange(mode: ColMode): void
}

const items: {
    label: string,
    key: ColMode
}[] = [
        {
            label: "Range Harga",
            key: "range_price",
        },
        {
            label: "Kategori",
            key: "category",
        },
        {
            label: "Kota",
            key: "city",
        }
    ]

const ModeTabs: React.FC<Props> = (props: Props) => {

    const { mode, onChange, ...reprops } = props

    return <Tabs
        activeKey={mode}
        items={items}
        onChange={(key) => onChange(key as ColMode)}
        style={{ marginBottom: -14 }}
        {...reprops}
    />
}

export default ModeTabs
