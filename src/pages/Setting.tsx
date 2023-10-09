import React from "react"
import { getUpMode, runBackup, updateUpMode } from "../api/legacy_setting"
import { updateShopeeCategories } from "../api/shopee/category"
import { updateTokopediaCategories } from "../api/tokopedia/category"
import AdvancedSetting from "../components/botconfig/AdvancedSetting"
import Cloudinary from "../components/botconfig/Cloudirary"
import RestoreConfig from "../components/botconfig/RestoreConfig"
import { SettingSet } from "../components/botconfig/SettingSet"
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

  async backup(): Promise<void> {
    await runBackup()
    emitEvent("show_msg", {
      msg: "Backup started",
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
              <SettingSet></SettingSet>
          </div>
        </div>
        <div className="col-lg-5">
          <div className="row mb-2">
            {/* <div className="col update-cat"><button className="btn btn-secondary btn-sm" onClick={() => this.updateTokpedCategories()}>UPDATETOPEDCAT</button></div> */}
            <div className="col-6 update-cat"><button className="btn btn-secondary btn-sm" onClick={() => this.updateShopeeCategories()}>UPDATESHOPEECAT</button></div>
          </div>
          <CropImageConfig></CropImageConfig>
          <GrabInterval></GrabInterval>
          <div className="colss">
            <LimitGrab></LimitGrab>
          </div>
          <div className="colss">
            <UpThread></UpThread>
          </div>

          <div className="colss">
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
            { this.state.upmode === 'tokopedia' && <TokopediaUpConfig />}
          </div>
          <hr/>

          <div className="col-lg-8 setgrab">
            <div>
              <AdvancedSetting></AdvancedSetting>
              <div className="row">
              <div className="col-lg-12">
                <div>
                  <Cloudinary></Cloudinary>
                  <button className="btn btn-dark btn-sm" type="button" onClick={() => this.backup()}>Backup Data</button>
                  <RestoreConfig></RestoreConfig>
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