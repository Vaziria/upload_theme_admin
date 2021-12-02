import React from 'react'

type Active = 'all' | boolean

interface IProps {
    value: Active
    update (active: Active): void
}

class SelectActive extends React.Component<IProps> {
    
    update (activeString: string): void {
        let active: Active = 'all'

        if (activeString !== 'all') {
            active = JSON.parse(activeString)
        }

        this.props.update(active)
    }

    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Select : </span>
            </div>
            <select
                value={this.props.value + ''}
                className="form-control"
                onChange={select => this.update(select.target.value)}
            >
                <option value="all">All</option>
                <option value="true">Active</option>
                <option value="false">Not active</option>
            </select>
        </div>
    }
}

export default SelectActive
