import React from "react"

export interface IProp {
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
        const linestr = akunraw.split("\n")
        this.props.update(linestr)
    }

    fixUpdate (): void {
        const value = this.props.line.filter(ln => ln)
        this.props.update(value)
    }

    render(): JSX.Element {
        return <textarea
            value={this.lineString()}
            onChange={event => this.onUpdate(event.target.value) }
            onBlur={() => this.fixUpdate()}
            onMouseLeave={() => this.fixUpdate()}
            rows={this.props.rows}
            className="form-control"
            placeholder={this.props.placeholder}
        ></textarea>
    }

}