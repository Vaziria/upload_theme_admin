import React from "react"
import { getUpThread, updateUpThread } from "../../api/legacy_setting"
import { InputNumber } from "../common/InputNumber"

interface IState {
    data: number
}

export default class UpThread extends React.Component<unknown, IState> {
    state: IState = {
        data: 0
    }

    async componentDidMount(): Promise<void> {
        const data = await getUpThread()
        this.setState({ data: data.data })
    }

    async save(newval: number): Promise<void> {
        this.setState({ data: newval })
        await updateUpThread(newval)
    }

    render(): JSX.Element {
        return <div className="input-group input-group-sm">
            <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon1">UPLOAD THREAD : </span>
            </div>

            <InputNumber
                value={this.state.data}
                changeVal={(val) => this.save(val)}
                className="form-control"
                aria-label="" aria-describedby="basic-addon1"

            ></InputNumber>
        </div>
    }
}