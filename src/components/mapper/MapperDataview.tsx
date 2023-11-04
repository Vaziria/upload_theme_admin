import { Empty, Pagination, Result, Space, Spin } from "antd"
import React, { useEffect, useState } from "react"
import { useRecoilValue } from "recoil"

import { mapperItemsPageState } from "../../recoil/selectors/mapper_items_page"

import type { MarketList } from "../../model/Common"
import type { MapperFilterData } from "./MapperFilter"

import { MapperItemState } from "../../recoil/atoms/mapper_items"
import TokopediaToShopeeMapperItem from "./TokopediaToShopeeMapperItem"

interface MapperDataviewProps {
    mode: MarketList
    filter: MapperFilterData
    loading: boolean
    items?: MapperItemState[]
}

const MapperDataview: React.FC<MapperDataviewProps> = (props: MapperDataviewProps) => {

    const { mode, filter } = props
    const { namespace, search, unmapped } = filter

    const [page, setPage] = useState(1)
    const [pagesize, setPagesize] = useState(10)

    useEffect(() => setPage(1), [props.filter])

    const [items, total] = useRecoilValue(mapperItemsPageState({
        mode,
        search,
        unmapped,
        page,
        pagesize
    }))

    if (props.loading) {
        return <Space align="center" direction="vertical" style={{ display: "flex" }}>
            <Spin tip="Loading" />
        </Space>
    }

    if (mode === "shopee") {
        return <Result
            status="404"
            title="unsupported mode shopee"
            subTitle="mapping kategori shopee ke tokopedia belum didukung untuk sementara."
        />
    }

    if (!namespace) {
        return <Result
            status="404"
            title="namespace belum dipilih"
            subTitle="pilih namespace terlebih dahulu sebelum melanjutkan."
        />
    }

    if (items.length === 0) {
        return <Empty description="Tidak ada category mapping ditemukan" />
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
                    total={total}
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
