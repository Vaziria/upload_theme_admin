export interface IAlertData {
  msg: string
  interval?: number
}

export interface IAlertEvent {
  show_msg: IAlertData
}
