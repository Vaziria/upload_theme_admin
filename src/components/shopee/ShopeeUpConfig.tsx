import React from "react"
import { getShopeeGrabSetting, updateShopeeGrabSetting } from "../../api/shopee/grab_api"
import { emitEvent } from "../../event"
import { ShopeeSettingGrab, ShopeeSort } from "../../model/shopee/grab_setting"
import TypedLink from "../../routes/TypedLink"
import Checkbox from "../common/Checkbox"
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

export default class ShopeeUpConfig extends React.Component<unknown, ShopeeSettingGrab> {

    state: ShopeeSettingGrab = {
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
    }

    async componentDidMount(): Promise<void> {
        const setting = await getShopeeGrabSetting()
        this.setState(setting)
    }

    async save(): Promise<void> {

        await updateShopeeGrabSetting(this.state)
        emitEvent('show_msg', {
            msg: `saving grab shopee setting...`,
        })
    }

    render(): JSX.Element {
        return <div className="row">
            <div className="col-12"><label>SETTING SHOPEE :</label></div>
            <div className="col-lg-8 setgrab">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">Harga</span>
                    </div>
                    <InputNumber
                        className="form-control" placeholder="min"
                        value={this.state.price_min}
                        changeVal={val => this.setState({ price_min: val })}
                    ></InputNumber>

                    <InputNumber
                        className="form-control" placeholder="max"
                        value={this.state.price_max}
                        changeVal={val => this.setState({ price_max: val })}
                    ></InputNumber>

                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Order</span>
                            </div>
                            <select className="custom-select custom-select-sm"
                                value={this.state.by}
                                onChange={(e) => this.setState({ by: e.target.value as ShopeeSort })}
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
                                value={this.state.rating_filter}
                                onChange={(e) => this.setState({ rating_filter: parseInt(e.target.value) })}
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
                    value={this.state.locations}
                    onChange={(locations) => this.setState({locations}) }
                ></KotaSelect>

                <div className="form-check">
                    <Checkbox
                        checked={this.state.official_mall}
                        onChange={value => this.setState({ official_mall: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Shopee Mall
                    </label>
                </div>
                <div className="form-check">
                    <Checkbox
                        checked={this.state.shopee_verified}
                        onChange={value => this.setState({ shopee_verified: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Star Seller
                    </label>
                </div>
                <div className="form-check">
                    <Checkbox
                        checked={this.state.shopee24}
                        onChange={value => this.setState({ shopee24: value })}
                        className="form-check-input">
                    </Checkbox>
                    <label className="form-check-label">
                    Shopee24
                    </label>
                </div>
            </div>
            <div className="col-lg-4">
                <ShopeeSearchShipping
                    value={this.state.shipping}
                    change={(shipping) => this.setState({ shipping })}
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
