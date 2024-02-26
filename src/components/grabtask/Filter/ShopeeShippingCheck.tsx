import { Space } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { GrabShopeeShipping, SearchFilterDynamicShipping } from "../../../model/newapisdk"
import { shippingsState } from "../../../recoil/atoms/shipping"
import AntdCheckbox from "../../common/AntdCheckbox"

interface Props {
    value: GrabShopeeShipping[]
    onChange: (v: GrabShopeeShipping[]) => void
}

const ShippingCheck: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props
    const shippings = useRecoilValue(shippingsState)

    function onChecked(check: boolean, shipping: SearchFilterDynamicShipping) {
        if (check) {
            onChange([...value, shipping])

        } else {
            onChange(value.filter((v) => v.positionid !== shipping.positionid))
        }
    }

    return <Space size="small" className="d-flex" wrap>
        {shippings.map((shipping) => <AntdCheckbox
            key={shipping.positionid}
            style={{ width: 200, fontWeight: 400 }}
            checked={value.some((s) => shipping.positionid === s.positionid)}
            onChange={(check) => onChecked(check, shipping)}
        >{shipping.display_name}</AntdCheckbox>)}
    </Space>
}

export default ShippingCheck
