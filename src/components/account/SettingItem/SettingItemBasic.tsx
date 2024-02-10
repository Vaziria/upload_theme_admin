import { InputNumber, Space, Typography } from "antd"
import React from "react"

import { UploadMode } from "../../../api/bot_configuration"
import { IAccount } from "../../../model/Account"
import AntdInput from "../../common/AntdInput"
import AntdSelectAddon from "../../common/AntdSelectAddon"
import NamespaceSelect from "../../common/NamespaceSelectNew"
import ProductManualCollectionSelect from "../../common/ProductManualCollectionSelect"

interface Props {
    mode: UploadMode
    account: IAccount
    onChange: (data: Partial<IAccount>) => void
}

const Collection: React.FC<Props> = (props: Props) => {

    const { mode, account, onChange } = props

    if (mode === "shopee_manual") {
        return <ProductManualCollectionSelect
            value={account.namespace}
            placeholder="Pilih Collection"
            className="flex-1"
            style={{ minWidth: 200 }}
            onChange={(namespace) => onChange({ namespace })}
        />
    }

    return <NamespaceSelect
        showAll
        showCount
        marketplace={mode}
        value={account.namespace}
        placeholder="Pilih Collection"
        className="flex-1"
        style={{ minWidth: 200 }}
        onChange={(v) => onChange({ namespace: v || "" })}
    />
}

const SettingItemBasic: React.FC<Props> = (props: Props) => {

    const { account, onChange } = props

    return <div>
        <Typography.Text type="secondary" className="d-block mb-1">Basic Setting</Typography.Text>
        <Space wrap>
            <AntdInput
                addonBefore="Password"
                value={account.pass}
                style={{ minWidth: 200 }}
                onChange={(pass) => onChange({ pass })}
            />

            <AntdSelectAddon addon="Collection">
                <Collection {...props} />
            </AntdSelectAddon>

            <InputNumber
                addonBefore="Limit Upload"
                value={account.limit_upload}
                style={{ minWidth: 200 }}
                onChange={(v) => onChange({ limit_upload: v || 0 })}
            />
        </Space>
    </div>
}

export default SettingItemBasic
