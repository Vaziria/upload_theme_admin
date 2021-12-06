import React from "react"

interface IProps {
    value?: string
    update (polatitle: string): void
}

class SpinTitle extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props
        const titlePool: { name: string }[] = []
        
        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Spin Title</span>
            </div>
            <select
                value={value}
                className="form-control"
                onChange={select => update(select.target.value)}
            >    
                <option value="">None</option>
                {titlePool.map((pola, key) => 
                    <option key={key} value={pola.name}>{pola.name}</option>
                )}
            </select>
        </div>
    }
}

export default SpinTitle
