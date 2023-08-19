import { Input } from "antd"
import React from "react"

import type { MarketList } from "../../model/Common"

import AntdCheckbox from "../common/AntdCheckbox"
import NamespaceSelectNew from "../common/NamespaceSelectNew"

export interface MapperFilterData {
    namespace?: string
    search: string
    unmapped: boolean
}

interface Props {
    data: MapperFilterData
    mode: MarketList
    onChange?: (data: MapperFilterData) => void
}

const { Search } = Input;

const MapperFilter: React.FC<Props> = (props: Props) => {

    const onNamespaceChange = (namespace?: string) => {
        props.onChange?.({ ...props.data,  namespace })
    }

    const onUnmappedChange = (unmapped: boolean) => {
        props.onChange?.({ ...props.data, unmapped })
    }

    const onSearchChange = (search: string) => {
        props.onChange?.({ ...props.data, search })
    }

    return <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
        <NamespaceSelectNew
            style={{ minWidth: 180, maxWidth: 180 }}
            marketplace={props.mode}
            value={props.data.namespace || null}
            onChange={onNamespaceChange}
        />
        <AntdCheckbox
            style={{ fontWeight: 400 }}
            checked={props.data.unmapped}
            onChange={onUnmappedChange}
        >
            unmapped
        </AntdCheckbox>
        <Search
            placeholder="search category..."
            allowClear
            onSearch={onSearchChange}
        />
    </div>
}

export default MapperFilter
