import React from "react"
import { ILiburTask } from "../../../model/shopee/TaskSetup"
import AkunTextarea from "../../common/AkunTextarea"
import Checkbox from "../../common/Checkbox"

interface IProp {
    item: ILiburTask
    delete: (id: string) => unknown
    update: (id: string, task: Partial<ILiburTask>) => unknown

}

export default function LiburTask(props: IProp): JSX.Element {
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
                Libur : <Checkbox
                    checked={item.libur}
                    onChange={libur => updateTask(item.id, { libur })}
                >
                </Checkbox>
            </div>

            <button className="btn btn-sm btn-danger"
                onClick={() => deleteTask(item.id)}
            >delete</button>
        </div>
      </div>
    )
}

