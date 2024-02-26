import { BorderlessTableOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, InputNumber, Select, Space, Typography } from "antd";
import React from "react";

import { HastagLimitData, HastagUpdatePayload } from "../../model/newapisdk";
import AntdInput from "../common/AntdInput";
import AntdSelectAddon from "../common/AntdSelectAddon";
import AntdTextarea from "../common/AntdTextarea";

interface Props {
    hastags: string[]
    hastagLoading: boolean
    setHashtags(v: string[]): void
    limit: number[]
    updateLoading: boolean
    onUpdate(data: HastagUpdatePayload): void
    onUpdateLimit(v: HastagLimitData): void
    onActive(name: string, callback: (res: HastagUpdatePayload) => void): void
    onDelete(name: string): void
    onCreateNameExist?(): void
}

const SpinHastag: React.FC<Props> = (props: Props) => {

    const {
        hastags, hastagLoading, setHashtags, limit, updateLoading,
        onUpdate, onUpdateLimit, onActive, onDelete, onCreateNameExist
    } = props

    const [activeHastag, setActiveHastag] = React.useState<HastagUpdatePayload>({
        name: "",
        data: []
    })
    const [addHastag, setAddHastag] = React.useState<string>("")
    const [unsavedHastag, setUnsavedHastag] = React.useState<string[]>([])

    const options = hastags.
        sort((a, b) => a.localeCompare(b)).
        map((name) => ({
            label: <div className="d-flex align-items-center">
                <span className="flex-1">{name}</span>
                <Typography.Text type="secondary">
                    {(unsavedHastag.includes(name)) && <SaveOutlined />}
                </Typography.Text>
            </div>,
            value: name
        }))
    const addStatus = hastags.includes(addHastag) ? "warning" : ""
    const limitData: HastagLimitData = {
        min: limit[0] || 0,
        max: limit[1] || 0,
    }

    function addNewData() {
        if (addStatus === "warning") {
            onCreateNameExist?.()

        } else {
            setUnsavedHastag([...unsavedHastag, addHastag])
            setHashtags([...hastags, addHastag])
            setActiveHastag({
                name: addHastag,
                data: []
            })
            setAddHastag("")
        }
    }

    function deleteData() {
        onDelete(activeHastag.name)
        setHashtags(hastags.filter((d) => d !== activeHastag.name))
        setActiveHastag({
            name: "",
            data: []
        })
    }

    function updateLimit(data: Partial<HastagLimitData>) {
        console.log(data)
        const fixdata = { ...limitData, ...data }
        if (fixdata.min > fixdata.max) {
            fixdata.max = fixdata.min
        }
        onUpdateLimit(fixdata)
    }

    return <Space direction="vertical" className="d-flex">
        <Typography.Title level={5} className="mb-0">
            <BorderlessTableOutlined /> Spin Hastag
        </Typography.Title>

        <Space wrap>
            <AntdSelectAddon addon="Nama">
                <Select
                    value={activeHastag.name || undefined}
                    loading={hastagLoading}
                    placeholder="Pilih nama data"
                    style={{ width: 300 }}
                    options={options}
                    onChange={(name) => onActive(name, setActiveHastag)}
                />
            </AntdSelectAddon>
            <Button
                danger
                icon={<DeleteOutlined />}
                disabled={!activeHastag.name}
                onClick={deleteData}
            />

            <AntdInput
                status={addStatus}
                value={addHastag}
                placeholder="Tambah nama"
                onChange={setAddHastag}
                onPressEnter={addNewData}
            />
            <Button
                icon={<PlusOutlined />}
                disabled={!addHastag}
                onClick={addNewData}
            />
        </Space>

        <AntdSelectAddon addon="Limit">
            <Space.Compact block style={{ width: 300 }}>
                <InputNumber
                    value={limit[0] || 0}
                    min={0}
                    style={{
                        width: "calc(50% - 20px)",
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                    }}
                    onChange={(v) => updateLimit({ min: v || 0 })}
                />
                <InputNumber
                    value={limit[1] || 0}
                    prefix="-&nbsp;&nbsp;&nbsp;&nbsp;"
                    min={0}
                    className="flex-1"
                    style={{
                        borderTopLeftRadius: 0,
                        borderBottomLeftRadius: 0,
                        borderLeft: 0,
                    }}
                    onChange={(v) => updateLimit({ max: v || 0 })}
                />
            </Space.Compact>
        </AntdSelectAddon>

        <AntdTextarea
            value={activeHastag.data.join("\n")}
            rows={8}
            disabled={!activeHastag.name}
            placeholder="#sepatu"
            onChange={(data) => setActiveHastag((v) => ({ ...v, data: data.split("\n") }))}
        />

        <div className="d-flex justify-content-end">
            <Button
                type="primary"
                icon={<SaveOutlined />}
                disabled={!activeHastag.name || updateLoading}
                loading={updateLoading}
                onClick={() => onUpdate(activeHastag)}
            >Simpan Hastag</Button>
        </div>
    </Space>
}

export default SpinHastag
