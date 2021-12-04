import React from 'react'
import NewAccount from '../components/account/NewAccount'
import {
    AccountPaging, AccountQuery,
    backup, grab, run, upload,
    defpaging, defquery, getAccounts
} from '../api/account'
import SettingBulkAccount from '../components/account/SettingBulkAccount'
import SettingShipping from '../components/account/SettingShipping'
import SettingItem from '../components/account/SettingItem'
import { getUploadMode, UploadMode } from '../api/bot_configuration'
import client from '../api/client'

interface IState {
    kurirs: number[]
    query: AccountQuery
    paging: AccountPaging
    mode: UploadMode
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

    refreshProdCount (): void {
        this.accountRefs.map(ref => {
            ref.getItemCount()
        })
    }

    componentDidMount (): void {
        this.getUploadMode()
        this.getAccounts()
    }
    
    async userAction (action: 'update' | 'del'): Promise<void> {
        const allReqAction = this.accountRefs
            .filter(ref => ref.state.check)
            .map(ref => client.post('/api/user', {
                    'action' : action,
                    'data' : ref.props.akun
                })
            )

        await Promise.all(allReqAction)
        this.getAccounts()
    }

    renderAccountSettingItems (): JSX.Element {
        const { paging, mode } = this.state
        const settingItems: JSX.Element[] = []
        this.accountRefs = []

        paging.data.forEach((akun, index) => {
            settingItems.push(<SettingItem
                key={index}
                ref={ref => {
                    if (ref) this.accountRefs.push(ref)
                }}
                akun={akun}
                mode={mode}
            />)
        })

        return <div className="col-lg-12" style={{ marginTop: 20 }}>
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
            <SettingShipping />
            <div className="clearfix"></div>
            <SettingBulkAccount
                query={query}
                paging={paging}
                updateQuery={query => {
                    this.setState({ query })
                    setTimeout(() => this.getAccounts(), 300)
                }}
                updatePaging={paging => this.setState({ paging })}
                refreshProdCount={() => this.refreshProdCount()}
                updateAll={() => this.userAction('update')}
                deleteAll={() => this.userAction('del')}
            />

            {/* actions */}
            <div className="col-lg-12" style={{ marginTop: -15, marginBottom: -35 }}>
                <hr />
                <label>SETTING <span style={{ color: 'red' }}>{paging.total}</span> ACCOUNT :</label>
                <div className="float-right" style={{ marginBottom:5, marginTop: 6 }}>
                    <span style={{ marginRight: 20 }}><label>ACTION : </label></span>

                    <button
                        className="btn btn-success btn-sm"
                        style={{width: 100,height:35}}
                        onClick={() => run()}
                    >RUN</button>

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
