import React from "react"
import { getTokopediaSettingGrab, TokopediaSettingGrab, updateTokopediaSettingGrab } from "../../api/tokopedia/grab_api"
import { emitEvent } from "../../event"
import Checkbox from "../common/Checkbox"
import { InputNumber } from "../common/InputNumber"
import KotaSelect from "./KotaSelect"
import TokpedShiping from "./TokpedShipping"

export default class TokopediaUpConfig extends React.Component<unknown, TokopediaSettingGrab> {
    state: TokopediaSettingGrab = {
        pmin: 0,
        pmax: 0,
        ob: '8',
        rt: '0,1,2,3,4,5',
        condition: "1",
        fcity: [],
        goldmerchant: false,
        official: false,
        shipping: [],
        preorder: false,
    }
    async componentDidMount(): Promise<void> {
        const data = await getTokopediaSettingGrab()
        if(data.errcode === 0){
            this.setState(data.data.data)
        }
    }

    async save(): Promise<void> {
        await updateTokopediaSettingGrab(this.state)
        emitEvent("show_msg", {
            msg: "Setting Tokopedia Grab berhasil disimpan",
        })
    }

    render(): JSX.Element {
        return <div className="row">
            <div className="col-12"><label>SETTING TOKOPEDIA : </label></div>
            <div className="col-lg-8 setgrab">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Harga</span>
                    </div>
                    <InputNumber
                        className="form-control" 
                        placeholder="min"

                        value={this.state.pmin}
                        changeVal={(e) => this.setState({ pmin: e })}
                    ></InputNumber>

                    <InputNumber
                        className="form-control" 
                        placeholder="max"
                        
                        value={this.state.pmax}
                        changeVal={(e) => this.setState({ pmax: e })}
                    ></InputNumber>
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Order</span>
                            </div>
                            <select
                                className="custom-select custom-select-sm"
                                value={this.state.ob}
                                onChange={(e) => this.setState({ ob: e.target.value })}
                            >
                                <option value="23">Paling Sesuai</option>
                                <option value="5">Ulasan</option>
                                <option value="8">Penjualan</option>
                                <option value="3">Termurah</option>
                                <option value="4">Termahal</option>
                                <option value="9">Terbaru</option>
                            </select>
                        </div>
                    </div>
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Rating</span>
                            </div>
                            <select
                                className="custom-select custom-select-sm"
                                value={this.state.rt}
                                onChange={(e) => this.setState({ rt: e.target.value })}    
                            >
                                <option value="0,1,2,3,4,5">0</option>
                                <option value="1,2,3,4,5">1</option>
                                <option value="2,3,4,5">2</option>
                                <option value="3,4,5">3</option>
                                <option value="4,5">4</option>
                                <option value="5">5</option>
                            </select>
                        </div>
                    </div>
                </div>
                <KotaSelect
                    value={this.state.fcity}
                    onChange={(e) => this.setState({ fcity: e })}
                ></KotaSelect>
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Kondisi</span>
                            </div>
                            <select
                                className="custom-select custom-select-sm"
                                value={this.state.condition}
                                onChange={(e) => this.setState({ condition: e.target.value })}
                            >
                                <option value="1">Baru</option>
                                <option value="2">Bekas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <Checkbox
                        className="form-check-input"
                        checked={this.state.goldmerchant}
                        onChange={(e) => this.setState({ goldmerchant: e })}
                    ></Checkbox>
                    
                    <label className="form-check-label">
                    Gold Merchant
                    </label>
                </div>
                
                <div className="form-check">
                    <Checkbox
                        className="form-check-input"
                        checked={this.state.official}
                        onChange={(e) => this.setState({ official: e })}
                    ></Checkbox>
                    
                    <label className="form-check-label">
                    Official
                    </label>
                </div>
                <div className="form-check">
                    <Checkbox
                        className="form-check-input"
                        checked={this.state.preorder}
                        onChange={(e) => this.setState({ preorder: e })}
                    ></Checkbox>
                    <label className="form-check-label">
                    Preorder
                    </label>
                </div>
            </div>
            <TokpedShiping
                value={this.state.shipping}
                onChange={(e) => this.setState({ shipping: e })}
            ></TokpedShiping>
            <div className="col-12"><button className="btn btn-success btn-sm" onClick={() => this.save()}>Save Setting Tokopedia</button></div>
        </div>
    }
}