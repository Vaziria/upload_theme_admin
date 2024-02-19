import { Space } from "antd"
import React from "react"

import { GrabShopeeQuery } from "../../../model/newapisdk"
import AntdCheckbox from "../../common/AntdCheckbox"

type Value = Pick<GrabShopeeQuery, "official_mall" | "shopee24" | "shopee_verified">

interface Props {
    value: Value
    onChange: (v: Value) => void
}

const SellerTypeCheck: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    return <Space size="small" className="d-flex" wrap>
        <AntdCheckbox
            checked={value.official_mall}
            style={{ width: 200 }}
            onChange={(official_mall) => onChange({ ...value, official_mall })}
        >Shopee Mall</AntdCheckbox>

        <AntdCheckbox
            checked={value.shopee_verified}
            style={{ width: 200 }}
            onChange={(shopee_verified) => onChange({ ...value, shopee_verified })}
        >Star Seller</AntdCheckbox>

        <AntdCheckbox
            checked={value.shopee24}
            style={{ width: 200 }}
            onChange={(shopee24) => onChange({ ...value, shopee24 })}
        >Shopee24</AntdCheckbox>
    </Space>
}

export default SellerTypeCheck
