import { omit } from "lodash"
import React from "react"

type InputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IProp extends Omit<InputProp, 'onChange' | 'value'> {
  onChange: (tanggal: number) => void
  value: number
}

export default class EPDateSelect extends React.Component<IProp> {

  onChange(event: React.ChangeEvent<HTMLInputElement>): void {

    const datestr = event.target.value.split('-').reverse().map(dd => parseInt(dd))
    const newDate = new Date(datestr[2], datestr[1] - 1, datestr[0] + 1)

    const value = newDate.getTime() / 1000
    this.props.onChange(value)
  }

  render(): JSX.Element {
    const props = omit(this.props, ['onChange', 'value'])
    const valuestring = new Date(this.props.value * 1000).toISOString().split('T')[0]
    // const valuestring = "2012-03-03"
    // console.log("purwocar", valuestring)

    return (
      <input
        {...props}
        value={valuestring}
        onChange={event => this.onChange(event)}
        type="date" />
    )
  }
}