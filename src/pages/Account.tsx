import { Button, InputNumber, Select, Space, Typography } from 'antd'
import React, { useState } from 'react'

import {
    AccountPaging, AccountQuery,
    backup, defpaging, defquery, getAccounts
} from '../api/account'
import { UploadMode, getUploadMode } from '../api/bot_configuration'
import NewAccount from '../components/account/NewAccount'
import SettingBulkAccount from '../components/account/SettingBulkAccount'
import SettingItem from '../components/account/SettingItem'
import AntdCheckbox from '../components/common/AntdCheckbox'
import UploadShipping from '../components/shopee/UploadShipping'
import { IAccount } from '../model/Account'
import { useQuery } from '../model/newapisdk'
import SettingItemNew from '../components/account/SettingItemNew'


const { Text } = Typography

interface AkunActionProps {
    upmode: UploadMode
    setUpmode(upmode: UploadMode): void
}

const AkunAction: React.FC<AkunActionProps> = (props: AkunActionProps) => {
    const { upmode, setUpmode } = props
    const [useMap, setUseMap] = useState(false)
    const [resetMap, setResetMap] = useState(false)
    const [oneToMulti, setOneToMulti] = useState(false)
    const [limit, setLimit] = useState(0)

    const { send: tokopediaToShopee } = useQuery("GetUploadV6TokopediaToShopee")
    const { send: manualToShopee } = useQuery("GetUploadV6ManualToShopee")
    const { send: shopeeToShopee } = useQuery("GetUploadV6ShopeeToShopee")
    const { send: qlobotToShopee } = useQuery("GetUploadV6QlobotToShopee")

    const runUpload = () => {
        switch (upmode) {
            case "tokopedia":
                tokopediaToShopee({
                    query: {
                        base: "./",
                        use_mapper: useMap,
                    }
                })
                break

            case "shopee_manual":
                manualToShopee({
                    query: {
                        base: "./",
                        reset: resetMap,
                        one_to_multi: oneToMulti,
                        limit: limit,
                    },
                })
                break

            case "qlobot_shopee":
                qlobotToShopee({
                    query: {
                        base: "./",
                    },
                })
                break

            default:
                shopeeToShopee({
                    query: {
                        base: "./",
                    },
                })
        }
    }

    return (
        <Space>
            <Button type="primary" onClick={runUpload}>
                upload
            </Button>

            <Space>
                <Text>
                    Mode :
                </Text>

                <Select
                    onChange={data => setUpmode(data)}
                    defaultValue={upmode}
                    options={[
                        { value: 'shopee', label: 'Shopee' },
                        { value: 'shopee_manual', label: 'Shopee Manual' },
                        { value: 'tokopedia', label: 'Tokopedia' },
                        { value: 'qlobot_shopee', label: 'Qlobot Shopee' },
                    ]}
                    style={{
                        minWidth: "180px"
                    }}
                />

                {upmode === "tokopedia" &&
                    <AntdCheckbox value={useMap} style={{ fontWeight: 300 }} onChange={(umap) => setUseMap(umap)}>
                        Use mapping
                    </AntdCheckbox>
                }

                {upmode === "shopee_manual" &&
                    <Space>
                        <AntdCheckbox value={resetMap} style={{ fontWeight: 300 }} onChange={(umap) => setResetMap(umap)}>
                            Reset Mapper
                        </AntdCheckbox>
                        <AntdCheckbox value={oneToMulti} style={{ fontWeight: 300 }} onChange={(umap) => setOneToMulti(umap)}>
                            One to Multi
                        </AntdCheckbox>
                        <InputNumber value={limit} addonBefore="limit" style={{ width: 150 }} onChange={(val) => setLimit(val || 1)} />
                    </Space>
                }
            </Space>

            <Button onClick={backup}>
                report
            </Button>
        </Space>
    )

}


export interface IState {
    kurirs: number[]
    query: AccountQuery
    paging: AccountPaging
    mode: UploadMode
    copyAkun?: IAccount
    useOld: boolean
}

class AccountPage extends React.Component<unknown, IState> {
    state: IState = {
        kurirs: [],
        query: defquery,
        paging: defpaging,
        mode: 'shopee',
        useOld: localStorage.getItem("useOldFE") == "true",
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

    async getUploadMode(): Promise<void> {
        const mode = await getUploadMode()
        this.setState({ mode })
    }

    componentDidMount(): void {
        this.getUploadMode()
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

    renderAccountSettingItems(): JSX.Element {
        const { paging, mode } = this.state
        const settingItems: JSX.Element[] = []
        this.accountRefs = []

        paging.data.forEach(akun => {

            if (this.state.useOld) {
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

            } else {
                settingItems.push(<SettingItemNew
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
            }
        })

        return <div className="m-4 w-100">
            <AntdCheckbox
                className="mb-3"
                checked={this.state.useOld}
                onChange={(useOld) => {
                    this.setState({ useOld })
                    localStorage.setItem("useOldFE", useOld ? "true" : "false")
                }}
            >Gunakan Tampilan Lama</AntdCheckbox>
            <Space id="itemContainer" direction="vertical" size="large" className="d-flex">
                {settingItems}
            </Space>
        </div>
    }

    render(): JSX.Element {
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
            <div className="col-lg-12" style={{ marginTop: -15 }}>
                <hr />
                <label>SETTING <span style={{ color: 'red' }}>{paging.total}</span> ACCOUNT :</label>
                <div className="float-right" style={{ marginBottom: 5, marginTop: 6 }}>

                    <AkunAction
                        upmode={this.state.mode}
                        setUpmode={(mode) => this.setState({ mode })}
                    />
                </div>
            </div>

            {this.renderAccountSettingItems()}
        </div>
    }
}

export default AccountPage
