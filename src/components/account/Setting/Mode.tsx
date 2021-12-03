import React from "react"

class Mode extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Mode : </span>
            </div>
            <select className="form-control bot" ng-model="item.mode">
                <option value="keyword">keyword</option>
                <option value="category">category</option>
                <option value="url">url</option>
            </select>
            
        </div>
    }
}

export default Mode
