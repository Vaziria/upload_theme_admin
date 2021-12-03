import React from "react"
import { IAccount } from "../../model/Account"
import Mode from "./Setting/Mode"
import Pass from "./Setting/Pass"
import Watermark from "./Setting/Watermark"

import TokopediaCategorySelect from '../tokopedia/TokopediaCategorySelect'
import ShopeeCategSelect from '../shopee/ShopeeCategSelect'
import PriceMin from "./Setting/PriceMin"
import PriceMax from "./Setting/PriceMax"
import Markup from "./Setting/Markup"
import SpinTitle from "./Setting/SpinTitle"
import Hashtag from "./Setting/Hashtag"
import Collection from "./Setting/Collection"
import LimitPost from "./Setting/LimitPost"

interface IProps {
    akun: IAccount
}

class Setting extends React.Component<IProps> {
    render (): JSX.Element {
        const account = this.props.akun

        return <div>
            <hr />
            <div className="row">
				<div className="col-3">
					<div className="custom-control custom-checkbox my-1 mr-sm-2">
					<input
                        type="checkbox"
                        className="custom-control-input"
                        id={account._id}
                    />
					<label
                        className="custom-control-label"
                        htmlFor={account._id}
                    > User : <strong>{account.user}</strong></label>
					</div>
					<br />
					
                    <Watermark />
                    <Pass />
                    <Mode />

                    <br />
					{/* <span ng-if="item.item_count">Belum Diupload : <strong>{{item.item_count }}</strong><br></span> */}
					{/* <span ng-if="item.product">Jumlah Product : <strong>{{item.product }}</strong><br></span> */}
					<br />
					<button
                        className="btn btn-danger btn-sm btn-app"
                        type="button"
                        ng-click="deleteAkun(item['user'])"
                    >Delete</button>
					
                    <button
                        className="btn btn-info btn-sm btn-app"
                        type="button"
                        ng-click="updateAkun(item)"
                        data-toggle="modal"
                        data-target="#myModal"
                    >Update</button>
					
                    <button
                        className="btn btn-secondary btn-sm btn-app"
                        type="button"
                        ng-click="refreshProduct(item)"
                        style={{ marginTop: 5 }}
                    >Refresh</button>

                </div>

                <div className="col-lg-6">
					<div className="row">
						<div className="col-lg-6">
							<div className="">
								<label>TOKOPEDIA:</label>
                            </div>

                            <TokopediaCategorySelect
                                value={account.tokped_categ}
                                selected={() => undefined}
                            />

                            <PriceMin />

                            <div className="row">
								<div className="col">
									<style>{".esti:hover{color:green;}"}</style>
									<div ng-click="etProduct.get(item)" className="esti"
                                        style={{
                                            marginTop: 25,
                                            fontWeight: 'bold',
                                            cursor: 'pointer'
                                        }}>
                                        Estimate Produk :
                                        {/* &nbsp;&nbsp; {{ etProduct.data[item.tokped_categ.join()] }} */}
                                    </div>
								</div>
							</div>
                        </div>

                        <div className="col-lg-6">
                            <div className="">
                                <label>SHOPEE:</label>
                                <ShopeeCategSelect
                                    value={account.shopee_categ}
                                    selected={() => undefined}
                                />
                                <PriceMax />
								
                            </div>
                        </div>
                    </div>
                </div>

                <div className="col-lg-3">
					<div className="row">
						<label>POST MARKUP:</label>
						<div className="col-lg-12">

                            <Markup />
                            <SpinTitle />
                            <Hashtag />
                            <Collection />
                            <LimitPost />
                            
                        </div>
                        <div className="col-lg-12">
							<div className="col-lg-6">
								<div className="custom-control custom-checkbox my-1 mr-sm-2">
									<input
                                        type="checkbox"
                                        className="custom-control-input"
                                        id={'active_' + account._id}
                                        ng-model="item.active"
                                        ng-change="updateAkunSilent(item)"
                                    />
									<label className="custom-control-label" htmlFor={'active_' + account._id}><strong>Active</strong></label>
								</div>
							</div>
						</div>
                    </div>

                    <div style={{ marginTop: 10 }}></div>
					<button className="btn btn-success btn-sm btn-app" type="button" ng-click="copy(item)">Copy</button>
					<button className="btn btn-info btn-sm btn-app" type="button" ng-click="paste(item)">Paste</button>
					<button className="btn btn-warning btn-sm btn-app" type="button" style={{ marginTop: 5 }} ng-click="copyMapCateg(item)">Save Map</button>
                    {/* margin-right: 20px;margin-bottom:10px;margin-top:10px; */}
					<div
                        ng-if="item.count_upload > 0"
                        style={{ marginRight: 20, marginBottom: 10, marginTop: 10 }}
                    /> Macet Di : <strong>{'{ item.count_upload }'}</strong><div>
					<button className="btn btn-danger btn-sm btn-app" style={{ marginTop: 5 }} ng-click="resetCount(item)">Reset</button>
					<div style={{ marginTop: 10 }}/> Last Up : <strong>{"{ item.last_up.toFixed(3).toString().replace('.', '') | date:'medium'}"}</strong></div>
                </div>
                
            </div>
        </div>
    }
}

export default Setting
