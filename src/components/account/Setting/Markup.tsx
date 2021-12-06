import React from "react"

interface IProps {
    value: string
    update (markup: string): void
}

class Markup extends React.Component<IProps> {
    render (): JSX.Element {
        
        const { value, update } = this.props
        const listMarkup: string[] = []

        return <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Markup</span>
        </div>
        <select
            value={value}
            className="form-control"
            onChange={select => update(select.target.value)}
        >
            {!value && <option value=""></option>}
            
            {listMarkup.map((mark, key) =>
                <option key={key} value={mark}>{mark}</option>
            )}
        </select>
    </div>
    }
}

export default Markup
