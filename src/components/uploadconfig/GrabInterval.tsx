import React from "react"
import { getUpInterval, updateUpInterval } from "../../api/legacy_setting"
import { InputNumber } from "../common/InputNumber"

interface IState {
    uptmax: number
    uptmin: number
}

export class GrabInterval extends React.Component<unknown, IState> {
    state: IState = {
        uptmax: 0,
        uptmin: 0,
    }

    async componentDidMount(): Promise<void> {
        const data = await getUpInterval()
        this.setState({
            uptmax: parseInt(data?.uptmax || "0"),
            uptmin: parseInt(data?.uptmin || "0"),
        })
    }

    async save(data: Partial<IState>): Promise<void> {
        const payload: { uptmin: string, uptmax: string } = {
            uptmax: data.uptmax?.toString() || this.state.uptmax.toString(),
            uptmin: data.uptmin?.toString() || this.state.uptmin.toString(),
        }

        this.setState({
            uptmax: parseInt(payload.uptmax),
            uptmin: parseInt(payload.uptmin),
        })

        await updateUpInterval(payload)
    }

    render(): JSX.Element {
        return <div className="colss">
            <div className="input-group input-group-sm" ng-controller="grabIntervallController">
                <div className="input-group-prepend">
                    <span className="input-group-text">TIME INTERVAL : </span>
                </div>

                <InputNumber
                    value={this.state.uptmin}
                    changeVal={(val) => this.save({ uptmin: val })}
                    aria-label="min" className="form-control form-control"

                ></InputNumber>

                <InputNumber
                    value={this.state.uptmax}
                    changeVal={(val) => this.save({ uptmax: val })}
                    aria-label="max" className="form-control form-control"

                ></InputNumber>
            </div>
        </div>
    }
}