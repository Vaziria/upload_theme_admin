import { Button, Divider, Rate, Space } from "antd";
import React from "react";

import { SaveOutlined } from "@ant-design/icons";
import { MarketplaceColor } from "../../const/mpcolor";
import { GrabShopeeQuery, SettingGrabFilterShopeeExtraResponse } from "../../model/newapisdk";
import ShopeeCitiesSelect from "./Filter/ShopeeCitiesSelect";
import ShopeeCreatedDateRange from "./Filter/ShopeeCreatedDateRange";
import ShopeePriceRange from "./Filter/ShopeePriceRange";
import ShopeeSellerTypeCheck from "./Filter/ShopeeSellerTypeCheck";
import ShopeeShippingCheck from "./Filter/ShopeeShippingCheck";
import ShopeeSort from "./Filter/ShopeeSort";

interface Props {
    grabSetting: GrabShopeeQuery
    grabFilter: SettingGrabFilterShopeeExtraResponse
    setGrabSetting(v: Partial<GrabShopeeQuery>): void
    setGrabFilter(v: Partial<SettingGrabFilterShopeeExtraResponse>): void
    onSave(): void;
}

const GrabTaskFilterShopee: React.FC<Props> = (props: Props) => {

    const { grabSetting, grabFilter, setGrabSetting, setGrabFilter, onSave } = props

    return <Space direction="vertical" size="large" className="d-flex">

        <ShopeeSort value={grabSetting.by} onChange={(by) => setGrabSetting({ by })} />

        <Divider className="my-0" />
        <Space wrap align="start">
            <ShopeeCreatedDateRange
                value={grabFilter.product_created}
                onChange={(product_created) => setGrabFilter({ product_created })}
            />

            <div>
                <label className="d-block">Range Harga</label>
                <ShopeePriceRange
                    value={grabSetting}
                    onChange={(val) => setGrabSetting(val)}
                />
            </div>

            <div>
                <label className="d-block">Kota</label>
                <ShopeeCitiesSelect
                    value={grabSetting.locations}
                    onChange={(locations) => setGrabSetting({ locations })}
                />
            </div>
        </Space>

        <div>
            <label className="d-block m-0">Rating</label>
            <Rate
                value={grabSetting.rating_filter}
                onChange={(rating_filter) => setGrabSetting({ rating_filter })}
            />
        </div>

        <Divider className="my-0" />
        <div>
            <label className="d-block">Tipe Penjual</label>
            <ShopeeSellerTypeCheck
                value={grabSetting}
                onChange={(val) => setGrabSetting(val)}
            />
        </div>

        <Divider className="my-0" />
        <div>
            <label className="d-block">Pengiriman</label>
            <ShopeeShippingCheck
                value={grabFilter.shippings}
                onChange={(shippings) => setGrabFilter({ shippings })}
            />
        </div>

        <Divider className="my-0" />
        <div className="d-flex justify-content-end">
            <Button
                type="primary"
                style={{ backgroundColor: MarketplaceColor["shopee"] }}
                className="c-tx-sm"
                icon={<SaveOutlined />}
                onClick={onSave}
            >SAVE FILTER</Button>
        </div>
    </Space>
}

export default GrabTaskFilterShopee
