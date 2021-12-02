import React from 'react'
import { IAkun, IAkunAction } from '../model/shopee/TaskSetup'
import NewAccount from '../components/account/NewAccount'
import { AccountPaging, AccountQuery, defpaging, defquery } from '../api/account'
import SettingBulkAccount from '../components/account/SettingBulkAccount'
import SettingShipping from '../components/account/SettingShipping'

interface IState {
    akuns: IAkunAction[]
    kurirs: number[]
    query: AccountQuery
    paging: AccountPaging
}

class AccountPage extends React.Component<unknown, IState> {
    state: IState = {
        akuns: [],
        kurirs: [],
        query: defquery,
        paging: defpaging
    }

    showBulk = false

    addAccount (addAkuns: IAkun[]): void {
        const akuns = this.state.akuns
        addAkuns.forEach(akun => {
            const findAccount = akuns.find(acc => acc.username == akun.username)
            if (!findAccount) {
                akuns.push({
                    ...akun,
                    selected: false,
                    active: false
                })
            }
        })

        this.setState({ akuns })
	}

    render (): JSX.Element {
        const { akuns, query, paging } = this.state

        return <div className="row" style={{
            marginTop: 20,
            padding: '20px 0px 20px 0px'
        }}>
            <NewAccount addAccount={akuns => this.addAccount(akuns)} />
            <SettingShipping />
            <div className="clearfix"></div>
            <SettingBulkAccount
                akuns={akuns}
                query={query}
                paging={paging}
                updateQuery={query => this.setState({ query })}
                updatePaging={paging => this.setState({ paging })}
            />
        </div>
    }
}

export default AccountPage
