import { Col, Empty, Row, Space, Spin, message } from "antd";
import React from "react";
import * as uuid from "uuid";

import GrabTaskAction from "../components/grabtask/GrabTaskAction";
import GrabTaskItem, { TaskItem } from "../components/grabtask/GrabTaskItem";
import GrabTaskTabs from "../components/grabtask/GrabTaskTabs";
import { useMutation } from "../hooks/mutation";
import { MarketList } from "../model/Common";
import { GrabTasker, useQuery } from "../model/newapisdk";

const TaskGrabNew: React.FC = () => {

    const [messageApi, ctxholder] = message.useMessage()
    const [mode, setMode] = React.useState<MarketList>("shopee")
    const [tasks, setTasks] = React.useState<TaskItem[]>([])

    const { send: getTaskers, pending } = useQuery("GetLegacyV1TaskerAll")
    const { mutate: saveTaskers } = useMutation("PostLegacyV1TaskerSave")
    const { mutate: deleteTasker } = useMutation("DeleteLegacyV1Taskerid")
    const { mutate: grabShopee } = useMutation("GetLauncherV1RunGrabShopee")
    const { mutate: grabTokopedia } = useMutation("GetLauncherV1RunGrabTokopedia")
    const { mutate: grabJakmall } = useMutation("GetLauncherV1RunGrabJakmall")
    const { send: dumpShopee, pending: dspending } = useQuery("GetLegacyApiCategoryDumpCsv")
    const { send: dumpTokopedia, pending: dtppending } = useQuery("GetTokopediaDumpCategoryDump")
    const { send: dumpJakmall, pending: djmpending } = useQuery("GetJakmallCategoryDumpCsv")

    const fixtasks = tasks.filter((task) => task.marketplace === mode)

    function addTasker(task: GrabTasker) {
        setTasks((tasks) => [...tasks, {
            ...task,
            _id: uuid.v4().toString().replace(/-/g, ""),
            is_saved: false,
        }])
    }

    function applySaveTaskers() {
        saveTaskers({
            onSuccess: () => {
                messageApi.success("grab tasks saved")
                setTasks((tasks) => tasks.map(t => ({ ...t, is_saved: true })))
            },
        }, tasks)
    }

    function applyDelete(task: TaskItem) {
        if (task.is_saved) {
            deleteTasker({
                urlReplacer: (url: string) => url.replace(":id", task._id),
                onSuccess() {
                    setTasks((tasks) => tasks.filter((t) => t._id != task._id))
                    messageApi.success("task deleted")
                },
            })

        } else {
            setTasks((tasks) => tasks.filter((t) => t._id != task._id))
        }
    }

    const onGrabSuccess = () => messageApi.success("running grab...")
    const onDumpSuccess = () => messageApi.success("csv generated")

    React.useEffect(() => getTaskers({
        onSuccess: (res) => setTasks(res.map(t => ({ ...t, is_saved: true }))),
    }), [])

    return <Row className="mt-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <GrabTaskTabs mode={mode} onChange={setMode}>

                <Space direction="vertical" className="d-flex" size="large">
                    {/* <GrabTaskFilter mode={mode} onSave={() => message.success("grab filter saved")} /> */}

                    <GrabTaskAction
                        mode={mode}
                        onAdd={addTasker}
                        onSave={applySaveTaskers}
                        runGrabMode={{
                            shopee: () => grabShopee({ onSuccess: onGrabSuccess }),
                            tokopedia: () => grabTokopedia({ onSuccess: onGrabSuccess }),
                            jakmall: () => grabJakmall({ onSuccess: onGrabSuccess }),
                        }}
                        generateCsvLoading={dspending || dtppending || djmpending}
                        runGenerateCsv={{
                            shopee: () => dumpShopee({ query: { mp: "shopee" }, onSuccess: onDumpSuccess }),
                            tokopedia: () => dumpTokopedia({ onSuccess: onDumpSuccess }),
                            jakmall: () => dumpJakmall({ onSuccess: onDumpSuccess }),
                        }}
                    />

                    {pending && <Spin tip="Loading">
                        <div style={{ height: 200 }} />
                    </Spin>}

                    {!pending && !fixtasks.length && <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: 200 }}
                    >
                        <Empty
                            description="Tidak ada grab task, silahkan 'ADD'"
                            image={Empty.PRESENTED_IMAGE_SIMPLE}
                        />
                    </div>}

                    {fixtasks.map((task) => <GrabTaskItem
                        key={task._id}
                        item={task}
                        onDuplicate={addTasker}
                        onDelete={applyDelete}
                        onChange={(data) => {
                            setTasks((ts) => ts.map((t) => {
                                if (task._id === t._id) {
                                    return { ...task, ...data }
                                }
                                return t
                            }))
                        }}
                    />)}
                </Space>
            </GrabTaskTabs>
        </Col>
    </Row>
}

export default TaskGrabNew
