import React from "react"
import { Col, Row, Space } from 'antd';

import { createTaskId, ITask } from "../../model/Task"
import ModeSelect from "../common/ModeSelect"
import GrabTaskCategory from "../grabtask/GrabTaskCategory"
import GrabTaskDumpCategory from "../grabtask/GrabTaskDumpCategory"
import GrabTaskDumpCategoryFacet from "../grabtask/GrabTaskDumpCategoryFacet"
import GrabTaskKeyword from "../grabtask/GrabTaskKeyword"
import GrabTaskProductUrl from "../grabtask/GrabTaskProductUrl"
import GrabTaskTokoUsernameOrUrl from "../grabtask/GrabTaskTokoUsernameOrUrl"
import { PropGrabTask } from "../grabtask/PropGrabTask"
interface IProp {
    task: ITask
    update: (id: string, data: Partial<ITask>) => void
    delete: (task: ITask) => void
    copy: (task: ITask) => void
}

type ModeSelectProps = React.ComponentProps<typeof ModeSelect>;
export default class TaskItem extends React.Component<IProp> {
  
    updateData(data: Partial<ITask>): void {
        this.props.update(this.props.task._id, data)
    }

    renderGrabTask(): JSX.Element {
        const { task } = this.props;
        const updateData = this.updateData.bind(this)
        const props: PropGrabTask = { task, updateData }
        switch (task.mode) {
            case "category":
                return <GrabTaskCategory {...props} />
        
            case "dump_category":
                return <GrabTaskDumpCategory {...props} />

            case "product_url":
                return <GrabTaskProductUrl {...props} />

            case "toko_username":
                return <GrabTaskTokoUsernameOrUrl {...props} />

            case "keyword":
                return <GrabTaskKeyword {...props} />
            
            case "dump_category_facet":
                return <GrabTaskDumpCategoryFacet {...props} />
        
            default:
                return <></>
        }
    }

    renderUrlMode(): JSX.Element {
        const { task } = this.props
        if (task.mode !== "url") {
            return <></>
        }

        const url = this.props.task.url || { raw: "" }
        const inputProps: JSX.IntrinsicElements["input"] = {}
        inputProps.className = "form-control"
        inputProps.type = "text"
        inputProps.value = url.raw
        inputProps.onChange = (event) => {
            url.raw = event.target.value
            this.updateData({ url })
        }
        
        return <div className="col-6">
            <div className="mb-3">
                <label>Url Keyword:</label>
                <input {...inputProps} />
            </div>
        </div>
    }
  
    render(): JSX.Element {
        const { task } = this.props

        const modeSelectProps: ModeSelectProps = {
            value: task.mode,
            onChange: (mode) => this.updateData({ mode })
        }

        const collectionProps: JSX.IntrinsicElements["input"] = {}
        collectionProps.className = "form-control"
        collectionProps.type = "text"
        collectionProps.value = task.namespace
        collectionProps.onChange = (event) => {
            const namespace = event.target.value
            this.updateData({ namespace })
        }

        const deleteButtonProps: JSX.IntrinsicElements["button"] = {}
        deleteButtonProps.className = "btn btn-sm btn-danger"
        deleteButtonProps.onClick = () => this.props.delete(task)
        deleteButtonProps.children = "DELETE"

        const copyButtonProps: JSX.IntrinsicElements["button"] = {}
        copyButtonProps.className = "btn btn-sm btn-secondary"
        copyButtonProps.onClick = () => {
            const task: ITask = { ...this.props.task}
            task._id = createTaskId()
            this.props.copy(task)
        }
        copyButtonProps.children = "COPY"

        return (
            <Space direction="vertical" style={{ minWidth: "100%" }} className="mb-3">
                <Row gutter={10}>
                    <Col span={8}>
                        <div className="form-group">
                            <label>Mode Grab:</label>
                            <ModeSelect {...modeSelectProps} />
                        </div>      
                    </Col>

                    <Col span={8}>
                        <div className="form-group">
                            <label>Nama Collection :</label>
                            <input {...collectionProps} />
                            </div>
                    </Col>

                    <Col span={8}>
                        <div className="form-group">
                            {this.renderGrabTask()}
                        </div>
                    </Col>
                </Row>
                    
                    
                {this.renderUrlMode()}

                <div>
                    <button {...deleteButtonProps} />
                    <button {...copyButtonProps} />
                </div>
            </Space>
        )
    }
}