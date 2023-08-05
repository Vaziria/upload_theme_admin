import React from "react"
import { legacyCropGet, legacyCropUpdate } from "../../api/legacy_setting"
import { InputNumber } from '../common/InputNumber'

interface IState {
    data: [string, string]
}

export default class CropImageConfig extends React.Component<unknown, IState> {
    state: IState = {
        data: ["0", "0"],
    }
    async componentDidMount(): Promise<void> {
        await this.get()
    }

    async get(): Promise<void> {
        const data = await legacyCropGet()
        if (data.errcode === 0) {
            this.setState({ data: data.data })
        }
        
    }

    async save(index: number, dat: number): Promise<void> {
        const { data } = this.state
        data[index] = dat.toString()

        this.setState({ data })
        await legacyCropUpdate({
            name: 'cropSetting',
            data: data
        })
    }

    render(): JSX.Element {
        const cropdata = this.state.data.map(item => parseInt(item))

        return <div className="colss">
        <div className="input-group input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text">CROP IMAGE % : </span>
            </div>

            <InputNumber
                value={cropdata[0]}
                changeVal={(val) => this.save(0, val)}
                aria-label="min" className="form-control form-control"

            ></InputNumber>

            <InputNumber
                value={cropdata[1]}
                changeVal={(val) => this.save(1, val)}
                aria-label="max" className="form-control form-control"

            ></InputNumber>
            </div>
        </div>
    }
}