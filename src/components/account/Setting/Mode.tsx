import React from "react"
import { AccountMode } from "../../../model/Account"

interface IProps {
    value?: AccountMode
    update (mode?: AccountMode): void
}

class  Mode extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Mode : </span>
            </div>
            <select
                value={value}
                className="form-control bot"
                onChange={select => update(select.target.value as AccountMode)}
            >
                {!value && <option value=""></option>}
                <option value="keyword">keyword</option>
                <option value="category">category</option>
                <option value="url">url</option>
            </select>
            
        </div>
    }
}

export default Mode
