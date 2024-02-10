import { Progress, Switch } from "antd"
import React from "react"

import { IAccount } from "../../../model/Account"

interface Props {
    account: IAccount
    onActived: (active: boolean) => void
}

const SettingItemActive: React.FC<Props> = (props: Props) => {

    const { account, onActived } = props

    const percent = (account.count_upload / account.limit_upload) * 100
    const fixpercent = Number(percent.toFixed(2))

    return <div className="d-flex align-items-center" style={{ gap: 24 }}>
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <Switch
                id={'active_' + account._id}
                checked={account.active}
                onChange={onActived}
            />

            <label htmlFor={'active_' + account._id} className="mb-0">Active</label>
        </div>

        <Progress
            steps={4}
            percent={fixpercent}
        />

        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            Uploaded: {account.count_upload} / {account.limit_upload}
        </div>
    </div>
}

export default SettingItemActive
