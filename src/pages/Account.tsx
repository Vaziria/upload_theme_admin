import { Alert, Card, Col, Divider, Empty, Pagination, Row, Space } from 'antd'
import React from 'react'

import {
    AccountPaging, AccountQuery,
    defpaging, defquery, getAccounts
} from '../api/account'
import { UploadMode } from '../api/bot_configuration'
import AkunAction from '../components/account/AkunAction'
import NewAccount from '../components/account/NewAccount'
import SettingBulkAccountNew from '../components/account/SettingBulkAccountNew'
import SettingItem from '../components/account/SettingItem'
import SettingItemNew from '../components/account/SettingItemNew'
import { IAccount } from '../model/Account'


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
        mode: "shopee",
    }

    accountRefs: (SettingItem | SettingItemNew)[] = []
    showBulk = false

    async getAccounts(): Promise<void> {
        const getAccount = await getAccounts(this.state.query)
        const paging = this.state.paging

        paging.total = getAccount.count
        paging.data = getAccount.akuns

        this.setState({ paging })
    }

    componentDidMount(): void {
        this.getAccounts()
    }

    async updateAll(): Promise<void> {
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

    async deleteAll(): Promise<void> {
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

    pasteAll(): void {
        this.accountRefs.map(ref => ref.pasteAkun())
    }

    selectAll(check: boolean): void {
        const paging = this.state.paging

        paging.select = check
        this.setState({ paging })
        this.accountRefs
            .map(ref => ref.setState({ check }))
    }

    activeAll(active: boolean): void {
        const paging = this.state.paging

        paging.active = active
        paging.data = paging.data.map(akun => {
            akun.active = active
            return akun
        })

        this.setState({ paging })
    }

    render(): JSX.Element {
        const { query, paging } = this.state

        const updateQuery = (query: AccountQuery) => {
            this.setState({ query })
            setTimeout(() => this.getAccounts(), 300)
        }

        return <Row className="my-3">
            <Col
                md={{ span: 24 }}
                lg={{ span: 20, offset: 2 }}
                xl={{ span: 16, offset: 4 }}
            >
                <Card title="Akun">
                    <Space direction="vertical" className="d-flex">

                        <Alert
                            showIcon
                            type="info"
                            className="mb-2"
                            message={<span>report upload tersimpan di&nbsp;
                                <strong style={{ fontWeight: 500 }}>&quot;shopee_upload_report.csv&quot;</strong>
                            </span>}
                        />

                        <SettingBulkAccountNew
                            query={query}
                            updateQuery={updateQuery}
                            selectAll={check => this.selectAll(check)}
                            activeAll={active => this.activeAll(active)}
                        />
                        <Divider className="my-4" />
                        <NewAccount onAddAccount={() => this.getAccounts()} />

                        <AkunAction
                            allowPaste={!!this.state.copyAkun}
                            upmode={this.state.mode}
                            setUpmode={(mode) => this.setState({ mode })}
                            updateAll={() => this.updateAll()}
                            deleteAll={() => this.deleteAll()}
                            pasteAll={() => this.pasteAll()}
                            refreshAkun={() => this.getAccounts()}
                        />
                        <Divider className="my-4" />

                        <Pagination
                            showSizeChanger
                            total={paging.total}
                            pageSize={query.limit}
                            className="mb-3"
                            showTotal={(total) => `Total ${total} setting akun`}
                            onChange={(page, pageSize) => {
                                this.setState({
                                    query: {
                                        ...query,
                                        limit: pageSize,
                                        start: (page - 1) * query.limit
                                    },
                                })
                                this.getAccounts()
                            }}
                        />

                        {!paging.data.length && <Empty
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                            description="Tidak ada akun ditemukan"
                            className="py-5"
                        />}

                        <Space direction="vertical" size="large" className="d-flex">
                            {paging.data.map((akun) => <SettingItemNew
                                key={akun._id}
                                ref={ref => {
                                    if (ref) this.accountRefs.push(ref)
                                }}
                                akun={akun}
                                mode={this.state.mode}
                                copyAccount={this.state.copyAkun}
                                update={() => this.getAccounts()}
                                onCopy={copyAkun => this.setState({ copyAkun })}
                            />)}
                        </Space>
                    </Space>
                </Card>
            </Col>
        </Row>
    }
}

export default AccountPage
