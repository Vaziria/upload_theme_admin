import React from "react"
import { getCloudinary, updateCloudinary } from "../../api/legacy_setting"
import { emitEvent } from "../../event"
import Checkbox from "../common/Checkbox"

interface IState {
    active: boolean
    url: string
}

export default class Cloudinary extends React.Component<unknown, IState> {
    state: IState = {
        active: false,
        url: ""
    }
    async componentDidMount(): Promise<void> {
        const data = await getCloudinary()
        this.setState(data.data)
    }

    async save(data: Partial<IState>): Promise<void> {
        const payload = { ...this.state, ...data }
        await updateCloudinary(payload)
        emitEvent("show_msg", {
            msg: "Update Cloudinary berhasil",
        })
    }
    
    render(): JSX.Element {
        return <>
            <div className="custom-control custom-checkbox my-1 mr-sm-2">
                <Checkbox
                    className="form-check-input"
                    checked={this.state.active}
                    onChange={(e) => {
                        this.setState({ active: e })
                        this.save({ active: e })
                    }}
                ></Checkbox>
                <label className="form-check-label">
                    Gunakan Cloudinary
                </label>
            </div>
            { this.state.active && 
            
            <div className="form-group">
                https://res.cloudinary.com/demo/image/
                <textarea 
                    className="form-control" 
                    rows={10}
                    value={this.state.url}
                    onChange={(e) => this.setState({url: e.target.value}) }    
                ></textarea>
                <br/>
                <button className="btn btn-primary btn-sm" type="submit" onClick={() => this.save({})}>Update</button>
            </div>
            
            }
            
        </>
    }
}