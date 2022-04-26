import React from "react"
import { IKurirChangerTask } from "../../../model/shopee/TaskSetup"
import AkunTextarea from "../../common/AkunTextarea"
import ShippingSetting from "../../shipping/ShippingSetting"

interface IProp {
    item: IKurirChangerTask
    delete: (id: string) => unknown
    update: (id: string, task: Partial<IKurirChangerTask>) => unknown

}

export default function KurirChanger(props: IProp): JSX.Element {
    const { item, delete: deleteTask, update: updateTask } = props
    const { config } = item

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
            <ShippingSetting
                activeChannel={config.active_ids}
                onChange={activeChannel => updateTask(item.id, { config: { ...config, active_ids: activeChannel } })}
            ></ShippingSetting>

            <button className="btn btn-sm btn-danger"
                onClick={() => deleteTask(item.id)}
            >delete</button>

            
        </div>
    </div>
    )
}