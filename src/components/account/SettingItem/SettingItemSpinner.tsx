import { Space, Typography } from "antd"
import React from "react"

import { IAccount } from "../../../model/Account"
import AntdInput from "../../common/AntdInput"
import AntdSelectAddon from "../../common/AntdSelectAddon"
import MarkupSelectNew from "../../common/MarkupSelectNew"
import SpinSelectNew from "../../common/SpinSelectNew"
import HastagSelectNew from "../../common/HastagSelectNew"

interface Props {
    account: IAccount
    onChange: (data: Partial<IAccount>) => void
}

const SettingItemSpinner: React.FC<Props> = (props: Props) => {

    const { account, onChange } = props

    return <div>
        <Typography.Text type="secondary" className="d-block mb-1">Spinner Setting</Typography.Text>
        <Space wrap>
            <AntdInput
                addonBefore="Watermark"
                value={account.water || undefined}
                placeholder="isi watermark"
                style={{ minWidth: 200 }}
                onChange={(water) => onChange({ water })}
            />

            <AntdSelectAddon addon="Markup">
                <MarkupSelectNew
                    value={account.markup}
                    style={{ minWidth: 200 }}
                    onChange={(markup) => onChange({ markup })}
                />
            </AntdSelectAddon>

            <AntdSelectAddon addon="Spin Title">
                <SpinSelectNew
                    value={account.polatitle}
                    style={{ minWidth: 200 }}
                    onChange={(polatitle) => onChange({ polatitle })}
                />
            </AntdSelectAddon>

            <AntdSelectAddon addon="Hastag">
                <HastagSelectNew
                    value={account.hastag}
                    style={{ minWidth: 200 }}
                    onChange={(hastag) => onChange({ hastag })}
                />
             </AntdSelectAddon>
        </Space>
    </div>
}

export default SettingItemSpinner
