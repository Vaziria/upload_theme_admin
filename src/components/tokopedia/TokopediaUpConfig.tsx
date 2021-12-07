import React from "react"

export default class TokopediaUpConfig extends React.Component {
    render(): JSX.Element {
        return <div className="row">
            <div className="col-12"><label>SETTING TOKOPEDIA :</label></div>
            <div className="col-lg-8 setgrab">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                    <span className="input-group-text">Harga</span>
                    </div>
                    <input type="text" className="form-control" placeholder="min" ng-model="data.pmin" />
                    <input type="text" className="form-control" placeholder="max" ng-model="data.pmax" />
                </div>
                
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Order</span>
                            </div>
                            <select className="custom-select custom-select-sm" ng-model="data.ob">
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
                            <select className="custom-select custom-select-sm" ng-model="data.rt">
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
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <label className="input-group-text kota">Kota</label>
                    </div>
                    <input list="fcit" className="form-control form-control-sm" ng-model="temp" />
                    <datalist id="fcit">
                        <option ng-repeat="item in fcity | limitTo:580">city</option>
                    </datalist>
                    <div className="input-group-append">
                        <button className="btn btn-primary inp-group" type="button" ng-click="addFcity(temp)">Add</button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <ul>
                            <li ng-repeat="citi in data.fcity"><span>city</span>    
                            <button type="button" className="close" ng-click="data.fcity.pop(temp)">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <div className="input-group mb-3 input-group-sm">
                            <div className="input-group-prepend">
                                <span className="input-group-text">Kondisi</span>
                            </div>
                            <select className="custom-select custom-select-sm" ng-model="data.condition">
                                <option value="1">Baru</option>
                                <option value="2">Bekas</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defa" ng-model="data.goldmerchant" />
                    <label className="form-check-label">
                    Gold Merchant
                    </label>
                </div>
                
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defa" ng-model="data.official" />
                    <label className="form-check-label">
                    Official
                    </label>
                </div>
                <div className="form-check">
                    <input className="form-check-input" type="checkbox" value="" id="defa" ng-model="data.preorder" />
                    <label className="form-check-label">
                    Preorder
                    </label>
                </div>
            </div>
            <div className="col-lg-4">
                <input className="form-check-input" type="checkbox" value="10,12,13" ng-model="data.shipping[0]" ng-true-value="[10,12,13]" ng-false-value="undefined"/>  Instant Courier<br/>
                <input className="form-check-input" type="checkbox" value="1" ng-model="data.shipping[1]" ng-true-value="1" ng-false-value="undefined"/>  JNE<br/>
                <input className="form-check-input" type="checkbox" value="4" ng-model="data.shipping[2]" ng-true-value="4" ng-false-value="undefined"/>  Pos Indonesia<br/>
                <input className="form-check-input" type="checkbox" value="16" ng-model="data.shipping[3]" ng-true-value="16" ng-false-value="undefined"/>  REX<br/>
                <input className="form-check-input" type="checkbox" value="14" ng-model="data.shipping[4]" ng-true-value="14" ng-false-value="undefined"/>  J&amp;T<br/>
                <input className="form-check-input" type="checkbox" value="6" ng-model="data.shipping[5]" ng-true-value="6" ng-false-value="undefined"/>  Wahana<br/>
                <input className="form-check-input" type="checkbox" value="11" ng-model="data.shipping[6]" ng-true-value="11" ng-false-value="undefined"/>  SiCepat<br/>
                <input className="form-check-input" type="checkbox" value="2" ng-model="data.shipping[7]" ng-true-value="2" ng-false-value="undefined"/>  TIKI<br/>
                <input className="form-check-input" type="checkbox" value="9" ng-model="data.shipping[8]" ng-true-value="9" ng-false-value="undefined"/>  First<br/>
                <input className="form-check-input" type="checkbox" value="10" ng-model="data.shipping[9]" ng-true-value="10" ng-false-value="undefined"/>  Go-Send<br/>
                <input className="form-check-input" type="checkbox" value="12" ng-model="data.shipping[10]" ng-true-value="12" ng-false-value="undefined"/>  Ninja Express<br/>
                <input className="form-check-input" type="checkbox" value="13" ng-model="data.shipping[11]" ng-true-value="13" ng-false-value="undefined"/>  Grab<br/>
            </div>
            <div className="col-12"><button className="btn btn-success btn-sm" ng-click="save()">Save Setting Tokopedia</button></div>
        </div>
    }
}