import React from "react"
import { getShopeeFilterGrabber, getShopeeGrabSetting, updateShopeeFilterGrabber, updateShopeeGrabSetting } from "../../api/shopee/grab_api"
import { emitEvent } from "../../event"
import { ShopeeFilterGrab, ShopeeSettingGrab, ShopeeSort } from "../../model/shopee/grab_setting"
import TypedLink from "../../routes/TypedLink"
import Checkbox from "../common/Checkbox"
import EPDateSelect from "../common/EPDateSelect"
import { InputNumber } from "../common/InputNumber"
import KotaSelect from "./KotaSelect"
import ShopeeSearchShipping from "./SearchShipping"

interface OrdItem {
    key: ShopeeSort
    name: string
}

const listOrdItem: OrdItem[] = [
    { key: 'ctime', name: 'Waktu' },
    { key: 'pop', name: 'terkait' },
    { key: 'sales', name: 'penjualan' },
    { key: 'price', name: 'harga' }
]

interface IState {
    settingGrab: ShopeeSettingGrab
    settingFilter: ShopeeFilterGrab
}

export default class ShopeeUpConfig extends React.Component<unknown, IState> {

    state: IState = {
        settingGrab: {
            by: 'sales',
            locations: [],
            official_mall: false,
            price_max: 0,
            price_min: 0,
            rating_filter: 0,
            shipping: [],
            shopee24: false,
            shopee_verified: false,
            name: "shopeeGrabSetting"
        },
        settingFilter: {
            product_created: {
                active: false,
                max: Date.now() / 1000,
                min: Date.now() / 1000
            }
        }
    } 

    async componentDidMount(): Promise<void> {
        const setting = await getShopeeGrabSetting()
        const settingfilter = await getShopeeFilterGrabber()

        this.setState({
            settingGrab: setting,
            settingFilter: settingfilter
        })
    }

    async save(): Promise<void> {

        await updateShopeeGrabSetting(this.state.settingGrab)
        await updateShopeeFilterGrabber(this.state.settingFilter)
        emitEvent('show_msg', {
            msg: `saving grab shopee setting...`,
        })
    }

    setSettingGrab(data: Partial<ShopeeSettingGrab>): void {
        this.setState({
            settingGrab: {
                ...this.state.settingGrab,
                ...data
            }
        })
    }

    setProductFilter(data: Partial<ShopeeFilterGrab['product_created']>): void {
        this.setState({
            settingFilter: {
                product_created: {
                    ...this.state.settingFilter.product_created,
                    ...data,
                }
            }
        })
    }

    render(): JSX.Element {
        const {settingGrab, settingFilter} = this.state

        return <div className="row">
            <div className="col-12"><label>SETTING SHOPEE :</label></div>
            <div className="col-12">
                <Checkbox
                    checked={settingFilter.product_created.active}
                    onChange={(val) => this.setProductFilter({ active: val })}
                ></Checkbox> active product created<br/>
            </div>
            {   settingFilter.product_created.active &&
                <div className="col-12 input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">product created</span>
                    </div>
                    <EPDateSelect
                        className="form-control form-control-sm"
                        value={settingFilter.product_created.min}
                        onChange={(val) => this.setProductFilter({ min: val })}
                    ></EPDateSelect>
                    <EPDateSelect
                        className="form-control form-control-sm"
                        value={settingFilter.product_created.max}
                        onChange={(val) => this.setProductFilter({ max: val })}
                    ></EPDateSelect>
                    
                </div>
            }
            
            <div className="col-lg-8 setgrab">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Harga</span>
                    </div>
                    <InputNumber
                        className="form-control" placeholder="min"
                        value={settingGrab.price_min}
                        changeVal={val => this.setSettingGrab({ price_min: val })}
                    ></InputNumber>

                    <InputNumber
                        className="form-control" placeholder="max"
                        value={settingGrab.price_max}
                        changeVal={val => this.setSettingGrab({ price_max: val })}
                    ></InputNumber>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Order</span>
                            </div>
                            <select className="custom-select custom-select-sm"
                                value={settingGrab.by}
                                onChange={(e) => this.setSettingGrab({ by: e.target.value as ShopeeSort })}
                            >
                                {
                                    listOrdItem.map(item => <option key={item.key} value={item.key}>{item.name}</option>)
                                }
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rating</span>
                            </div>
                            <select className="custom-select custom-select-sm"
                                value={settingGrab.rating_filter}
                                onChange={(e) => this.setSettingGrab({ rating_filter: parseInt(e.target.value) })}
                            >
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>

                <KotaSelect
                    value={settingGrab.locations}
                    onChange={(locations) => this.setSettingGrab({locations}) }
                ></KotaSelect>

                

                <div className="form-check">
                    <Checkbox
                        checked={settingGrab.official_mall}
                        onChange={value => this.setSettingGrab({ official_mall: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Shopee Mall
                    </label>
                </div>
                <div className="form-check">
                    <Checkbox
                        checked={settingGrab.shopee_verified}
                        onChange={value => this.setSettingGrab({ shopee_verified: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Star Seller
                    </label>
                </div>
                <div className="form-check">
                    <Checkbox
                        checked={settingGrab.shopee24}
                        onChange={value => this.setSettingGrab({ shopee24: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Shopee24
                    </label>
                </div>
            </div>
            <div className="col-lg-4">
                <ShopeeSearchShipping
                    value={settingGrab.shipping}
                    change={(shipping) => this.setSettingGrab({ shipping })}
                ></ShopeeSearchShipping>
            </div>
            <div className="col-12">
            <TypedLink to='/shopee/berat' params={{}}><button className="btn btn-info btn-sm">Hitung Berat</button></TypedLink>
            </div>
            <div className="col-12">
                <button className="btn btn-warning btn-sm" onClick={() => this.save()}>Save Setting Shopee</button>
            </div>
        </div>

    }
}
