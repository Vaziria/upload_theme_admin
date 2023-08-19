import React, { useState, useEffect } from "react"
import { Pagination, Result, Space, Spin } from "antd"
import { useRecoilValue } from "recoil"

import { MapperItem } from "../../api/mapper"
import { mapperItemsPageState } from "../../recoil/selectors/mapper_items_page"
import type { MarketList } from "../../model/Common"

import TokopediaToShopeeMapperItem from "./TokopediaToShopeeMapperItem"

interface MapperDataviewProps {
    mode: MarketList
    namespace?: string
    loading: boolean
    items?: MapperItem[]
}

const MapperDataview: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(10)

    useEffect(() => setPage(1), [props.items])

    const items = useRecoilValue(mapperItemsPageState({
        mode: props.mode,
        page,
        pagesize
    }))

    if (props.loading) {
        return <Space align="center" direction="vertical" style={{ display: "flex" }}>
            <Spin tip="Loading" />
        </Space>
    }

    if (props.mode === "shopee") {
        return <Result
            status="404"
            title="unsupported mode shopee"
            subTitle="mapping kategori shopee ke tokopedia belum didukung untuk sementara."
        />
    }

    if (!props.namespace) {
        return <Result
            status="404"
            title="namespace belum dipilih"
            subTitle="pilih namespace terlebih dahulu sebelum melanjutkan."
        />
    }

    return <div>
        <Space
            direction="vertical"
            className="mt-2"
            style={{ display: 'flex' }}
            size={"middle"}
        >

            {items.map((item, key) => <TokopediaToShopeeMapperItem key={key} item={item} />)}

            <Space style={{ display: 'flex', justifyContent: "center" }}>
                <Pagination
                    current={page}
                    pageSize={pagesize}
                    total={props.items?.length}
                    pageSizeOptions={[10, 20, 30, 50]}
                    onChange={(page, pagesize) => {
                        setPage(page)
                        setPagesize(pagesize)
                    }}
                />
            </Space>

        </Space>
    </div>
}

export default MapperDataview
