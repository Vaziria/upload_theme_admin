import React from "react"

interface IProps {
    value: string
    update (water: string): void
}

class WaterMark extends React.Component<IProps> {
    render (): JSX.Element {
        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">WaterMark : </span>
            </div>
            <input
                type="text"
                className="form-control form-control-sm"
                value={value}
                onChange={input => update(input.target.value)}
            />
        </div>
    }
}

export default WaterMark
