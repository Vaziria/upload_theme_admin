// masih abstrak dan bakalan dibuwang dan harus lebih terorgansir
import React from "react"
import { getV3Setting, updateV3Setting, V3Setting } from "../../api/legacy_setting"
import { emitEvent } from "../../event"
import Checkbox from "../common/Checkbox"

export class SettingSet extends React.Component<unknown, V3Setting> {
    state: V3Setting = {
        _id: 'default',
        name: 'default',

        use_price_discount: false,
        blacklist_username: {
            active: false,
            shopee: {  
                filename: '',
            },
            tokopedia: {
                filename: '',
            }
        }
    }

    setBlacklist(data: Partial<V3Setting['blacklist_username']>): void {
        this.setState({
            blacklist_username: {
                ...this.state.blacklist_username,
                ...data
            }
        })
    }
    
    async componentDidMount(): Promise<void> {
        const data = await getV3Setting()
        this.setState(data)
    }

    async save(): Promise<void> {
        await updateV3Setting(this.state)
        emitEvent('show_msg', {
            msg: 'Setting saved...',
        })
    }


    render(): JSX.Element {

        const setting = this.state.blacklist_username

        return <div className="">
            <div className="form-group">
                <Checkbox
                    checked={this.state.use_price_discount}
                    onChange={(e) => {
                        this.setState({
                            use_price_discount: e
                        })
                        this.save()
                    }}
                ></Checkbox> Use Price Discount 
            </div>
            <div className="form-group">
                <label style={{marginTop:'10px'}}><strong>BLACKLIST TOKO</strong></label>
                <br/><Checkbox
                    checked={setting.active}
                    onChange={(e) => {
                        this.setBlacklist({
                            active: e
                        })
                        this.save()
                    }}
                ></Checkbox> Active

                { setting.active &&
                    <div className="row">
                        <div className="col-md-6">
                            <b>Shopee:</b>
                            <input
                                type="text" 
                                aria-label="fnameblack" 
                                className="form-control form-control" 
                                placeholder="list_username.txt"
                                value={setting.shopee.filename}
                                onChange={(e) => this.setBlacklist({shopee: {filename: e.target.value}})}
                            />
                        </div>

                        <div className="col-md-6">
                            <b>Tokopedia:</b>
                            <input
                                type="text" 
                                aria-label="fnameblack" 
                                className="form-control form-control" 
                                placeholder="list_username.txt"
                                value={setting.tokopedia.filename}
                                onChange={(e) => this.setBlacklist({tokopedia: {filename: e.target.value}})}
                            />
                        </div>
                    </div>
                }

                
                <br/>
                <button className="btn btn-primary btn-sm" type="submit" style={{
                    marginTop: '10px',
                    width: '100px'
                }} onClick={() => this.save()}>SAVE</button>
            </div>
        </div>
    }
}