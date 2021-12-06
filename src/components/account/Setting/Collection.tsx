import React from "react"

interface IProps {
    value?: string
    update (collection: string): void
}

class Collection extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Collection</span>
            </div>
            <select
                value={value}
                className="form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty"
                onChange={select => update(select.target.value)}
            >
                <option value="">None</option>
                <option value="all">all</option>
            </select>
        </div>
    }
}

export default Collection
