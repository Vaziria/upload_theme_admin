import React from "react"

interface IProp {
    line: string[]
    placeholder?: string
    rows?: number
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (akun: string[]) => any
  }

export default class LineTextarea extends React.Component<IProp> {
    lineString(): string {
        return this.props.line.join("\n")
    }

    onUpdate(akunraw: string): void {
        const linestr = akunraw.split("\n").filter(raw => raw !== '')
        this.props.update(linestr)
      }

    render(): JSX.Element {
        return <textarea
        defaultValue={this.lineString()}
        onChange={ event => this.onUpdate(event.target.value) }
        rows={this.props.rows}
        className="form-control"
        placeholder={this.props.placeholder}
      ></textarea>
    }

}