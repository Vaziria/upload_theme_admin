import { omit } from "lodash"
import React from "react"

type InputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IProp extends Omit<InputProp, 'onChange' | 'value'> {
  onChange: (value: string) => void
  value: string
}

export default class DateSelect extends React.Component<IProp> {

  onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let value = event.target.value
    if (value) {
      value += 'T00:00:00.000000'
    }

    this.props.onChange(value)
  }

  render(): JSX.Element {
    const props = omit(this.props, ['onChange', 'value'])
    const value = this.props.value.split('T')[0]
    return (
      <input
        {...props}
        value={value}
        onChange={event => this.onChange(event)}
        type="date" />
    )
  }
}