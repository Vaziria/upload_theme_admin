import React, { useState } from "react"
import { Input } from "antd"

import type { MarketList } from "../../model/Common"
import type { MapperPageFilter } from "../../recoil/selectors/mapper_items_page"
import { debounce } from "../../utils/debounce";

import AntdCheckbox from "../common/AntdCheckbox"
import NamespaceSelectNew from "../common/NamespaceSelectNew"

export interface MapperFilterData extends Pick<MapperPageFilter, "search" | "unmapped"> {
    namespace?: string
}

interface Props {
    data: MapperFilterData
    mode: MarketList
    onChange?: (data: MapperFilterData) => void
}

const { Search } = Input;

const MapperFilter: React.FC<Props> = (props: Props) => {

    const { data, mode, onChange } = props
    const { namespace, search, unmapped } = data
    const [ searchValue, setSearchValue ] = useState("")

    const onNamespaceChange = (namespace?: string) => {
        setSearchValue("")
        onChange?.({
            namespace,
            search: "",
            unmapped: false,
        })
    }

    const onUnmappedChange = (unmapped: boolean) => {
        onChange?.({ ...data, unmapped })
    }

    const onSearchChange = (search: string) => {
        onChange?.({ ...data, search })
    }

    const onSearchBouncer = debounce(onSearchChange, 500)

    return <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <NamespaceSelectNew
            style={{ minWidth: 180, maxWidth: 180 }}
            marketplace={mode}
            value={namespace || null}
            onChange={onNamespaceChange}
        />
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
