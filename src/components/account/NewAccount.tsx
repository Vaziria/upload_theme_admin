import React from 'react'
import client from '../../api/client'
import { Account } from '../../model/Account'
import { IAkun } from '../../model/shopee/TaskSetup'
import AkunTextareaOld from '../common/AkunTextareaOld'

interface IProps {
    onAddAccount (): void
}

interface IState {
    showBulk: boolean
    akuns: IAkun[]
}

class BulkAccount extends React.Component<IProps, IState> {
    state: IState = {
        showBulk: false,
        akuns: []
    }

    akunTextareaRef: AkunTextareaOld|null = null

    async addAccounts (): Promise<void> {
        const accountPosts: Promise<void>[] = []
        
        this.state.akuns.forEach(akun => {
            const account = new Account()
            const { username, pwd, namespace } = akun
            account.setUserAccount({
                user: username,
                pass: pwd,
                namespace
            })

            accountPosts.push(
                client.post('/api/user', {
                    action: 'post',
                    data: {
                        ...account,
                        shopee_categ: account.shopee_categ.map(String)
                    }
                })
            )
        })

        await Promise.all(accountPosts)
        this.akunTextareaRef?.resetValue()
        this.props.onAddAccount()
    }

    renderAddAccount (): JSX.Element {
        const { showBulk, akuns } = this.state

        if (!showBulk) {
            return <></>
        }

        return <div className="row bulk">
            <div className="col">
                <AkunTextareaOld
                    ref={ref => this.akunTextareaRef = ref}
                    akuns={akuns}
                    update={akuns => this.setState({ akuns })}
                />
                <br/>
                <button
                    type="button"
                    className="btn btn-info btn-sm"
                    style={{
                        padding: 8,
                        width: 130,
                        marginTop: 10
                    }}
                    onClick={() => this.addAccounts()}
                >ADD ACCOUNT</button>
            </div>
        </div>
    }

    render (): JSX.Element {
        return <div className="col-lg-8">
            <label>NEW ACCOUNT:</label>
            <div>
                {this.renderAddAccount()}
                <div className="row">
                    <div className="col">
                        <br/>
                        <button
                            className="btn btn-success showbut btn-sm btn-dark"
                            type="button"
                            style={{
                                padding: 10,
                                width: 172,
                                marginTop: 10
                            }}
                            onClick={() => this.setState({ showBulk: !this.state.showBulk })}
                        >BULK ADD ACCOUNT</button>
                    </div>
                </div>
            </div>
        </div>
    }
}

export default BulkAccount
