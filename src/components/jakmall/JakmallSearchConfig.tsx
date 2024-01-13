import { Button, Col, Rate, Row } from "antd"
import React from "react"

import { useMutation } from "../../hooks/mutation"
import { GrabSearchFilter, useQuery } from "../../model/newapisdk"
import AntdSelectAddon from "../common/AntdSelectAddon"
import CitySelect from "./input/CitySelect"
import DeliverySelect from "./input/DeliverySelect"
import SearchFilterGroupCheckbox from "./input/SearchFilterGroupCheckbox"
import SearchPriceRange from "./input/SearchPriceRange"
import SearchSortSelect from "./input/SearchSortSelect"

const JackmallSearchConfig: React.FC = (): JSX.Element => {

    const { send: getSearchFilter } = useQuery("GetJakmallSearchFilter")
    const { mutate: postSearchFilter } = useMutation("PostJakmallSearchFilter")

    const [searchFilter, setSearchFilter] = React.useState<GrabSearchFilter>({
        category: "",
        price_min: 0,
        price_max: 0,
        untung_paling_besar: 0,
        in_stock: 0,
        bulk_price: 0,
        delivery_types: [],
        cities: [],
        sort: "",
        rating: 0,
    })

    React.useEffect(() => {
        getSearchFilter({
            onSuccess(res) {
                res.data && setSearchFilter(res.data)
            },
        })
    }, [])

    return <Row style={{ width: "100%" }} gutter={[16, 0]}>

        <Col span={24} className="mb-1">
            <label>SETTING JAKMALL : </label>
        </Col>

        <Col span={24} className="mb-3">
            <SearchPriceRange
                value={searchFilter}
                onChange={(priceRange) => setSearchFilter({
                    ...searchFilter,
                    ...priceRange,
                })}
            />
        </Col>

        <Col span={14} className="d-flex flex-column" style={{ gap: 14 }}>
            <AntdSelectAddon addon="Urutkan">
                <SearchSortSelect
                    value={searchFilter.sort}
                    className="w-100"
                    onChange={(sort) => setSearchFilter((filter) => ({
                        ...filter,
                        sort
                    }))}
                />
            </AntdSelectAddon>

            <AntdSelectAddon addon="Pengiriman">
                <DeliverySelect
                    value={searchFilter.delivery_types}
                    className="w-100"
                    onChange={(delivery_types) => setSearchFilter((filter) => ({
                        ...filter,
                        delivery_types
                    }))}
                />
            </AntdSelectAddon>

            <AntdSelectAddon addon="Kota">
                <CitySelect
                    value={searchFilter.cities}
                    className="w-100"
                    onChange={(cities) => setSearchFilter((filter) => ({
                        ...filter,
                        cities
                    }))}
                />
            </AntdSelectAddon>

        </Col>

        <Col span={10} className="d-flex flex-column" style={{ gap: 14 }}>
            <div>
                <label className="d-block mb-0">Rating</label>
                <Rate
                    allowHalf
                    value={searchFilter.rating}
                    onChange={(rating) => setSearchFilter({
                        ...searchFilter,
                        rating,
                    })}
                />
            </div>

            <div>
                <label>Filter Berdasarkan</label>
                <SearchFilterGroupCheckbox
                    value={searchFilter}
                    onChange={(priceRange) => setSearchFilter({
                        ...searchFilter,
                        ...priceRange,
                    })}
                />
            </div>
        </Col>

        <Col span={24} className="mt-3">
            <Button
                type="primary"
                className="px-4"
                style={{ backgroundColor: "#fa541c" }}
                onClick={() => postSearchFilter({}, searchFilter)}
            >Save</Button>
        </Col>
    </Row>
}

export default JackmallSearchConfig
