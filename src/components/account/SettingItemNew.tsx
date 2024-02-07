import React from "react"
import { IAccount } from "../../model/Account"

import { Card, Space } from "antd"
import { deleteAccount, getProductAccount, updateAccount } from "../../api/account"
import { UploadMode } from "../../api/bot_configuration"
import { emitEvent } from "../../event"
import SettingItemAction from "./SettingItem/SettingItemAction"
import SettingItemActive from "./SettingItem/SettingItemActive"
import SettingItemBasic from "./SettingItem/SettingItemBasic"
import SettingItemSpinner from "./SettingItem/SettingItemSpinner"
import SettingItemTitle from "./SettingItem/SettingItemTitle"

interface IProps {
    akun: IAccount
    mode: UploadMode
    copyAccount?: IAccount
    update(): void
    onCopy(akun: IAccount): void
}

interface IState {
    item_count: number
    product: number
    check: boolean
    akunChange: Partial<IAccount>
}

class SettingItemNew extends React.Component<IProps, IState> {
    state: IState = {
        item_count: 0,
        product: 0,
        check: false,
        akunChange: {}
    }

    get account(): IAccount {
        const parentAccount = this.props.akun
        const changeAccount = this.state.akunChange
        return {
            ...parentAccount,
            ...changeAccount
        }
    }

    setAkunChange(item: Partial<IAccount>): void {
        const { akunChange } = this.state
        this.setState({
            akunChange: {
                ...akunChange,
                ...item
            }
        })
    }

    async getProductCount(): Promise<void> {
        const product = await getProductAccount(this.account)
        this.setState({ product })
    }

    async updateAkun(): Promise<void> {
        await updateAccount(this.account)
        emitEvent('show_msg', {
            msg: 'Success Update Akun..',
        })
    }

    async updateAkunActive(active: boolean): Promise<void> {
        const akun = this.props.akun
        akun.active = active
        await updateAccount(akun)
    }

    resetUploadCount(): void {
        this.setAkunChange({ count_upload: 0 })
        setTimeout(() => this.updateAkun(), 300)
    }

    async deleteAkun(): Promise<void> {
        this.setState({ check: false })
        await deleteAccount(this.account.user)
        emitEvent('show_msg', {
            msg: 'Success Delete Akun..',
        })
    }

    pasteAkun(): void {
        const { copyAccount } = this.props
        const { akunChange } = this.state

        if (copyAccount) {
            const {
                markup,
                limit_upload,
                namespace,
                polatitle,
                hastag
            } = copyAccount

            this.setState({
                akunChange: {
                    ...akunChange,
                    markup,
                    hastag,
                    limit_upload,
                    namespace,
                    polatitle
                }
            })
        }
    }

    render(): JSX.Element {

        const { update, onCopy, mode } = this.props

        return <Card
            size="small"
            title={<div className="d-flex align-items-center" style={{ gap: 20 }}>
                <SettingItemTitle
                    account={this.account}
                    checked={this.state.check}
                    onChecked={(check) => this.setState({ check })}
                />

                <SettingItemActive
                    account={this.account}
                    onActived={(active) => {
                        this.setAkunChange({ active })
                        setTimeout(() => this.updateAkunActive(active), 300)
                    }}
                />
            </div>}
        >

            <Space direction="vertical" className="d-flex pb-2">
                <SettingItemBasic
                    mode={mode}
                    account={this.account}
                    onChange={(data) => this.setAkunChange(data)}
                />

                <SettingItemSpinner
                    account={this.account}
                    onChange={(data) => this.setAkunChange(data)}
                />

                <SettingItemAction
                    onDelete={async () => {
                        await this.deleteAkun()
                        update()
                    }}
                    onUpdate={this.updateAkun}
                    onCopy={() => onCopy(this.account)}
                    onPaste={() => this.pasteAkun()}
                    onResetUploaded={() => this.resetUploadCount()}
                />
            </Space>

        </Card>
    }
}

export default SettingItemNew
