import React from "react"
import { updateShopeeCategories } from "../api/shopee/category"
import { updateTokopediaCategories } from "../api/tokopedia/category"
import BlacklistTitle from "../components/grab/BlacklistTitle"
import BlacklistWord from "../components/grab/BlacklistWord"
import BlacklistWordAja from "../components/grab/BlacklistWordAja"
import FilterTitle from "../components/grab/FilterTitle"
import CropImageConfig from "../components/uploadconfig/CropImageConfig"
import { GrabInterval } from "../components/uploadconfig/GrabInterval"
import LimitGrab from "../components/uploadconfig/LimitGrab"
import UpThread from "../components/uploadconfig/UpThread"
import { emitEvent } from "../event"

export default class SettingPage extends React.Component {
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
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">CONCURENT REQUEST : </span>
              </div>
              <input type="text" className="form-control" ng-model="data" ng-change="update()" aria-label="" aria-describedby="basic-addon1" />
            </div>
          </div>

          <div className="colss">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">MIN. PENJUALAN :</span>
              </div>
              <input type="text" className="form-control" ng-model="config.penjualan" ng-change="update()" aria-label="" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="colss">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">PROSENTASE : </span>
              </div>
              <input type="text" className="form-control" ng-model="config.prosentase" ng-change="update()" aria-label="" aria-describedby="basic-addon1"/>
            </div>
          </div>
          <div className="colss">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon1">STOCK : </span>
              </div>
              <input type="text" className="form-control" ng-model="config.stock" ng-change="update()" aria-label="" aria-describedby="basic-addon1"/>
            </div>
          </div>

        </div>
      </div>
      
    </div>
    )
  }
}