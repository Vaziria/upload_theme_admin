import React from "react"
import MarkupSelect from "../../common/MarkupSelect"

interface IProps {
    value: string
    update (markup: string): void
}

class Markup extends React.Component<IProps> {
    render (): JSX.Element {
        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Markup</span>
        </div>
        <MarkupSelect
            value={value}
            onChange={markup => update(markup)}
        />
    </div>
    }
}

export default Markup
