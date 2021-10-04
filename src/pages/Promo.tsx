import React from "react"
import * as uuid from 'uuid'
import { getPromoTask } from "../api/shopee/promo"
import PromoTaskItem from "../components/shopee/task/PromoTaskItem"
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
    const task: IPromosiTask = {
      id: idnya,
      akun: [],
      config: {
        count_product: 0,
        discount: 0,
        end_time: 0,
        start_time: 0,
        query: {}
      }
    }

    const tasks = this.state.tasks
    this.setState({
      tasks: [task, ...tasks]
    })
  }

  deleteTask(idnya: string): void {
    const tasks = this.state.tasks.filter(task => task.id != idnya)
    this.setState({
      tasks
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
    console.log("not implemented")
  }

  async runTaskAll(): Promise<void> {
    console.log("not implemented")
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