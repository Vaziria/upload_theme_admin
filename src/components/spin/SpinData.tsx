import { DatabaseOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Select, Space, Typography } from "antd";
import React from "react";

import { DataSpinItemResponse } from "../../model/newapisdk";
import AntdInput from "../common/AntdInput";
import AntdSelectAddon from "../common/AntdSelectAddon";
import AntdTextarea from "../common/AntdTextarea";

interface Props {
    data: string[]
    dataLoading: boolean
    setData(v: string[]): void
    updateLoading: boolean
    onActive(name: string, callback: (res: DataSpinItemResponse) => void): void
    onUpdate(data: DataSpinItemResponse): void
    onDelete(name: string): void
    onCreateNameExist?(): void
}

const SpinData: React.FC<Props> = (props: Props) => {

    const {
        data, dataLoading, setData, updateLoading,
        onActive, onCreateNameExist, onDelete, onUpdate
    } = props;

    const [activeData, setActiveData] = React.useState<DataSpinItemResponse>({
        name: "",
        data: []
    })
    const [addData, setAddData] = React.useState<string>("")
    const [unsavedData, setUnsavedData] = React.useState<string[]>([])

    const options = data.
        sort((a, b) => a.localeCompare(b)).
        map((name) => ({
            label: <div className="d-flex align-items-center">
                <span className="flex-1">{name}</span>
                <Typography.Text type="secondary">
                    {(unsavedData.includes(name)) && <SaveOutlined />}
                </Typography.Text>
            </div>,
            value: name
        }))
    const addStatus = data.includes(addData) ? "warning" : ""

    function addNewData() {
        if (addStatus === "warning") {
            onCreateNameExist?.()

        } else {
            setUnsavedData([...unsavedData, addData])
            setData([...data, addData])
            setActiveData({
                name: addData,
                data: []
            })
            setAddData("")
        }
    }

    function deleteData() {
        onDelete(activeData.name)
        setData(data.filter((d) => d !== activeData.name))
        setActiveData({
            name: "",
            data: []
        })
    }

    function saveData() {
        setUnsavedData(unsavedData.filter((name) => name !== activeData.name))
        onUpdate(activeData)
    }

    return <Space direction="vertical" className="d-flex">
        <Typography.Title level={5} className="mb-0">
            <DatabaseOutlined /> Spin Data
        </Typography.Title>

        <Space wrap>
            <AntdSelectAddon addon="Nama">
                <Select
                    value={activeData.name || undefined}
                    loading={dataLoading}
                    placeholder="Pilih nama data"
                    style={{ width: 300 }}
                    options={options}
                    onChange={(name) => onActive(name, setActiveData)}
                />
            </AntdSelectAddon>
            <Button
                danger
                icon={<DeleteOutlined />}
                disabled={!activeData.name}
                onClick={deleteData}
            />

            <AntdInput
                status={addStatus}
                value={addData}
                placeholder="Tambah nama"
                onChange={setAddData}
                onPressEnter={addNewData}
            />
            <Button
                icon={<PlusOutlined />}
                disabled={!addData}
                onClick={addNewData}
            />
        </Space>

        <AntdTextarea
            value={activeData.data.join("\n")}
            rows={8}
            disabled={!activeData.name}
            placeholder="Pilih nama data terlebih dahulu..."
            onChange={(data) => setActiveData((v) => ({ ...v, data: data.split("\n") }))}
        />

        <div className="d-flex justify-content-end">
            <Button
                type="primary"
                icon={<SaveOutlined />}
                disabled={!activeData.name || updateLoading}
                loading={updateLoading}
                onClick={saveData}
            >Simpan Data</Button>
        </div>
    </Space>
}

export default SpinData
