import React from "react"
import * as uuid from 'uuid'
import { deletePromoTask, getPromoTask, runPromo, savePromoTask } from "../api/shopee/promo"
import PromoTaskItem from "../components/shopee/task/PromoTaskItem"
import { emitEvent } from "../event"
import { IPromosiTask } from "../model/shopee/PromosiSetup"


interface IState {
  tasks: IPromosiTask[]
}
export default class PromoPage extends React.Component<unknown, IState> {
  state: IState = {
    tasks: []
  }

  async componentDidMount(): Promise<void> {
    const tasks: IPromosiTask[] = await getPromoTask()
    this.setState({
      tasks
    })
  }

  newTask(): void {
    const idnya = uuid.v4()

    const promoTimeMin = (Date.now() / 1000) + (24 * 60 * 60)
    const promoTimeMax = (Date.now() / 1000) + (24 * 60 * 60 * 30)

    const defProdMax = (Date.now() / 1000)
    const defProdMin = (Date.now() / 1000) - (24 * 60 * 60 * 7)

    const task: IPromosiTask = {
      task_type: "promosi",
      id: idnya,
      akuns: [],
      config: {
        name: "diskon sebulan",
        count_product: 20,
        discount: 10,
        end_time: promoTimeMax,
        start_time: promoTimeMin,
        ctime_max: defProdMax,
        ctime_min: defProdMin,
        query: {},
        sold: 0,
        view: 0
      }
    }

    const tasks = this.state.tasks
    this.setState({
      tasks: [task, ...tasks]
    })
  }

  async deleteTask(idnya: string): Promise<void> {
    const tasks = this.state.tasks.filter(task => task.id != idnya)
    this.setState({
      tasks
    })
    
    await deletePromoTask(idnya)

    emitEvent('show_msg', {
      msg: 'delete berhasil....'
    })
  }

  updateTask(idnya: string, data: Partial<IPromosiTask>): void {
    const tasks = this.state.tasks.map(task => {
      if(task.id == idnya){
        return {
          ...task,
          ...data
        }
      }

      return task
    })

    this.setState({
      tasks
    })
  }

  async saveTaskAll(): Promise<void> {
    await savePromoTask(this.state.tasks)
    emitEvent('show_msg', {
      msg: 'Saving berhasil....'
    })
  }

  async runTaskAll(): Promise<void> {
    await runPromo()
    emitEvent('show_msg', {
      msg: 'running promo....'
    })
  }

  render(): JSX.Element {
    const { tasks } = this.state

    return (
      <div className="mt-custom">
        <h2 className="mt-4">Task Promo :</h2>

        <button className="btn btn-sm btn-primary"
          onClick={() => this.newTask()}
        >ADD</button>

        <button className="btn btn-sm btn-success"
          onClick={() => this.saveTaskAll()}
        >save</button>

        <button className="btn btn-sm btn-primary"
          onClick={() => this.runTaskAll()}
        >run</button>

        <div>
          {
            tasks.map(task => {
              return (
                <div key={task.id}>
                <PromoTaskItem
                  item={task}
                  update={(id, task) => this.updateTask(id, task)}
                  delete={id => this.deleteTask(id)}
                ></PromoTaskItem>
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}