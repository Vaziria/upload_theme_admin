import React from 'react'
import NewAccount from '../components/account/NewAccount'
import {
    AccountPaging, AccountQuery,
    backup, grab, run, upload,
    defpaging, defquery, getAccounts
} from '../api/account'
import SettingBulkAccount from '../components/account/SettingBulkAccount'
import SettingItem from '../components/account/SettingItem'
import { getUploadMode, UploadMode } from '../api/bot_configuration'
import { IAccount } from '../model/Account'
import UploadShipping from '../components/shopee/UploadShipping'

export interface IState {
    kurirs: number[]
    query: AccountQuery
    paging: AccountPaging
    mode: UploadMode
    copyAkun?: IAccount
}

class AccountPage extends React.Component<unknown, IState> {
    state: IState = {
        kurirs: [],
        query: defquery,
        paging: defpaging,
        mode: 'tokopedia'
    }

    accountRefs: SettingItem[] = []

    showBulk = false

    async getAccounts (): Promise<void> {
        const getAccount = await getAccounts(this.state.query)
        const paging = this.state.paging

        paging.total = getAccount.count
        paging.data = getAccount.akuns

        this.setState({ paging })
    }

    async getUploadMode (): Promise<void> {
        const mode = await getUploadMode()
        this.setState({ mode })
    }

    componentDidMount (): void {
        this.getUploadMode()
        this.getAccounts()
    }

    async updateAll (): Promise<void> {
        const delay = 500
        let currentDelay = 0

        const updateCheckAkun = this.accountRefs
            .filter(ref => ref.state.check)
            .map(async (ref) => {
                currentDelay += delay
                await new Promise(resolve => setTimeout(resolve, currentDelay))
                await ref.updateAkun()
            })

        await Promise.all(updateCheckAkun)
        this.getAccounts()
    }

    async deleteAll (): Promise<void> {
        const delay = 500
        let currentDelay = 0

        const deleteCheckAkun = this.accountRefs
            .filter(ref => ref.state.check)
            .map(async (ref) => {
                currentDelay += delay
                await new Promise(resolve => setTimeout(resolve, currentDelay))
                await ref.deleteAkun()
            })

        await Promise.all(deleteCheckAkun)
        this.getAccounts()
    }

    pasteAll (): void {
        this.accountRefs.map(ref => ref.pasteAkun())
    }

    selectAll (check: boolean): void {
        const paging = this.state.paging

        paging.select = check
        this.setState({ paging })
        this.accountRefs
            .map(ref => ref.setState({ check }))
    }

    activeAll (active: boolean): void {
        const paging = this.state.paging

        paging.active = active
        paging.data = paging.data.map(akun => {
            akun.active = active
            return akun
        })
        
        this.setState({ paging })
    }

    renderAccountSettingItems (): JSX.Element {
        const { paging, mode } = this.state
        const settingItems: JSX.Element[] = []
        this.accountRefs = []

        paging.data.forEach(akun => {
            settingItems.push(<SettingItem
                key={akun._id}
                ref={ref => {
                    if (ref) this.accountRefs.push(ref)
                }}
                akun={akun}
                mode={mode}
                copyAccount={this.state.copyAkun}
                update={() => this.getAccounts()}
                onCopy={copyAkun => this.setState({ copyAkun })}
            />)
        })

        return <div id="itemContainer" className="col-lg-12" style={{ marginTop: 20 }}>
            {settingItems}
        </div>
    }

    render (): JSX.Element {
        const { query, paging } = this.state

        return <div className="row" style={{
            marginTop: 20,
            padding: '20px 0px 20px 0px'
        }}>
            {/* settings */}
            <NewAccount onAddAccount={() => this.getAccounts()} />
            <UploadShipping />
            {/* <SettingShipping /> */}
            
            <div className="clearfix"></div>
            <SettingBulkAccount
                query={query}
                paging={paging}
                updateQuery={query => {
                    this.setState({ query })
                    setTimeout(() => this.getAccounts(), 300)
                }}
                updateAll={() => this.updateAll()}
                deleteAll={() => this.deleteAll()}
                pasteAll={() => this.pasteAll()}
                refreshAkun={() => this.getAccounts()}
                selectAll={check => this.selectAll(check)}
                activeAll={active => this.activeAll(active)}
            />

            {/* actions */}
            <div className="col-lg-12" style={{ marginTop: -15, marginBottom: -35 }}>
                <hr />
                <label>SETTING <span style={{ color: 'red' }}>{paging.total}</span> ACCOUNT :</label>
                <div className="float-right" style={{ marginBottom:5, marginTop: 6 }}>
                    <span style={{ marginRight: 20 }}><label>ACTION : </label></span>

                    <button
                        className="btn btn-info btn-sm"
                        style={{width: 100,height:35}}
                        onClick={() => upload()}
                    >UPLOAD</button>

                    <button
                        className="btn btn-dark btn-sm"
                        style={{width: 100,height:35}}
                        onClick={() => grab()}
                    >GRAB</button>

                    <button
                        className="btn btn-warning btn-sm"
                        style={{width: 100,height:35}}
                        onClick={() => backup()}
                    >REPORT</button>
                </div>
            </div>

            {this.renderAccountSettingItems()}
        </div>
    }
}

export default AccountPage
