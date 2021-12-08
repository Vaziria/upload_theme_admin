import React from "react"
import SpinSelect from "../../common/SpinSelect"

interface IProps {
    value?: string
    update (polatitle: string): void
}

class SpinTitle extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props
        
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Spin Title</span>
            </div>
            <SpinSelect
                value={value || ''}
                onChange={spin => update(spin)}
            />
        </div>
    }
}

export default SpinTitle
