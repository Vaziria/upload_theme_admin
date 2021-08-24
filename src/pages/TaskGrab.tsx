import React from "react"
import { deleteTask, getTaskAll, runGrab, runUploadAndGrab, saveTask } from "../api/task"
import TaskItem from "../components/grab/TaskItem"
import { emitEvent } from "../event"
import { createTaskId, ITask } from "../model/Task"

interface IState {
  tasks: ITask[],
  loading: boolean
}

export class TaskGrab extends React.Component<unknown, IState> {
  state: IState = {
    tasks: [],
    loading: true
  }

  async get(): Promise<void> {
    const tasks: ITask[] = await getTaskAll()
    this.setState({
      tasks,
      loading: false
    })
  }

  async componentDidMount(): Promise<void> {
    await this.get()
  }

  updateData(id: string, data: Partial<ITask>): void {
    const tasks = this.state.tasks.map((task) => {
      if(task._id === id){
        const newtask = { ...task, ...data }
        console.log(newtask)
        return newtask
      }

      return task
    })

    this.setState({
      tasks
    })
  }

  async onDelete(taskdel: ITask): Promise<void> {
    const tasks: ITask[] = this.state.tasks.filter((task)=> task._id !== taskdel._id)
    this.setState({
      tasks
    })
    await deleteTask(taskdel._id)
    
    emitEvent('show_msg', {
      msg: 'Delete Berhasil....'
    })
  }

  onCopy(task: ITask): void {
    const tasks: ITask[] = [task, ...this.state.tasks]
    this.setState({
      tasks
    })
  }

  renderTask(task: ITask): JSX.Element {
    return <TaskItem
      update={(id, data) => this.updateData(id, data)}
      delete={(task)=> this.onDelete(task)}
      copy={(task)=> this.onCopy(task)}
      task={task}
      key={task._id}
    ></TaskItem>
  }

  addTask(): void {
    const task: ITask = {
      _id: createTaskId(),
      toko_username: '',
      mode: 'category',
      marketplace: 'shopee',
      product_url: '',
      namespace: 'default',
      tokped_categ: ["0", "0", "0"],
      use_filter: false

    }

    this.setState({
      tasks: [task, ...this.state.tasks]
    })

  }

  async save(): Promise<void> {
    await saveTask(this.state.tasks)
    await this.get()

    emitEvent('show_msg', {
      msg: 'Save Task Berhasil....'
    })
  }

  async run(): Promise<void> {
    await runUploadAndGrab()
  }

  async grab(): Promise<void> {
    await runGrab()
  }



  render(): JSX.Element {
    const tasks = this.state.tasks
    const loading = this.state.loading

    return (
      <div className="mt-custom">
        <h2 className="mt-4">Tasker :</h2>

        <button className="btn btn-sm btn-primary"
          onClick={()=>this.addTask()}
        >ADD</button>

        <button className="btn btn-sm btn-success" onClick={()=>this.save()}>SAVE</button>

        <button className="btn btn-sm btn-primary" onClick={()=>this.run()}>RUN</button>
        <button className="btn btn-sm btn-warning" onClick={()=>this.grab()}>GRAB</button>
        <hr></hr>
        <div>
          { tasks.map((task) => this.renderTask(task)) }
          { loading &&
            <strong>Loading.......</strong>
          }
        </div>
      </div>
    )
  }
}