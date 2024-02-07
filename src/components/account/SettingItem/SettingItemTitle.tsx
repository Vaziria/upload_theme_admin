import { Typography } from "antd"
import React from "react"

import { IAccount } from "../../../model/Account"
import dateFormater from "../../../utils/date"
import AntdCheckbox from "../../common/AntdCheckbox"

interface Props {
    account: IAccount
    checked: boolean
    onChecked(check: boolean): void
}

const SettingItemTitle: React.FC<Props> = (props: Props) => {

    const { account, checked, onChecked } = props

    let last_up = ""
    if (account.last_up) {
        last_up = dateFormater(account.last_up * 1000, 'DD MNs YY at HH:mm:ss')
    }
    
    return <div className="d-flex align-items-center flex-1" style={{ gap: 10 }}>
        <AntdCheckbox
            id={account._id}
            checked={checked}
            onChange={onChecked}
        />
        <label htmlFor={account._id} className="d-block my-2">
            {account.user}
            <Typography.Text type="secondary" className="d-block" style={{ marginTop: -4 }}>
                <small>Last Upload : {last_up}</small>
            </Typography.Text>
        </label>
    </div>
}

export default SettingItemTitle
