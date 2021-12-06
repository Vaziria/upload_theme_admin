import React from "react"

interface IProps {
    value: string
    update (hastag: string): void
}

class Hashtag extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props
        const hastags: string[] = []

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Hastag</span>
            </div>
            <select
                value={value}
                className="form-control"
                onChange={select => update(select.target.value)}
            >
                <option value="">None</option>
                {hastags.map((hastag, key) => 
                    <option key={key} value={hastag}>{hastag}</option>
                )}
                
            </select>
        </div>
    }
}

export default Hashtag
