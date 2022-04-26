import React from "react"
import { IAssistenChatTask, ITask } from "../../../model/shopee/TaskSetup"
import AkunTextarea from "../../common/AkunTextarea"
import { AutoReply } from "../auto_reply/AutoReply"
import AutoReplyOffline from "../auto_reply/AutoReplyOffline"

interface IProp {
    item: IAssistenChatTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (id: string, task: Partial<ITask>) => any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete: (id: string) => any
  
  }
  

export default function AsistenChatTask(props: IProp): JSX.Element {
    const { item, delete: deleteTask, update: updateTask } = props
    return (
    <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <span> Taskid : <br/><strong>{item.id}</strong></span>
            </div>
          </div>
          
          <AkunTextarea
            akuns={item.akuns}
            update={akuns => updateTask(item.id, { akuns })}
          ></AkunTextarea>
        </div>
        <div className="col">
            <div>
                <AutoReply
                    value={item.chat_setting}
                    onChange={chat_setting => updateTask(item.id, { chat_setting })}
                ></AutoReply>
                <AutoReplyOffline
                    value={item.offline_reply}
                    onChange={offline_reply => updateTask(item.id, { offline_reply })}
                ></AutoReplyOffline>
            </div>

            <button className="btn btn-sm btn-danger"
                onClick={() => deleteTask(item.id)}
            >delete</button>
        </div>
    </div>
    )
}