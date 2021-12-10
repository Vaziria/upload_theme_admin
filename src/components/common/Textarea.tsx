import { omit } from "lodash"
import React from "react"

type TextareaProps = React.DetailedHTMLProps<React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>

interface IProp extends TextareaProps {
    changeVal (text: string): void
  }

export default class Textarea extends React.Component<IProp> {
    render(): JSX.Element {
        const props = omit(this.props, ['changeVal'])
        const value = props.value || ''
        
        return <textarea
            {...props}
            value={value}
            onChange={tarea => this.props.changeVal(tarea.target.value)}
        ></textarea>
    }

}