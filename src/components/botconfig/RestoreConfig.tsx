import React from "react"
import { restoreSetting } from "../../api/legacy_setting"
import { emitEvent } from "../../event"
import Checkbox from "../common/Checkbox"

interface IState {
    tampil: boolean
    selected: string[]
}

const listData: string[] = [
    'markups',
    'dataspin',
    'upInterval',
    'upThread',
    'blacklistTitle',
    'userSameResource',
    'concurentRequest',
    'limitGrab',
    'cloudinary',
    'cropSetting',
    'settingSpin',
    'blacklistWordAja',
    'settingGrab',
    'blacklistWord',
    'hastags',
    'shopeeGrabSetting',
    'filterTitle'
]

export default class RestoreConfig extends React.Component<unknown, IState> {
    state: IState = {
        tampil: false,
        selected: []
    }

    async restore(): Promise<void> {
        await restoreSetting(this.state.selected)
        emitEvent('show_msg', {
            msg: 'Restore setting success',
        })
    }

    render(): JSX.Element {
        return <>
            <button 
                className="btn btn-success btn-sm" 
                type="button"
                onClick={() => this.setState({ tampil: !this.state.tampil })}    
            >Show Restore</button>

            { this.state.tampil &&
                <div>
                    <div className="form-check">
                        <Checkbox
                            className="form-check-input"
                            checked={this.state.selected.length === listData.length}
                            onChange={(val) => {
                                if(val){
                                    this.setState({ selected: listData })
                                } else {
                                    this.setState({ selected: [] })
                                }
                            }}
                        ></Checkbox>
                        <label className="form-check-label">
                        all
                        </label>
                    </div>
                    {
                        listData.map((val, index) => {
                            return <div key={index} className="form-check">
                                <input className="form-check-input" type="checkbox" id="{{key}}" ng-model="keys[key]"/>

                                <Checkbox
                                    className="form-check-input"
                                    checked={this.state.selected.some(valc => valc === val)}
                                    onChange={(cek) => {
                                        if(cek){
                                            this.setState({ selected: [...this.state.selected, val] })
                                        } else {
                                            this.setState({ selected: this.state.selected.filter(valc => valc !== val) })
                                        }
                                    }}
                                ></Checkbox>

                                <label className="form-check-label">
                                    {val}
                                </label>
                            </div>
                        })
                    }
                    
                    <button className="btn btn-primary btn-sm" onClick={() => this.restore()}>Restore</button>
                </div>
                
            }
        </>
    }
}