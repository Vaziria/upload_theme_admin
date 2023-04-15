import React from "react"
import { IAkun } from "../../model/shopee/TaskSetup"

interface IProp {
  akuns: IAkun[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (akun: IAkun[]) => any
}

export default class AkunTextarea extends React.Component<IProp> {
  
  textAreaRef: HTMLTextAreaElement|null = null

  akunString(): string {
    const akunstr = this.props.akuns.map(akun => {
      let aStr = `${akun.username}|${akun.pwd}`

      if(akun.email) {
        aStr += `| ${akun.email}`
      }
      if(akun.email_pwd) {
        aStr += `| ${akun.email_pwd}`
      }

      return aStr
    })
    return akunstr.join("\n")
  }

  onUpdate(akunraw: string): void {
    const akunstr = akunraw.split("\n").filter(raw => raw !== '')

    const akuns: IAkun[] = akunstr.map(line => {
      const lineraw = line.split('|')
      
      let pwd = ''
      let email = ''
      let email_pwd = ''
      let namespace = ''

      if(lineraw.length > 1){
        pwd = lineraw[1]
      }

      if(lineraw.length > 2){
        email = lineraw[2]
      }

      if(lineraw.length > 3){
        email_pwd = lineraw[3]
      }

      if(lineraw.length > 4){
        namespace = lineraw[4]
      }

      const akun: IAkun = {
        username: lineraw[0],
        pwd,
        email,
        email_pwd,
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
        placeholder="username|password|[optional: email]|[optional: email_password]|[optional: namespace]"
      ></textarea>
    )
  }
}