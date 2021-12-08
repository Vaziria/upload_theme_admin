import React from 'react'

interface IProps {
    value: string
    update (search: string): void
}

class Search extends React.Component<IProps> {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Search : </span>
            </div>
            <input
                value={this.props.value}
                type="text"
                className="form-control"
                onChange={input => this.props.update(input.target.value)}
            />
        </div>
    }
}

export default Search
