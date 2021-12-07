import React from "react"
import { getLegacyConfig, updateLegacyConfig } from "../../api/legacy_setting"
import { InputNumber } from "../common/InputNumber"

interface IState {
    data: number
}

export default class ConcurentRequest extends React.Component<unknown, IState> {

    state: IState = {
        data: 0
    }

    async componentDidMount(): Promise<void> {
        const data = await getLegacyConfig('concurentRequest')
        this.setState({ data: data.data })
    }

    async save(newval: number): Promise<void> {
        this.setState({ data: newval })
        await updateLegacyConfig('concurentRequest', newval)
    }

    render(): JSX.Element {
        return <div className="input-group input-group-sm">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">CONCURENT REQUEST : </span>
        </div>
        <InputNumber
            className="form-control"
            value={this.state.data}
            changeVal={(val: number) => this.save(val)}
        ></InputNumber>
      </div>
    }
}