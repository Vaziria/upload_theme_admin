import React from "react"
import { IPromosiDeleteTask, ITask } from "../../../model/shopee/TaskSetup"
import AkunTextarea from "../../common/AkunTextarea"

interface IProp {
  item: IPromosiDeleteTask
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (id: string, task: Partial<ITask>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete: (id: string) => any

}

export class PromoTaskDelete extends React.Component<IProp> {
  
  render(): JSX.Element {

    const item = this.props.item

    return (
      <div className="row">
        <div className="col">
          <div>
            <span> Taskid : <br/><strong>{item.id}</strong></span>
          </div>

            <AkunTextarea
              akuns={item.akuns}
              update={akuns => this.props.update(item.id, { akuns })}
            ></AkunTextarea>
        </div>

        <div className="col">
          <button className="btn btn-sm btn-danger"
            onClick={() => this.props.delete(item.id)}
          >delete</button>
        </div>
      </div>
      
    )
  }
}