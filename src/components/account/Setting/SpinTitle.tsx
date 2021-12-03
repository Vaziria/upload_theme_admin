import React from "react"

class SpinTitle extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Spin Title</span>
            </div>
            <select ng-model="item.polatitle" className="form-control">
                <option value="">None</option>
                <option ng-repeat="pola in titlePool" value="{{pola.name}}">{'{pola.name}'}</option>
            </select>
        </div>
    }
}

export default SpinTitle
