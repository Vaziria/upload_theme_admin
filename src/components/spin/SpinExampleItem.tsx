import { Card, Descriptions, Typography } from "antd"
import React from "react"

import { SpinProductExample } from "../../model/newapisdk"
import currency from "../../utils/currency"

interface Props {
    item: SpinProductExample
}

const SpinExampleItem: React.FC<Props> = (props: Props) => {

    const { item } = props
    const { markup_debug: debug, name, desc } = item

    return <Card size="small" hoverable>
        <Typography.Title level={5}>
            {name}
        </Typography.Title>
        <Descriptions
            layout="vertical"
            size="small"
            colon={false}
            column={3}
            labelStyle={{ paddingBottom: 0 }}
            items={[
                {
                    key: "1",
                    label: "Harga Asli",
                    children: <strong style={{ fontWeight: 500 }}>
                        {currency(debug.harga_asli)}
                    </strong>
                },
                {
                    key: "2",
                    label: "Markup Harga",
                    children: <strong style={{ fontWeight: 500 }}>
                        {currency(debug.up_price)}
                    </strong>
                },
                {
                    key: "3",
                    label: "Harga Fix",
                    children: <strong style={{ fontWeight: 500 }}>
                        {currency(debug.up_fix)}
                    </strong>,
                },
                {
                    key: "4",
                    label: "Harga Final",
                    span: 1,
                    children: <strong style={{ fontWeight: 500 }}>
                        {currency(debug.harga_up)}
                    </strong>,
                },
                {
                    key: "5",
                    label: "Prosentase",
                    span: 2,
                    children: <strong style={{ fontWeight: 500 }}>
                        {debug.up_percent.toFixed(1)}%
                    </strong>,
                },
                {
                    key: "6",
                    label: "Deskripsi",
                    span: 3,
                    children: <Typography.Paragraph style={{ whiteSpace: "pre-line" }} ellipsis={{
                        rows: 3,
                        expandable: true,
                        symbol: <Typography.Link underline href="" onClick={e => e.preventDefault()}>lihat selengkapnya</Typography.Link>
                    }}>{desc}</Typography.Paragraph>
                },
            ]}
        />
    </Card>
}

export default SpinExampleItem
