import { InputNumber, Select, Space } from "antd"
import React from "react"

import { UploadMode } from "../../api/bot_configuration"
import AntdCheckbox from "../common/AntdCheckbox"
import AntdSelectAddon from "../common/AntdSelectAddon"

export interface ActionSetting {
    mode: UploadMode
    limit: number
    use_map: boolean
    reset_map: boolean
    one_to_multi: boolean
}

interface Props {
    setting: ActionSetting
    onChange(setting: Partial<ActionSetting>): void
}

const options: {
    value: UploadMode
    label: string
}[] = [
        { value: 'shopee', label: 'Shopee' },
        { value: 'shopee_manual', label: 'Shopee Manual' },
        { value: 'tokopedia', label: 'Tokopedia' },
        { value: 'qlobot_shopee', label: 'Qlobot Shopee' },
        { value: 'jakmall', label: 'Jakmall' },
    ]

const AkunActionSetting: React.FC<Props> = (props: Props) => {
    const { setting, onChange } = props

    const useMapping = setting.mode === "tokopedia" || setting.mode === "jakmall"
    const isManual = "shopee_manual" === setting.mode

    return <Space direction="vertical" className="d-flex">
        <Space wrap>
            <AntdSelectAddon addon="Mode">
                <Select
                    onChange={(mode) => onChange({ mode })}
                    value={setting.mode}
                    options={options}
                    style={{ width: 180 }}
                />
            </AntdSelectAddon>

            <InputNumber
                value={setting.limit}
                addonBefore="limit"
                style={{ width: 150 }}
                disabled={!isManual}
                onChange={(val) => onChange({ limit: val || 1 })}
            />
        </Space>

        <Space wrap>
            <AntdCheckbox
                checked={setting.use_map}
                style={{ fontWeight: 300 }}
                disabled={!useMapping}
                onChange={(use_map) => onChange({ use_map })}
            >Use mapping</AntdCheckbox>

            <AntdCheckbox
                checked={setting.reset_map}
                style={{ fontWeight: 300 }}
                disabled={!isManual}
                onChange={(reset_map) => onChange({ reset_map })}
            >Reset Mapper</AntdCheckbox>

            <AntdCheckbox
                checked={setting.one_to_multi}
                style={{ fontWeight: 300 }}
                disabled={!isManual}
                onChange={(one_to_multi) => onChange({ one_to_multi })}
            >One to Multi</AntdCheckbox>
        </Space>
    </Space>
}

export default AkunActionSetting
