import React from "react"
import { IAkun } from "../../model/shopee/PromosiSetup"

interface IProp {
  akuns: IAkun[]
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (akun: IAkun[]) => any
}

export default class AkunTextarea extends React.Component<IProp> {
  
  akunString(): string {
    console.log(this.props.akuns)
    const akunstr = this.props.akuns.map( akun => `${akun.username}|${akun.pwd}`)
    return akunstr.join("\n")
  }

  onUpdate(akunraw: string): void {
    const akunstr = akunraw.split("\n").filter(raw => raw !== '')

    const akuns: IAkun[] = akunstr.map(line => {
      const lineraw = line.split('|')
      
      let pwd = ''
      if(lineraw.length > 1){
        pwd = lineraw[1]
      }

      const akun: IAkun = {
        username: lineraw[0],
        pwd
      }

      return akun
    })
    
    this.props.update(akuns)
  }

  render(): JSX.Element {
    return (
      <textarea
        defaultValue={this.akunString()}
        onChange={ event => this.onUpdate(event.target.value) }
        rows={10}
        className="form-control"
        placeholder="username|password"
      ></textarea>
    )
  }
}