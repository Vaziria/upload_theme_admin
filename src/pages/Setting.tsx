import React from "react"
import { getUpMode, updateUpMode } from "../api/legacy_setting"
import { updateShopeeCategories } from "../api/shopee/category"
import { updateTokopediaCategories } from "../api/tokopedia/category"
import MpSelect from "../components/common/MpSelect"
import BlacklistTitle from "../components/grab/BlacklistTitle"
import BlacklistWord from "../components/grab/BlacklistWord"
import BlacklistWordAja from "../components/grab/BlacklistWordAja"
import FilterTitle from "../components/grab/FilterTitle"
import FilterTokpedBadge from "../components/grab/FilterTokpedBadge"
import LastLogin from "../components/grab/LastLogin"
import LastReview from "../components/grab/LastReview"
import ShopeeUpConfig from "../components/shopee/ShopeeUpConfig"
import TokopediaUpConfig from "../components/tokopedia/TokopediaUpConfig"
import ConcurentRequest from "../components/uploadconfig/ConcurentRequest"
import CropImageConfig from "../components/uploadconfig/CropImageConfig"
import { GrabInterval } from "../components/uploadconfig/GrabInterval"
import LimitGrab from "../components/uploadconfig/LimitGrab"
import MinPenjualan from "../components/uploadconfig/MinPenjualan"
import ProsentaseSold from "../components/uploadconfig/ProsentaseSold"
import SettingMarkup from "../components/uploadconfig/SettingMarkup"
import Stock from "../components/uploadconfig/Stock"
import UpThread from "../components/uploadconfig/UpThread"
import { emitEvent } from "../event"
import { MarketList } from "../model/Common"

// komponen belum terlalu terorganisir

interface IState {
  upmode: MarketList
}

export default class SettingPage extends React.Component<unknown, IState> {

  state: IState = {
    upmode: 'shopee'
  }

  async componentDidMount(): Promise<void> {
    const data = await getUpMode()
    this.setState({
      upmode: data.data
    })
  }

  async setMode(upmode: MarketList): Promise<void> {
    this.setState({
      upmode: upmode
    })

    await updateUpMode(upmode)
  }

  async updateShopeeCategories(): Promise<void> {
    await updateShopeeCategories()
    emitEvent("show_msg", {
      msg: "Shopee categories updated",
    })
  }

  async updateTokpedCategories(): Promise<void> {
    await updateTokopediaCategories()
    emitEvent("show_msg", {
      msg: "Tokopedia categories updated",
    })
  }

  render(): JSX.Element {
    return (
      <div className="margin-container">
        <div className="row">
          <div className="col-lg-7">

            <div>
              <br/>
              <BlacklistTitle />
              <FilterTitle />
            </div>

            <div>
              <div>
                <BlacklistWord></BlacklistWord>
              </div>
              
            
              <div>
                <BlacklistWordAja></BlacklistWordAja>
              </div>
            {/* <setting-set></setting-set> */} not implemented yet
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row mb-2">
            <div className="col update-cat"><button className="btn btn-secondary btn-sm" onClick={() => this.updateTokpedCategories()}>UPDATETOPEDCAT</button></div>
            <div className="col update-cat"><button className="btn btn-secondary btn-sm" onClick={() => this.updateShopeeCategories()}>UPDATESHOPEECAT</button></div>
          </div>
          <CropImageConfig></CropImageConfig>
          <GrabInterval></GrabInterval>
          <div className="colss">
            <LimitGrab></LimitGrab>
          </div>
          <div className="colss">
            <UpThread></UpThread>
          </div>

          <div className="colss" ng-controller="grabThreadController">
            <ConcurentRequest></ConcurentRequest>
          </div>

          <div className="colss">
            <MinPenjualan></MinPenjualan>
          </div>
          <div className="colss">
            <ProsentaseSold></ProsentaseSold>
          </div>
          <div className="colss">
            <Stock></Stock>
          </div>
          <hr />

          <FilterTokpedBadge></FilterTokpedBadge>
          
          <p className="warn"><i>*Tokopedia Points Misal Antara Silver 4 - Gold 5 </i></p>
          <p className="warn"><i>*(Auto Save) </i></p>

          <hr />
          <LastLogin></LastLogin>
          <LastReview></LastReview>
          <hr />
          <SettingMarkup></SettingMarkup>
          <hr/>
          <div className="input-group input-group-sm mb-3">
            <div className="input-group-prepend">
              <label className="input-group-text darkorange">Select Mode:</label>
            </div>
            
            <br />
            <MpSelect
              value={this.state.upmode}
              onChange={(upmode) => this.setMode(upmode)}
            ></MpSelect>
            { this.state.upmode === 'shopee' && <ShopeeUpConfig></ShopeeUpConfig> }
            { this.state.upmode === 'tokopedia' && <TokopediaUpConfig></TokopediaUpConfig> }
          </div>
          <hr/>

          <div className="col-lg-8 setgrab">
            <div ng-controller="advancedSettingController">
              <label>ADVANCED SETTING:</label>
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defa3" ng-model="pilihrandom.data" ng-change="updatePilihrandom()"/>
                <label className="form-check-label">
                Product Pilih Random
                </label>
              </div>

            

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defa2" ng-model="rnd_attribute.data.active" ng-change="rnd_attribute.update()"/>
                <label className="form-check-label">
                Random Attribute
                </label>

                <div ng-if="rnd_attribute.data.active">
                  <input className="form-check-input" type="checkbox" value="" id="defa2" ng-model="rnd_attribute.data.force_tidakada" ng-change="rnd_attribute.update()"/>
                  <label className="form-check-label">
                  Jadikan Attribute Tidak Ada
                  </label>
                </div>
              </div>

              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="defa1" ng-model="sameResource.data" ng-change="updateSameResource()"/>
                <label className="form-check-label">
                Akun Pakai Product Sama
                </label>
              </div>
              <div className="row">
              <div className="col-lg-12">
                <div ng-controller="cdImageController">
                  <div className="custom-control custom-checkbox my-1 mr-sm-2">
                    <input type="checkbox" className="form-check-input" value="" id="cloud" ng-model="setting.active" ng-change="update()"/>
                    <label className="form-check-label">
                    Gunakan Cloudinary
                    </label>
                  </div>
                  
                  <div className="form-group" ng-if="setting.active">
                    https://res.cloudinary.com/demo/image/
                    <textarea className="form-control" ng-model="setting.url" rows={10}></textarea>
                    <br/>
                    <button className="btn btn-primary btn-sm" type="submit" ng-click="update(true)">Update</button>
                  </div>
                  <button className="btn btn-dark btn-sm" type="button" ng-click="backupSetting()">Backup Data</button>
                  <button className="btn btn-success btn-sm" type="button" ng-click="tampilRestore()">Show Restore</button>
                  
                  <div ng-controller="restoreController" ng-if="resTampil">
                    <div className="form-check">
                      <input className="form-check-input" type="checkbox" id="all" ng-model="cekAll" ng-change="toggleAll()"/>
                      <label className="form-check-label">
                      all
                      </label>
                    </div>
                    <div className="form-check" ng-repeat="(key, value) in keys">
                      <input className="form-check-input" type="checkbox" id="{{key}}" ng-model="keys[key]"/>
                      <label className="form-check-label">
                      key
                      </label>
                    </div>
                    <button className="btn btn-primary btn-sm" ng-click="restore()">Restore</button>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>

        </div>
        
      </div>
    </div>
    )
  }
}