import React from "react"
import { getNotifAll, readNotifAll } from "../../api/notif"
import { INotif } from "../../model/Notif"

interface IState {
  show: boolean
  notifs: INotif[]
}

export default class NotifButton extends React.Component<unknown, IState> {
  
  state: IState = {
    show: false,
    notifs: []
  }

  async componentDidMount(): Promise<void> {
    await this.getNotif()
  }

  async getNotif(): Promise<void> {
    const notifs = await getNotifAll()
    this.setState({
      notifs
    })
  }

  async readAll(): Promise<void> {
    await readNotifAll()
    this.setState({
      notifs: []
    })
  }

  toggleShow(): void {
    const show = !this.state.show
    this.setState({
      show
    })
  }

  renderList(notif: INotif): JSX.Element {
    return (
      <li>
        { notif.status === 'read' && 
          <div>
            <strong>{ notif.title }</strong><br />
            <p>{ notif.desc }</p>
              <p className="time-notif">{ notif.created_at }</p>
              
          </div>
        }
        

        { notif.status === 'unread' && 

          <div style={{ backgroundColor: 'yellow' }}>
            <strong>{ notif.title }</strong><br />
            <p>{ notif.desc }</p>
            <p className="time-notif">{ notif.created_at }</p>
          </div>

        }

      </li>
    )
  }

  renderBox(): JSX.Element {
    return (
      <div
        style={{
          backgroundColor: '#cecbcb',
          padding: '2% 3%',
          fontSize: '14px',
          marginTop: '15px',
          position: 'absolute'
        }}>

          <button 
            style={{
              margin: '0px 0px 11px'
            }}
            
            className="btn btn-sm btn-warning"
            onClick={() => this.readAll() }>read all</button>
        <div>
          <ul>
            { this.state.notifs.map((notif) => this.renderList(notif) ) }
            <hr/>
          </ul>
        </div>
      </div>
    )
  }

  render(): JSX.Element {
    return (
      <>
      <button className="btn btn-small btn-info"
        style={{
          margin: '5px 15px',
          height: '25px',
          padding: '0px 15px',
          width: '80%'}}
          id="notif"
          onClick={()=> this.toggleShow()}>
          
          <i className="far fa-bell"></i> Notifikasi
        </button>
          { this.state.show && this.renderBox() }
      </>
    )
  }
}