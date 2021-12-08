import { omit } from 'lodash'
import React from 'react'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IProps extends InputProps {
    value: string
    changeVal (text: string): void
}

class InputText extends React.Component<IProps> {
    render (): JSX.Element {
        const props = omit(this.props, ['changeVal'])
        
        return <input
            {...props}
            type="text"
            onChange={event => this.props.changeVal(event.target.value)}
            className="form-control"
        />
    }
}

export default InputText
