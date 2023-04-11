import React from "react"
import { IAkun } from "../../model/shopee/TaskSetup"

interface IProp {
  akuns: IAkun[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (akun: IAkun[]) => any
}

export default class AkunTextareaOld extends React.Component<IProp> {
  
  textAreaRef: HTMLTextAreaElement|null = null

  akunString(): string {
    const akunstr = this.props.akuns.map( akun => `${akun.username}|${akun.pwd}`)
    return akunstr.join("\n")
  }

  onUpdate(akunraw: string): void {
    const akunstr = akunraw.split("\n").filter(raw => raw !== '')

    const akuns: IAkun[] = akunstr.map(line => {
      const lineraw = line.split('|')
      
      let pwd = ''
      let namespace = ''

      if(lineraw.length > 1){
        pwd = lineraw[1]
      }

      if(lineraw.length > 2){
        namespace = lineraw[2]
      }

      const akun: IAkun = {
        username: lineraw[0],
        pwd,
        namespace
      }

      return akun
    })
    
    this.props.update(akuns)
  }

  resetValue (): void {
    if (this.textAreaRef) {
      this.textAreaRef.value = ''
    }
  }

  render(): JSX.Element {
    return (
      <textarea
        ref={ref => this.textAreaRef = ref}
        defaultValue={this.akunString()}
        onChange={event => this.onUpdate(event.target.value)}
        rows={7}
        className="form-control"
        placeholder="username|password|[optional: namespace]"
      ></textarea>
    )
  }
}