import React from "react"

class Collection extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Collection</span>
            </div>
            <select ng-model="data" className="form-control ng-valid ng-touched ng-dirty ng-valid-parse ng-empty">
                <option value="">None</option>
                <option value="all">all</option>
            </select>
        </div>
    }
}

export default Collection
