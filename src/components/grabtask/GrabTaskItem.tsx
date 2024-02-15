import React from "react"
import { CopyOutlined, DeleteOutlined } from "@ant-design/icons"
import { Alert, Button, Card, Col, Row, Space, Tag, Typography } from "antd"

import { GrabTasker } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"
import GrabTaskItemExtraSetting from "./GrabTaskItemExtraSetting"
import GrabTaskModeSelect from "./GrabTaskModeSelect"

export interface TaskItem extends GrabTasker {
    is_saved: boolean
}

interface Props {
    item: TaskItem
    onChange(data: Partial<TaskItem>): void
    onDuplicate(task: Partial<TaskItem>): void
    onDelete(task: TaskItem): void
}

const GrabTaskItem: React.FC<Props> = (props: Props) => {

    const { item, onChange, onDuplicate, onDelete } = props

    function applyDuplicate() {
        onDuplicate(item)
    }

    function applyDelete() {
        onDelete(item)
    }

    return <Card
        hoverable
        size="small"
        type="inner"
        title={<div className="d-flex align-items-center">
            <div className="flex-1">
                Grab :&nbsp;<GrabTaskModeSelect
                    id="task_mode"
                    value={item.mode}
                    bordered={false}
                    className="my-2"
                    onChange={(mode) => onChange({ mode })}
                />
            </div>
            {!item.is_saved && <div><Tag color="orange">unsaved</Tag></div>}
        </div>}
    >
        {item.mode === "dump_category" && <Alert
            showIcon
            type="info"
            message={`Pastikan telah generate ${item.marketplace}_list_category.csv / memastikan csv dalam kondisi siap.`}
        />}
        <Row gutter={[12, 12]} className="mt-2">
            <Col span={9}>
                <div>
                    <Typography.Text type="secondary" className="d-block mb-1">Basic Setting</Typography.Text>
                    <AntdInput
                        id={"task_collection" + item._id}
                        addonBefore="Collection"
                        value={item.namespace}
                        className="w-100"
                        onChange={(namespace) => onChange({ namespace })}
                    />
                </div>
            </Col>

            <Col span={15}>
                <Space direction="vertical" className="d-flex">
                    <GrabTaskItemExtraSetting {...props} />

                    <div>
                        <Typography.Text type="secondary" className="d-block mb-1">Action</Typography.Text>
                        <Space>
                            <Button
                                type="primary"
                                danger
                                className="c-tx-sm"
                                icon={<DeleteOutlined />}
                                onClick={applyDelete}
                            >DELETE</Button>

                            <Button
                                type="primary"
                                style={{ backgroundColor: "#722ed1" }}
                                className="c-tx-sm"
                                icon={<CopyOutlined />}
                                onClick={applyDuplicate}
                            >DUPLICATE</Button>
                        </Space>
                    </div>
                </Space>
            </Col>
        </Row>
    </Card>
}

export default GrabTaskItem
