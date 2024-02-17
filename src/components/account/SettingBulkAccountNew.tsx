import { Input, Select, Space, Tabs, TabsProps } from 'antd'
import React from 'react'
import { AccountQuery } from '../../api/account'
import AntdCheckbox from '../common/AntdCheckbox'

interface Props {
    query: AccountQuery
    updateQuery(query: AccountQuery): void
    selectAll(check: boolean): void
    activeAll(active: boolean): void
}

const SettingBulkAccountNew: React.FC<Props> = (props: Props) => {

    function updateQuery(query: AccountQuery): void {
        const { updateQuery, selectAll } = props
        selectAll(false)
        updateQuery(query)
    }

    const { query, selectAll, activeAll } = props

    const items: TabsProps["items"] = [
        {
            key: "all",
            label: "Semua",
        },
        {
            key: "true",
            label: "Aktif",
        },
        {
            key: "false",
            label: "Tidak Aktif",
        },
    ]

    return <Space direction="vertical" className="d-flex">

        <Tabs
            activeKey={typeof query.active === "boolean" ? String(query.active) : query.active}
            type="card"
            items={items}
            onChange={(key) => updateQuery({
                ...query,
                active: key === "all" ? "all" : key === "true",
                start: 0
            })}
        />
        <div className="d-flex" style={{ gap: 8 }}>
            <Input.Search
                value={query.search}
                addonBefore="Search"
                placeholder="..."
                onChange={(v) => updateQuery({
                    ...query,
                    search: v.target.value
                })}
            />
            <Select
                defaultValue="1"
                style={{ minWidth: 180 }}
                options={[
                    { value: "1", label: "Dibuat Terbaru" },
                    { value: "2", label: "Dibuat Terlama" },
                    { value: "3", label: "Last Upload Terbaru" },
                    { value: "4", label: "Last Upload Terlama" },
                ]}
                onChange={(val) => {
                    switch (val) {
                        case "1":
                            updateQuery({ ...query, sort: "", reverse: -1 })
                            break

                        case "2":
                            updateQuery({ ...query, sort: "", reverse: 1 })
                            break

                        case "3":
                            updateQuery({ ...query, sort: "last_up", reverse: -1 })
                            break

                        case "4":
                            updateQuery({ ...query, sort: "last_up", reverse: 1 })
                            break
                    }
                }}
            />
        </div>

        <Space>
            <AntdCheckbox onChange={selectAll}>Select All</AntdCheckbox>
            <AntdCheckbox onChange={activeAll}>Active All</AntdCheckbox>
        </Space>
    </Space>
}

export default SettingBulkAccountNew
