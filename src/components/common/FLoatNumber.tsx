import React from "react"
import { omit } from 'lodash'

type InputProps = React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>


interface IProp extends InputProps {
    value: number
    changeVal?: (value: number) => void
  }
  

export default class FloatNumber extends React.Component<IProp> {

    onChange(event: React.ChangeEvent<HTMLInputElement>): void {
        const value: number = parseFloat(event.target.value)
        // value = Math.round(value * 1000000) / 1000000

        if(this.props.changeVal){
          this.props.changeVal(value)
        }
    } 

    render(): JSX.Element {
        const props = omit(this.props, ['changeVal'])
        return <input
            type="number"
            step="any"
            {...props}
            
            onChange={event => this.onChange(event)}
            />
    }
}