import React from "react"
import { getLastLogin, LastLoginData, updateLastLogin } from "../../api/legacy_setting"
import Checkbox from "../common/Checkbox"
import { InputNumber } from "../common/InputNumber"

export default class LastLogin extends React.Component<unknown, LastLoginData> {
    state: LastLoginData = {
        active: false,
        days: 0
    }

    async componentDidMount(): Promise<void> {
        const data = await getLastLogin()
        this.setState(data.data)
    }

    async save(data: Partial<LastLoginData>): Promise<void> {
        const payload = this.state

        this.setState({
            ...payload,
            ...data
        })
        
        await updateLastLogin({
            ...payload,
            ...data
        })

    }



    render(): JSX.Element {
        return <div>
        <div className="form-check">
            <Checkbox
                checked={this.state.active}
                onChange={value => this.save({ active: value })}
                className="form-check-input"></Checkbox>

          <label className="form-check-label">
          Last Login Days ( Tokopedia )
          </label>
        </div>
        { this.state.active && 
            <div className="colss form-check">
                <div className="input-group input-group-sm mb-3">
                <div className="input-group-prepend">
                    <span className="input-group-text" id="inputGroup-sizing-sm">Days : </span>
                </div>

                <InputNumber
                    className="form-control"
                    aria-describedby="inputGroup-sizing-sm"
                    value={this.state.days}

                    changeVal={value => this.save({ days: value })}
                ></InputNumber>
                </div>
            </div>
        
        }
      </div>
    }
}