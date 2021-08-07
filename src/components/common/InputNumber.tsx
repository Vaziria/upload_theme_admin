import React from "react"
import { omit } from 'lodash'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

interface IProp extends InputProps {
  value: number
  changeVal?: (value: number) => void
}

export class InputNumber extends React.Component<IProp> {
  onChange(event: React.ChangeEvent<HTMLInputElement>): void {
    let value: number = parseInt(event.target.value)

    if(event.target.value === ''){
      value = 0
    }

    if(this.props.changeVal){
      this.props.changeVal(value)
    }
  } 
  render(): JSX.Element {
    const props = omit(this.props, ['changeVal'])
    
    return <input
      { ...props }
      onChange={event => this.onChange(event)}
      type="text" pattern="[0-9]*" />
  }
}