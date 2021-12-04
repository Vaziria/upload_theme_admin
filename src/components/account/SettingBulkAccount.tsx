import React from 'react'
import { AccountPaging, AccountQuery } from '../../api/account'
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
    updatePaging (paging: AccountPaging): void
    refreshProdCount (): void
    updateAll(): void
    deleteAll(): void
}

class SettingBulkAccount extends React.Component<IProps> {

    refreshProdCount (): void {
        this.props.refreshProdCount()
    }

    updateAll (): void {
        this.props.updateAll()
	}

    async deleteAll (): Promise<void> {
        this.props.deleteAll()
	}

    async resetAkun (): Promise<void> {
        // resetAkun
	}

    async pasteAll (): Promise<void> {
        // pasteAll
	}
    
    render (): JSX.Element {
        const { query, paging, updateQuery, updatePaging } = this.props

        return <div className="col-lg-12" style={{ marginTop: 20 }}>
            <hr />
            <label>SETTING BULK ACCOUNT:</label>
            <div className="row">
                <div className="col-lg-3">
                    <SelectActive
                        value={query.active}
                        update={active => updateQuery({ ...query, active })}
                    />
                </div>
                <div className="col-lg-3">
                    <Search
                        value={query.search}
                        update={search => updateQuery({ ...query, search })}
                    />
                </div>
                <div className="col-lg-3">
                    <LimitPage
                        value={query.limit}
                        update={limit => updateQuery({ ...query, limit })}
                    />
                </div>
                <div className="col-lg-3">
                    <GoPage
                        value={query.start}
                        update={page => updateQuery({ ...query, start: page - 1 })}
                    />
                </div>

                <div className="col-lg-6">
                    <button
                        className="btn btn-info btn-sm"
                        onClick={() => this.refreshProdCount()}
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
                                        onChange={select => updatePaging( { ...paging, select })}
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
                                        onChange={active => updatePaging({ ...paging, active })}
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
                            update={sort => updateQuery({ ...query, sort })}
                        />
                        <SortOrder
                            value={query.reverse}
                            update={reverse => updateQuery({ ...query, reverse })}
                        />
                        <Paging
                            query={query}
                            paging={paging}
                            update={page => updateQuery({ ...query, start: page - 1 })}
                        />
                    </div>
                </div>
            </div>
        </div>
    }
}

export default SettingBulkAccount
