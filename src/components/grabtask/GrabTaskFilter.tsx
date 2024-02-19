import React from "react";
import { Col, Collapse, Radio, Rate, Row, Select, Space } from "antd";

import { GrabShopeeQuery, SettingGrabFilterShopeeExtraResponse, useQuery } from "../../model/newapisdk";
import CreatedDateRange from "./Filter/CreatedDateRange";
import SellerTypeCheck from "./Filter/SellerTypeCheck";
import ShippingCheck from "./Filter/ShippingCheck";
import PriceRange from "./Filter/PriceRange";

const GrabTaskFilter: React.FC = () => {

    const [grabFilter, setGrabFilter] = React.useState<SettingGrabFilterShopeeExtraResponse>({
        product_created: {
            active: false,
            max: 0,
            min: 0
        },
        shippings: []
    })
    const [grabSetting, setGrabSetting] = React.useState<GrabShopeeQuery>({
        by: "",
        locations: [],
        official_mall: false,
        price_max: 0,
        price_min: 0,
        rating_filter: 0,
        shopee24: false,
        shopee_verified: false
    })
    const { send: getFilter } = useQuery("GetLegacyShopeeFilterGrabber")
    const { send: getSetting } = useQuery("GetLegacyApiConfigShopeeGrabSetting")

    React.useEffect(() => {
        getFilter({
            onSuccess: setGrabFilter,
        })
        getSetting({
            onSuccess: (res) => setGrabSetting(res.data)
        })
    }, [])

    const options = [
        { label: "Terkait", value: "relevancy" },
        { label: "Terbaru", value: "ctime" },
        { label: "Terlaris", value: "sales" },
        { label: "Harga", value: "price" },
    ];

    return <Collapse
        ghost
        items={[{
            key: 1,
            label: "Grab Filter",
            children: <Row gutter={[16, 16]}>
                <Col span={24} md={24} lg={12}>
                    <Space direction="vertical" size="large" className="d-flex">
                        <Radio.Group
                            value={grabSetting.by}
                            options={options}
                            optionType="button"
                            buttonStyle="solid"
                            onChange={(val) => setGrabSetting((v) => ({ ...v, by: val.target.value }))}
                        />

                        <CreatedDateRange
                            value={grabFilter.product_created}
                            onChange={(product_created) => setGrabFilter((v) => ({ ...v, product_created }))}
                        />

                        <PriceRange
                            value={grabSetting}
                            onChange={(val) => setGrabSetting((v) => ({ ...v, ...val }))}
                        />

                        <SellerTypeCheck
                            value={grabSetting}
                            onChange={(val) => setGrabSetting((v) => ({ ...v, ...val }))}
                        />
                    </Space>
                </Col>

                <Col span={24} md={24} lg={12}>
                    <Space direction="vertical" size="large" className="d-flex">
                        <Rate
                            value={grabSetting.rating_filter}
                            onChange={(rating_filter) => setGrabSetting((v) => ({ ...v, rating_filter }))}
                        />

                        <Select className="w-100" />

                        <ShippingCheck
                            value={grabFilter.shippings}
                            onChange={(shippings) => setGrabFilter((v) => ({ ...v, shippings }))}
                        />
                    </Space>
                </Col>
            </Row>
        }]}
    />
}

export default GrabTaskFilter
