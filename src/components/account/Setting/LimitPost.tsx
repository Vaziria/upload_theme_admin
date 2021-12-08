import React from "react"
import { InputNumber } from "../../common/InputNumber"

interface IProps {
    value: number
    update (limit_upload: number): void
}

class LimitPost extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Limit Post: </span>
            </div>
            <InputNumber
                value={value}
                changeVal={limit_upload => update(limit_upload)}
                className="form-control form-control-sm"
            />
        </div>
    }
}

export default LimitPost
