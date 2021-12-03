import React from 'react'
interface IProps {
    value: number
    update (sort: number): void
}

class SortOrderSetting extends React.Component<IProps> {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Sort: </span>
        </div>
        <select
            value={this.props.value}
            className="form-control"
            onChange={check => this.props.update(parseInt(check.target.value))}
        >
            <option value={-1}>Terbaru</option>
            <option value={1}>Terlama</option>
        </select>
    </div>
    }
}

export default SortOrderSetting
