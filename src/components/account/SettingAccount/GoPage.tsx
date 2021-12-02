import React from 'react'
import { InputNumber } from '../../common/InputNumber'

interface IProps {
    value: number
    update (page: number): void
}

class GoPage extends React.Component<IProps> {
    render (): JSX.Element {
        return <div className="input-group mb-3 input-group-sm">
			<div className="input-group-prepend">
				<span className="input-group-text" id="basic-addon3">Go Page: </span>
			</div>

			<InputNumber
                value={this.props.value}
                changeVal={num => this.props.update(num)}
                className="form-control"
            />
		</div>
    }
}

export default GoPage
