import { omit } from "lodash"
import React from "react"

type InputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IProp extends Omit<InputProp, 'onChange' | 'value'> {
  onChange: (value: string) => void
  value: string
}

export default class DateSelect extends React.Component<IProp> {

  onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    const value: string = event.target.value.replace(/-/g, ' ')
    this.props.onChange(value)
  }

  render(): JSX.Element {
    const props = omit(this.props, ['onChange', 'value'])
    const value = this.props.value.replace(/\s/g, '-')
    return (
      <input
        {...props}
        value={value}
        onChange={event => this.onChange(event)}
        type="date" />
    )
  }
}