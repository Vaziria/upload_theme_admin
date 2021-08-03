import * as event from 'events'
import React from "react"
import { registListener, removeListener } from '../event'
import { IAlertData } from '../event/type/alert'

interface IState {
  show: boolean
  data: IAlertData
}

export default class AlertHead extends React.Component<unknown, IState> {
  listener: event.EventEmitter | null = null
  timeout: NodeJS.Timeout | null = null

  state: IState = {
    show: false,
    data: {
      msg: '',
      interval: 3000
    }
  }

  componentDidMount(): void {
    this.listener = registListener('show_msg', this.onShowMsg.bind(this))
  }

  componentWillUnmount(): void {
    if(this.listener){
      removeListener('show_msg', this.onShowMsg.bind(this))
    }
  }

  onShowMsg(data: IAlertData): void {
    this.setState({
      data,
      show: true
    })

    const interval: number = data.interval || 5000


    const timeOut = setTimeout(() => {
      this.setState({
        show: false
      })
    }, interval)

    if(this.timeout){
      clearTimeout(this.timeout)
      this.timeout = null
    } else {
      this.timeout = timeOut
    }
  }
  
  render(): JSX.Element {
    const pesan = this.state.data.msg
    const show = this.state.show
    return (
      <div>
        { show &&
          <div className="aler" role="alert">
            <span className="text-alert">{ pesan }</span>
          </div>
        }
        
      </div>
    )
  }
}