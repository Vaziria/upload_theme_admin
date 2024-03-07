import { Empty, Pagination, Result, Space } from "antd"
import React from "react"

import { CategmapQuery } from "../../hooks/search_query/categmap_query"

interface MapperDataRenderProps<T> {
    query: CategmapQuery
    items: T[]
    render: (item: T, key: number) => React.ReactNode
    filterSearch?: (item: T, search: string) => boolean
    onChange: (data: Partial<CategmapQuery>) => void
}

export default function MapperDataRender<T extends { unmapped: boolean }>(props: MapperDataRenderProps<T>): React.ReactElement {

    const { query, items, render } = props

    if (!query.namespace) {
        return <Result
            status="404"
            title="namespace belum dipilih"
            subTitle="pilih namespace terlebih dahulu sebelum melanjutkan."
        />
    }

    const fixItems = items
        .filter((item) => props.filterSearch ? props.filterSearch(item, query.search) : true)
        .filter((item) => !query.unmapped || item.unmapped)

    if (fixItems.length === 0) {
        return <Empty description="Tidak ada category mapping ditemukan" className="my-5" />
    }

    return <Space direction="vertical" size="middle" className="d-flex">

        {fixItems
            .filter((_, index) => {
                const itemPage = Math.ceil((index + 1) / query.pagesize)
                return itemPage == query.page
            })
            .map(render)
        }

        <div className="d-flex justify-content-center">
            <Pagination
                current={query.page}
                pageSize={query.pagesize}
                total={fixItems.length}
                showSizeChanger
                pageSizeOptions={[10, 20, 30, 50]}
                onChange={(page, pagesize) => props.onChange?.({ page, pagesize })}
            />
        </div>
    </Space>
}
