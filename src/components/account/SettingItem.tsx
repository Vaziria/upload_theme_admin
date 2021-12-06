import React from "react"
import { IAccount } from "../../model/Account"
import Mode from "./Setting/Mode"
import Pass from "./Setting/Pass"
import Watermark from "./Setting/Watermark"

import TokopediaCategorySelect from '../tokopedia/TokopediaCategorySelect'
import ShopeeCategSelect from '../shopee/ShopeeCategSelect'
import Markup from "./Setting/Markup"
import SpinTitle from "./Setting/SpinTitle"
import Hashtag from "./Setting/Hashtag"
import Collection from "./Setting/Collection"
import LimitPost from "./Setting/LimitPost"
import { UploadMode } from "../../api/bot_configuration"
import { deleteAccount, getItemCount, getProductAccount, updateAccount } from "../../api/account"
import Checkbox from "../common/Checkbox"
import EstimateProduct from "./Setting/EstimateProduct"

interface IProps {
    akun: IAccount
    mode: UploadMode
    copyAccount?: IAccount
    update (): void
    onCopy (akun: IAccount): void
}

interface CategMappingPayload {
    harga: string
	hastag: string
	markup: string
	shopee_categ: [number, number, number, number]
}

interface IState {
    item_count: number
    product: number
    check: boolean
    akunChange: Partial<IAccount>
    catMap: Omit<CategMappingPayload, 'shopee_categ'>
}

class Setting extends React.Component<IProps, IState> {
    state: IState = {
        item_count: 0,
        product: 0,
        check: false,
        akunChange: {},
        catMap: {
            harga: '',
            hastag: '',
            markup: ''
        }
    }

    get account (): IAccount {
        const parentAccount = this.props.akun
        const changeAccount = this.state.akunChange
        return {
            ...parentAccount,
            ...changeAccount
        }
    }

    setAkunChange (item: Partial<IAccount>): void {
        const { akunChange } = this.state
        this.setState({
            akunChange: {
                ...akunChange,
                ...item
            }
        })
    }

    setCatMap (item: Partial<Omit<CategMappingPayload, 'shopee_categ'>>): void {
        const { catMap } = this.state
        this.setState({
            catMap: {
                ...catMap,
                ...item
            }
        })
    }

    async getItemCount (): Promise<void> {
        const { akun, mode } = this.props
        let categs: number[] = []
        let lastCateg = 0

        if (mode === 'tokopedia') {
            categs = akun.tokped_categ.map(cat => parseInt(cat))
        } else {
            categs = akun.shopee_categ
        }

        categs = categs.filter(categ => categ)
        if (categs.length) {
            lastCateg = categs[categs.length - 1]
        }

        const item_count = await getItemCount(
            akun.user,
            lastCateg,
            mode
        )
        this.setState({ item_count })
    }

    async getProductCount (): Promise<void> {
        const product = await getProductAccount(this.account)
        this.setState({ product })
    }

    async updateAkun (): Promise<void> {
        await updateAccount(this.account)
    }

    resetUploadCount (): void {
        this.setAkunChange({ count_upload: 0 })
        setTimeout(() => this.updateAkun(), 300)
    }

    async deleteAkun (): Promise<void> {
        this.setState({ check: false })
        await deleteAccount(this.account.user)
    }

    pasteAkun (): void {
        const { copyAccount } = this.props
        const { akunChange } = this.state

        if (copyAccount) {
            const {
                tokped_categ,
                shopee_categ,
                // markup,
                limit_upload,
                namespace,
                polatitle,
                // hastag
            } = copyAccount
            
            this.setState({
                akunChange: {
                    ...akunChange,
                    tokped_categ,
                    shopee_categ,
                    limit_upload,
                    namespace,
                    polatitle
                }
            })
        }
    }

    saveMap (): void {
        const catMap: CategMappingPayload = {
            ...this.state.catMap,
            shopee_categ: this.account.shopee_categ
        }
        console.log('save map', catMap)
    }

    componentDidMount (): void {
        this.getItemCount()
    }

    render (): JSX.Element {

        const { item_count, product, catMap } = this.state
        const { update, onCopy } = this.props

        return <div>
            <hr />
            <div className="row">
				<div className="col-3">
					<div className="custom-control custom-checkbox my-1 mr-sm-2">
					<Checkbox
                        className="custom-control-input"
                        id={this.account._id}
                        checked={this.state.check}
                        onChange={check => this.setState({ check })}
                    />
					<label
                        className="custom-control-label"
                        htmlFor={this.account._id}
                    > User : <strong>{this.account.user}</strong></label>
					</div>
					<br />
					
                    <Watermark
                        value={this.account.water}
                        update={water => this.setAkunChange({ water })}
                    />

                    <Pass
                        value={this.account.pass}
                        update={pass => this.setAkunChange({ pass })}
                    />
                    <Mode
                        value={this.account.mode}
                        update={mode => this.setAkunChange({ mode })}
                    />

                    <br />
                    {item_count > 0 && <span>
                        Belum Diupload : <strong>{item_count}</strong><br/>
                    </span>}

                    {product > 0 && <span>
                        Jumlah Product : <strong>{product}</strong><br/>
                    </span>}
					<br />

					<button
                        className="btn btn-danger btn-sm btn-app"
                        type="button"
                        onClick={async () => {
                            await this.deleteAkun()
                            update()
                        }}
                    >Delete</button>
					
                    <button
                        className="btn btn-info btn-sm btn-app"
                        type="button"
                        onClick={() => this.updateAkun()}
                    >Update</button>
					
                    <button
                        className="btn btn-secondary btn-sm btn-app"
                        type="button"
                        style={{ marginTop: 5 }}
                        onClick={() => this.getProductCount()}
                    >Refresh</button>

                </div>

                <div className="col-lg-6">
					<div className="row">
						<div className="col-lg-6">
							<div className="">
								<label>TOKOPEDIA:</label>
                            </div>

                            <TokopediaCategorySelect
                                value={this.account.tokped_categ}
                                selected={tokped_categ => this.setAkunChange({ tokped_categ })}
                            />

                            <EstimateProduct akun={this.account} />
                        </div>

                        <div className="col-lg-6">
                            <div className="">
                                <label>SHOPEE:</label>
                                <ShopeeCategSelect
                                    value={this.account.shopee_categ}
                                    selected={shopee_categ => this.setAkunChange({ shopee_categ })}
                                />
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
					<div className="row">
						<label>POST MARKUP:</label>
						<div className="col-lg-12">

                            <Markup
                                value={catMap.markup}
                                update={markup => this.setCatMap({ markup })}
                            />
                            <SpinTitle
                                value={this.account.polatitle}
                                update={polatitle => this.setAkunChange({ polatitle })}
                            />
                            <Hashtag
                                value={catMap.hastag}
                                update={hastag => this.setCatMap({ hastag })}
                            />
                            <Collection
                                value={this.account.namespace}
                                update={namespace => this.setAkunChange({ namespace })}
                            />
                            <LimitPost
                                value={this.account.limit_upload}
                                update={limit_upload => this.setAkunChange({ limit_upload })}
                            />
                            
                        </div>
                        <div className="col-lg-12">
							<div className="col-lg-6">
								<div className="custom-control custom-checkbox my-1 mr-sm-2">
                                    <Checkbox
                                        className="custom-control-input"
                                        id={'active_' + this.account._id}
                                        checked={this.account.active}
                                        onChange={active => this.setAkunChange({ active })}
                                    />
									<label
                                        className="custom-control-label"
                                        htmlFor={'active_' + this.account._id}
                                    ><strong>Active</strong></label>
								</div>
							</div>
						</div>
                    </div>

                    <div style={{ marginTop: 10 }}></div>
					<button
                        className="btn btn-success btn-sm btn-app"
                        type="button"
                        onClick={() => onCopy(this.account)}
                    >Copy</button>
                    
					<button
                        className="btn btn-info btn-sm btn-app"
                        type="button"
                        onClick={() => this.pasteAkun()}
                    >Paste</button>

					<button
                        className="btn btn-warning btn-sm btn-app"
                        type="button" style={{ marginTop: 5 }}
                        onClick={() => this.saveMap()}
                    >Save Map</button>

					{this.account.count_upload > 0 &&
                        <div
                            style={{ marginRight: 20, marginBottom: 10, marginTop: 10 }}
                        > Macet Di : <strong>{this.account.count_upload}</strong></div>
                    }

					<button
                        className="btn btn-danger btn-sm btn-app"
                        style={{ marginTop: 5 }}
                        onClick={() => this.resetUploadCount()}
                    >Reset</button>

					<div style={{ marginTop: 10 }}>
                        Last Up : <strong>{this.account.last_up?.toFixed(3).toString().replace('.', '')}</strong>
                    </div>
                </div>
                
            </div>

        </div>
    }
}

export default Setting
