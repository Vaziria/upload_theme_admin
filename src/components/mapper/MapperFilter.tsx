import { Input } from "antd";
import React, { useState } from "react";

import { CategmapQuery } from "../../hooks/search_query/categmap_query";
import { debounce } from "../../utils/debounce";

import AntdCheckbox from "../common/AntdCheckbox";
import AntdSelectAddon from "../common/AntdSelectAddon";
import NamespaceSelectNew from "../common/NamespaceSelectNew";

export interface MapperFilterData {
    search: string
    unmapped: boolean
    namespace?: string
}

interface Props {
    query: CategmapQuery
    onChange?: (data: Partial<CategmapQuery>) => void
}

const { Search } = Input;

const MapperFilter: React.FC<Props> = (props: Props) => {

    const { query, onChange } = props
    const { from, namespace, search, unmapped } = query
    const [searchValue, setSearchValue] = useState(search)

    const onNamespaceChange = (namespace?: string) => {
        setSearchValue("")
        onChange?.({
            namespace,
            search: "",
            unmapped: false,
            page: 1,
        })
    }

    const onUnmappedChange = (unmapped: boolean) => {
        onChange?.({ unmapped, page: 1 })
    }

    const onSearchChange = (search: string) => {
        onChange?.({ search, page: 1 })
    }

    const onSearchBouncer = debounce(onSearchChange, 500)

    return <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <AntdSelectAddon addon="Collection" style={{ width: "auto" }}>
            <NamespaceSelectNew
                className="w-100"
                style={{ maxWidth: 200, minWidth: 200 }}
                marketplace={from}
                value={namespace || null}
                onChange={onNamespaceChange}
            />
        </AntdSelectAddon>
        <AntdCheckbox
            style={{ fontWeight: 400 }}
            disabled={!namespace}
            checked={unmapped}
            onChange={onUnmappedChange}
        >
            unmapped
        </AntdCheckbox>
        <Search
            disabled={!namespace}
            placeholder="search category..."
            allowClear
            value={searchValue}
            defaultValue={search}
            checked={unmapped}
            onSearch={onSearchChange}
            onChange={({ target: { value } }) => {
                setSearchValue(value)
                onSearchBouncer(value)
            }}
        />
    </div>
}

export default MapperFilter
