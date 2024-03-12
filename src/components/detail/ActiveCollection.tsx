import { DatabaseOutlined, ExportOutlined } from "@ant-design/icons"
import { Button, Card, Space, Typography } from "antd"
import React from "react"

import { MarketList } from "../../model/Common"
import { ExportSupplierQuery, ExportUrlQuery, ProductNamespaceAgg } from "../../model/newapisdk"
import toCurrency from "../../model/product"

interface Props {
    mp: MarketList
    collection?: ProductNamespaceAgg
    onExportUrl(query: ExportUrlQuery): void
    onExportSupplier(query: ExportSupplierQuery): void
}

const ActiveCollection: React.FC<Props> = (props: Props) => {

    const { mp, collection, onExportUrl, onExportSupplier } = props
    const disabled = !collection || mp !== "shopee"

    return <Card hoverable>
        <div className="d-flex">
            <div className="flex-1">
                <Typography.Title level={3}>
                    <DatabaseOutlined /> {collection?.name || "_"}
                </Typography.Title>
                <Typography.Text type="secondary" className="d-block" style={{ fontWeight: 400 }}>
                    Jumlah : {collection?.count || 0}
                </Typography.Text>
                <Typography.Text type="secondary" style={{ fontWeight: 400 }}>
                    Range Harga : {toCurrency(collection?.price_min || 0)} - {toCurrency(collection?.price_max || 0)}
                </Typography.Text>
            </div>
            <Space wrap>
                <Button
                    icon={<ExportOutlined />}
                    type="primary"
                    disabled={disabled}
                    style={{ background: disabled ? "#fff7e6" : "#fa8c16" }}
                    onClick={() => collection && onExportUrl({ namespace: collection.name })}
                >Export Url</Button>
                <Button
                    icon={<ExportOutlined />}
                    type="primary"
                    disabled={disabled}
                    style={{ background: disabled ? "#f6ffed" : "#52c41a" }}
                    onClick={() => collection && onExportSupplier({ namespace: collection.name })}
                >Export Supplier</Button>
            </Space>
        </div>
    </Card>
}

export default ActiveCollection
