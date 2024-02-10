import { Button, Space } from "antd"
import React from "react"

import AntdCheckbox from "../../components/common/AntdCheckbox"
import MarketplaceSelect from "../../components/common/MarketplaceSelect"
import { DetailProductQuery } from "./DetailProductNew"

interface Props {
    query: DetailProductQuery
    onChange(data: Partial<DetailProductQuery>): void
}

const DetailProductFilter: React.FC<Props> = (props: Props) => {

    const { query, onChange } = props

    return <Space direction="vertical" size="middle" className="d-flex">
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <MarketplaceSelect
                value={query.marketplace}
                className="w-100"
                onChange={(marketplace) => onChange({
                    marketplace,
                    is_public: false,
                })}
            />
            <div style={{ minWidth: 150 }}>
                <AntdCheckbox
                    checked={query.is_public}
                    onChange={(is_public) => onChange({
                        is_public,
                    })}
                >
                    Public Category
                </AntdCheckbox>
            </div>
        </div>

        <div className="d-flex" style={{ gap: 10 }}>
            <Button type="primary" style={{ background: "#2f54eb" }}>Save to CSV</Button>
            <Button type="primary" style={{ background: "#08979c" }}>Re-Sync Category</Button>
        </div>
    </Space>
}

export default DetailProductFilter