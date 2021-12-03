import React from "react"

class Pass extends React.Component {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Pass : </span>
            </div>
            <input type="text" className="form-control form-control-sm" ng-model="item.pass" />
            
        </div>
    }
}

export default Pass
