import { Button, Col, Divider, message, Row, Select, Space } from 'antd';
import React from "react";

import {
    deleteTask, getTaskAll,
    saveTask
} from "../api/task";

import TaskItem from "../components/grab/TaskItem";
import { emitEvent } from "../event";
import { MarketList } from "../model/Common";
import { useQuery } from "../model/newapisdk";
import { createTaskId, ITask } from "../model/Task";

interface IState {
    tasks: ITask[]
    loading: boolean
    mode: MarketList
}

const RunShopeeGrab: React.FC = () => {

    const { send } = useQuery("GetLauncherV1RunGrabShopee")
    function runGrab() {
        send({
            onSuccess(res) {
                if (res.empty_csv) {
                    message.warning("csv tidak ada category tersedia untuk grab")
                }
            },
        })
    }

    return <Button
        type="primary"
        style={{ backgroundColor: "#ff4d4f" }}
        onClick={runGrab}
    >
        <small>GRAB SHOPEE</small>
    </Button>
}

const RunTokopediaGrab: React.FC = () => {

    const { send } = useQuery("GetLauncherV1RunGrabTokopedia")
    function runGrab() {
        send({
            onSuccess(res) {
                if (res.empty_csv) {
                    message.warning("csv tidak ada category tersedia untuk grab")
                }
                if (res.deprecated) {
                    message.warning("csv deprecated, silahkan update")
                }
            },
        })
    }

    return <Button
        type="primary"
        style={{ backgroundColor: "#52c41a" }}
        onClick={runGrab}
    >
        <small>GRAB TOKOPEDIA</small>
    </Button>
}

export class TaskGrab extends React.Component<unknown, IState> {

    state: IState = {
        tasks: [],
        loading: true,
        mode: "shopee"
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
            if (task._id === id) {
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
        const tasks: ITask[] = this.state.tasks.filter((task) => task._id !== taskdel._id)
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
            delete={(task) => this.onDelete(task)}
            copy={(task) => this.onCopy(task)}
            task={task}
            key={task._id}
        ></TaskItem>
    }

    addTask(): void {
        const task: ITask = {
            _id: createTaskId(),
            toko_username: '',
            mode: 'category',
            marketplace: this.state.mode,
            product_url: '',
            namespace: 'default',
            tokped_categ: ["0", "0", "0"],
            use_filter: false,
            keyword: ''

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

    renderGrabButton(): JSX.Element {

        if (this.state.mode === "shopee") {
            return <RunShopeeGrab />
        }

        return <RunTokopediaGrab />
    }

    render(): JSX.Element {
        const tasks = this.state.tasks
        const loading = this.state.loading

        return (
            <div className="mt-5">
                <div className="mx-2 mt-4">

                    <Row gutter={10}>

                        <Col span={24}>
                            <h2>Tasker :</h2>

                            <Space direction="horizontal">

                                <Select
                                    defaultValue={this.state.mode}
                                    onChange={(mode) => this.setState({ mode })}
                                    style={{ minWidth: "120px" }}
                                    options={[
                                        { value: 'shopee', label: 'Shopee' },
                                        { value: 'tokopedia', label: 'Tokopedia' },
                                    ]}
                                />

                                <Button
                                    type="primary"
                                    onClick={() => this.addTask()}
                                >
                                    <small>ADD</small>
                                </Button>

                                <Button
                                    type="primary"
                                    style={{ backgroundColor: "#fa8c16" }}
                                    onClick={() => this.save()}
                                >
                                    <small>SAVE</small>
                                </Button>

                                {this.renderGrabButton()}

                            </Space>
                        </Col>

                        <Col span={24}>

                            <Divider />

                            <div>
                                {
                                    tasks
                                        .filter((task => task.marketplace == this.state.mode))
                                        .map((task) => this.renderTask(task))
                                }
                                {loading &&
                                    <strong>Loading.......</strong>
                                }
                            </div>
                        </Col>

                    </Row>

                </div>
            </div>
        )
    }
}