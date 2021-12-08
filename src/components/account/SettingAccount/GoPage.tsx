import React from 'react'
import { InputNumber } from '../../common/InputNumber'

interface IProps {
    start: number
    limit: number
    update (start: number): void
}

class GoPage extends React.Component<IProps> {
    render (): JSX.Element {
        const { start, limit, update } = this.props
        const current = Math.ceil((start + limit) / limit)

        return <div className="input-group mb-3 input-group-sm">
			<div className="input-group-prepend">
				<span className="input-group-text" id="basic-addon3">Go Page: </span>
			</div>

			<InputNumber
                value={current}
                changeVal={page => update((page - 1) * limit)}
                className="form-control"
            />
		</div>
    }
}

export default GoPage
