import React from "react"

class Hashtag extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Hastag</span>
            </div>
            <select ng-model="item.hastag" className="form-control">
                <option value="">None</option>
                <option ng-repeat="hastag in hastags" value="{{hastag}}">{'{hastag}'}</option>
            </select>
        </div>
    }
}

export default Hashtag
