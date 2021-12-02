import React from 'react'
import { AccountPaging, AccountQuery } from '../../api/account'
import { IAkunAction } from '../../model/shopee/TaskSetup'
import Checkbox from '../common/Checkbox'
import GoPage from './SettingAccount/GoPage'
import LimitPage from './SettingAccount/LimitPage'
import Search from './SettingAccount/Search'
import SelectActive from './SettingAccount/SelectActive'

interface IProps {
    akuns: IAkunAction[]
    query: AccountQuery
    paging: AccountPaging
    updateQuery (query: AccountQuery): void
    updatePaging (paging: AccountPaging): void
}

class SettingBulkAccount extends React.Component<IProps> {

    async updateAll (): Promise<void> {
        // updateAll
	}

    async deleteAll (): Promise<void> {
        // deleteAll
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
                        value={paging.goPage}
                        update={goPage => updatePaging({ ...paging, goPage })}
                    />
                </div>

                <div className="col-lg-6">
                    <button className="btn btn-info btn-sm" ng-click="refreshAll()">Refresh Jumlah Product</button>
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

                {/* <div class="col-lg-6">
			    <div class="cols"></div>
                </div> */}
            </div>
        </div>
    }
}

export default SettingBulkAccount
