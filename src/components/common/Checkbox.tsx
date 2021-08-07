import React from "react"
import { omit } from 'lodash'

type InputProp = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type MInputProp = Omit<InputProp, 'value' | 'onChange'>

interface IProp extends MInputProp {
  onChange: (value: boolean) => void
}

export default class Checkbox extends React.Component<IProp> {
  
  render(): JSX.Element {
    const exclude: (keyof InputProp)[] = ['onChange']
    const props = omit(this.props, exclude)
    const checked = this.props.checked

    return <input
    {...props}
      checked={checked}
      onChange={(event) => this.props.onChange(event.target.checked)}
      type="checkbox" />
  }
}