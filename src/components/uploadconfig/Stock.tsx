import React from "react"
import { getGrabFilter, updateGrabFilter } from "../../api/legacy_setting"
import { InputNumber } from "../common/InputNumber"

interface IState {
    data: number
}

export default class Stock extends React.Component<unknown, IState> {

    state: IState = {
        data: 0
    }

    async componentDidMount(): Promise<void> {
        const data = await getGrabFilter()
        this.setState({ data: data.data.stock })
    }

    async save(newval: number): Promise<void> {
        this.setState({ data: newval })
        await updateGrabFilter({ stock: newval })
    }

    render(): JSX.Element {
        return <div className="input-group input-group-sm">
            <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">STOCK : </span>
            </div>
            <InputNumber
                className="form-control"
                value={this.state.data}
                changeVal={(val: number) => this.save(val)}
            ></InputNumber>
        </div>
    }
}