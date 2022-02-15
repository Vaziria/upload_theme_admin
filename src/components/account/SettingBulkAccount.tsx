import React from 'react'
import { AccountPaging, AccountQuery, resetAccount } from '../../api/account'
import { emitEvent } from '../../event'
import Checkbox from '../common/Checkbox'
import GoPage from './SettingAccount/GoPage'
import LimitPage from './SettingAccount/LimitPage'
import Paging from './SettingAccount/Paging'
import Search from './SettingAccount/Search'
import SelectActive from './SettingAccount/SelectActive'
import SortOrder from './SettingAccount/SortOrder'
import SortType from './SettingAccount/SortType'

interface IProps {
    query: AccountQuery
    paging: AccountPaging
    updateQuery (query: AccountQuery): void
    updateAll(): void
    deleteAll(): void
    pasteAll(): void
    refreshAkun(): void
    selectAll(check: boolean): void
    activeAll(active: boolean): void
}

class SettingBulkAccount extends React.Component<IProps> {

    updateAll (): void {
        this.props.updateAll()
	}

    async deleteAll (): Promise<void> {
        if(confirm("Delete..?")){
			this.props.deleteAll()
            emitEvent('show_msg', {
                msg: 'Success Akun All..',
            })
		}
	}

    async resetAkun (): Promise<void> {
        await resetAccount()
        emitEvent('show_msg', {
            msg: 'Success Reset Akun..',
        })
        this.props.refreshAkun()
	}

    async pasteAll (): Promise<void> {
        this.props.pasteAll()
	}

    updateQuery (query: AccountQuery): void {
        const { updateQuery, selectAll } = this.props
        selectAll(false)
        updateQuery(query)
    }
    
    render (): JSX.Element {
        const { query, paging, selectAll, activeAll } = this.props

        return <div className="col-lg-12" style={{ marginTop: 20 }}>
            <hr />
            <label>SETTING BULK ACCOUNT:</label>
            <div className="row">
                <div className="col-lg-3">
                    <SelectActive
                        value={query.active}
                        update={active => this.updateQuery({ ...query, active, start: 0 })}
                    />
                </div>
                <div className="col-lg-3">
                    <Search
                        value={query.search}
                        update={search => this.updateQuery({ ...query, search, start: 0 })}
                    />
                </div>
                <div className="col-lg-3">
                    <LimitPage
                        value={query.limit}
                        update={limit => this.updateQuery({ ...query, limit, start: 0 })}
                    />
                </div>
                <div className="col-lg-3">
                    <GoPage
                        start={query.start}
                        limit={query.limit}
                        update={start => this.updateQuery({ ...query, start })}
                    />
                </div>

                <div className="col-lg-6">
                    <button
                        className="btn btn-info btn-sm"
                    >Refresh Jumlah Product</button>

                    <div className="col-sm">
                        <div className="row">
                            <div className="col">
                                <div
                                    className="custom-control custom-checkbox"
                                    style={{ marginTop: 20 }}
                                >
                                    <Checkbox
                                        className="custom-control-input"
                                        id="selectAll"
                                        checked={paging.select}
                                        onChange={select => selectAll(select)}
                                    />
                                    <label className="custom-control-label" htmlFor="selectAll"> Select All</label>
                                </div>
                                <div
                                    className="custom-control custom-checkbox"
                                    style={{ marginBottom: 20 }}
                                >
                                    <Checkbox
                                        className="custom-control-input"
                                        id="activeAll"
                                        checked={paging.active}
                                        onChange={active => activeAll(active)}
                                    />
                                    <label className="custom-control-label" htmlFor="activeAll"> Active All</label>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button
                        className="btn btn-info btn-sm"
                        style={{ width: 130 }}
                        onClick={() => this.updateAll()}
                    >Update</button>
                    <button
                        className="btn btn-danger btn-sm"
                        style={{ width: 130 }}
                        onClick={() => this.deleteAll()}
                    >Delete</button>
                    <button
                        className="btn btn-danger btn-sm"
                        style={{ width: 130 }}
                        onClick={() => this.resetAkun()}
                    >Reset Akun</button>
                    <button
                        className="btn btn-dark btn-sm"
                        style={{ width: 130 }}
                        onClick={() => this.pasteAll()}
                    >Paste ALL</button>
                </div>

                <div className="col-lg-6">
                    <div className="cols">
                        <SortType
                            value={query.sort}
                            update={sort => this.updateQuery({ ...query, sort, start: 0 })}
                        />
                        <SortOrder
                            value={query.reverse}
                            update={reverse => this.updateQuery({ ...query, reverse, start: 0 })}
                        />
                        <Paging
                            query={query}
                            paging={paging}
                            update={start => this.updateQuery({ ...query, start })}
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SettingBulkAccount
