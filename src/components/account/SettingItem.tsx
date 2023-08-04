import React from "react"
import { IAccount } from "../../model/Account"
import Pass from "./Setting/Pass"
import Watermark from "./Setting/Watermark"

import Markup from "./Setting/Markup"
import SpinTitle from "./Setting/SpinTitle"
import Hastag from "./Setting/Hastag"
import Collection from "./Setting/Collection"
import LimitPost from "./Setting/LimitPost"
import { UploadMode } from "../../api/bot_configuration"
import { deleteAccount, getProductAccount, updateAccount } from "../../api/account"
import Checkbox from "../common/Checkbox"
import { emitEvent } from "../../event"
import dateFormater from "../../utils/date"

interface IProps {
    akun: IAccount
    mode: UploadMode
    copyAccount?: IAccount
    update (): void
    onCopy (akun: IAccount): void
}

interface IState {
    item_count: number
    product: number
    check: boolean
    akunChange: Partial<IAccount>
}

class Setting extends React.Component<IProps, IState> {
    state: IState = {
        item_count: 0,
        product: 0,
        check: false,
        akunChange: {}
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

    async getProductCount (): Promise<void> {
        const product = await getProductAccount(this.account)
        this.setState({ product })
    }

    async updateAkun (): Promise<void> {
        await updateAccount(this.account)
        emitEvent('show_msg', {
            msg: 'Success Update Akun..',
        })
    }

    async updateAkunActive (active: boolean): Promise<void> {
        const akun = this.props.akun
        akun.active = active
        await updateAccount(akun)
    }

    resetUploadCount (): void {
        this.setAkunChange({ count_upload: 0 })
        setTimeout(() => this.updateAkun(), 300)
    }

    async deleteAkun (): Promise<void> {
        this.setState({ check: false })
        await deleteAccount(this.account.user)
        emitEvent('show_msg', {
            msg: 'Success Delete Akun..',
        })
    }

    pasteAkun (): void {
        const { copyAccount } = this.props
        const { akunChange } = this.state

        if (copyAccount) {
            const {
                markup,
                limit_upload,
                namespace,
                polatitle,
                hastag
            } = copyAccount
            
            this.setState({
                akunChange: {
                    ...akunChange,
                    markup,
                    hastag,
                    limit_upload,
                    namespace,
                    polatitle
                }
            })
        }
    }

    getLastUp (): string {
        const { last_up } = this.account

        if (last_up) {
            return dateFormater(last_up * 1000, 'DD MNs YY at HH:mm:ss')
        }

        return ''
    }

    render (): JSX.Element {

        const { item_count, product } = this.state
        const { update, onCopy } = this.props

        return <div>
            <hr />
            <div className="row">
				<div className="col-4">
					<div className="custom-control custom-checkbox mr-sm-2 mb-1">
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
					
                    <Watermark
                        value={this.account.water}
                        update={water => this.setAkunChange({ water })}
                    />

                    <Pass
                        value={this.account.pass}
                        update={pass => this.setAkunChange({ pass })}
                    />

                    <Collection
                        value={this.account.namespace}
                        update={namespace => this.setAkunChange({ namespace })}
                    />

                    <br />
                    {item_count > 0 && <span>
                        Belum Diupload : <strong>{item_count}</strong><br/>
                    </span>}

                    {product > 0 && <span>
                        Jumlah Product : <strong>{product}</strong><br/>
                    </span>}
                </div>

                <div className="col-lg-8">
                    <label>POST MARKUP:</label>
					<div className="row">
						<div className="col-lg-6">

                            <Markup
                                value={this.account.markup}
                                update={markup => this.setAkunChange({ markup })}
                            />
                            <SpinTitle
                                value={this.account.polatitle}
                                update={polatitle => this.setAkunChange({ polatitle })}
                            />
                            <Hastag
                                value={this.account.hastag}
                                update={hastag => this.setAkunChange({ hastag })}
                            />
                            
                        </div>

                        <div className="col-lg-6">
                            <LimitPost
                                value={this.account.limit_upload}
                                update={limit_upload => this.setAkunChange({ limit_upload })}
                            />

                            <div className="row mb-3">
                                <div className="col-6">
                                    <div className=" custom-control custom-checkbox pt-1 mr-sm-2">
                                        <Checkbox
                                            className="custom-control-input"
                                            id={'active_' + this.account._id}
                                            checked={this.account.active}
                                            onChange={active => {
                                                this.setAkunChange({ active })
                                                setTimeout(() => this.updateAkunActive(active), 300)
                                            }}
                                        />
                                        <label
                                            className="custom-control-label"
                                            htmlFor={'active_' + this.account._id}
                                        ><strong>Active</strong></label>
                                    </div>
                                </div>

                                <div className="col-6">
                                    {this.account.count_upload > 0 &&
                                        <div className="py-1"> Macet Di : <strong>{this.account.count_upload}</strong></div>
                                    }
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-6">
                                    <div>
                                        Last Up : <strong>{this.getLastUp()}</strong>
                                    </div>
                                </div>
                            </div>

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
                            
                            <br />
                            <div>
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
                                    className="btn btn-danger btn-sm btn-app"
                                    style={{ marginTop: 5 }}
                                    onClick={() => this.resetUploadCount()}
                                >Reset</button>
                            </div>
						</div>
                    </div>

                </div>
                
            </div>

        </div>
    }
}

export default Setting
