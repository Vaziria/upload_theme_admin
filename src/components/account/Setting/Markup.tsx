import React from "react"

class Markup extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Markup</span>
        </div>
        <select ng-model="item.markup" className="form-control">
            <option ng-repeat="mark in listMarkup" value="{{mark}}">{'{mark}'}</option>
        </select>
    </div>
    }
}

export default Markup
