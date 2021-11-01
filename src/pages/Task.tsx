import React from "react"
import { getBotConfiguration, updateBotConfiguration } from "../api/bot_configuration"
import { deletePromoTask, getPromoTask, runPromo, saveTask } from "../api/shopee/promo"
import { InputNumber } from "../components/common/InputNumber"
import { PromoTaskDelete } from "../components/shopee/task/PromoTaskDelete"
import PromoTaskItem from "../components/shopee/task/PromoTaskItem"
import UpdatedProductTask from "../components/shopee/task/UpdateProductTask"
import { emitEvent } from "../event"
import { createTask, IPromosiTask, ITask, TaskType, taskTypes } from "../model/shopee/TaskSetup"


type TaskTitle  = {
  [k in ITask['task_type']]: string
}

const taskTitle: TaskTitle = {
  delete_promo: "Delete Promo Task",
  promosi: 'Add Promo Task',
  update_product: 'Update Price Arsip'
}

interface IState {
  tasks: ITask[]
  new_task_type: TaskType
  thread_count: number
}
export default class PromoPage extends React.Component<unknown, IState> {
  state: IState = {
    tasks: [],
    new_task_type: 'promosi',
    thread_count: 0
  }

  async componentDidMount(): Promise<void> {
    const tasks: IPromosiTask[] = await getPromoTask()
    this.setState({
      tasks
    })

    const botConfiguration = await getBotConfiguration()
    this.setState({
      thread_count: botConfiguration.thread_count
    })
  }

  newTask(): void {
    const task = createTask(this.state.new_task_type)

    const tasks = this.state.tasks
    this.setState({
      tasks: [task, ...tasks]
    })
  }

  async deleteTask(idnya: string): Promise<void> {
    
    const tasks = this.state.tasks.filter(task => {
      if(task.id == idnya){
        deletePromoTask(idnya, task.task_type)
        return false
      }
      return true

    })
    this.setState({
      tasks
    })

    emitEvent('show_msg', {
      msg: 'delete berhasil....'
    })
  }

  updateTask(idnya: string, data: Partial<ITask>): void {
    const tasks = this.state.tasks.map(task => {
      if(task.id == idnya){
        return {
          ...task,
          ...data
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        } as any
      }

      return task
    })

    this.setState({
      tasks
    })
  }

  async saveTaskAll(): Promise<void> {
    await saveTask(this.state.tasks)
    await updateBotConfiguration({
      thread_count: this.state.thread_count
    })
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

  renderTask(task: ITask): JSX.Element {

    if(task.task_type === "promosi"){
      return <PromoTaskItem
        item={task}
        update={(id, task) => this.updateTask(id, task)}
        delete={id => this.deleteTask(id)}
      ></PromoTaskItem>

    }
    else if (task.task_type === 'update_product'){
      return <UpdatedProductTask
        item={task}
        update={(id, task) => this.updateTask(id, task)}
        delete={id => this.deleteTask(id)}
      ></UpdatedProductTask>
    } else {
      return <PromoTaskDelete
        item={task}
        update={(id, task) => this.updateTask(id, task)}
        delete={id => this.deleteTask(id)}
      ></PromoTaskDelete>
    }
    
  }

  render(): JSX.Element {
    const { tasks, thread_count } = this.state

    return (
      <div className="mt-custom"
        style={{
          paddingBottom: "30px"
        }}
      >
        <h2 className="mt-4">Task :</h2>

        <select
          className="form-control form-control-sm"
          style={{
            width: "150px",
            display: "inline"
          }}
          
          value={this.state.new_task_type}
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          onChange={(event) => this.setState({ new_task_type: event.target.value as any})}
        >
          {
            taskTypes.map(tasktipe => {
              return <option
                key={tasktipe}
                value={tasktipe}
              >{ taskTitle[tasktipe] }</option>
            })
          }
        </select>

        <button className="btn btn-sm btn-primary"
          onClick={() => this.newTask()}
        >ADD</button>

        <button className="btn btn-sm btn-success"
          onClick={() => this.saveTaskAll()}
        >save</button>

        <button className="btn btn-sm btn-primary"
          onClick={() => this.runTaskAll()}
        >run</button>

        
        Thread Count: <InputNumber
          value={thread_count}
          changeVal={thread_count => this.setState({thread_count})}
          type="text" className="form-control form-control-sm"
          style={{
            display: "inline",
            width: "100px"
          }}
          />

        <div>
          {
            tasks.map(task => {
              return (
                <div key={task.id}>
                  <h3>{ taskTitle[task.task_type] }</h3>
                  {
                    this.renderTask(task)
                  }
                </div>
              )
            })
          }
        </div>
      </div>
    )
  }
}