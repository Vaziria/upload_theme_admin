import React from 'react'
import { SortType } from '../../../api/account'

interface IProps {
    value: SortType
    update (sort: SortType): void
}

class SortTypeSetting extends React.Component<IProps> {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Sort : </span>
        </div>
        <select
            className="form-control"
            value={this.props.value}
            onChange={select => this.props.update(select.target.value as SortType)}
        >
            <option value="">Default</option>
            <option value="last_up">Last Upload</option>
        </select>
    </div>
    }
}

export default SortTypeSetting
