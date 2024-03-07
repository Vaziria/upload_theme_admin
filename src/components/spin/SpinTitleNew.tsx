import { DeleteOutlined, FontSizeOutlined, PlusOutlined, ReloadOutlined, SaveOutlined } from "@ant-design/icons";
import { Alert, Button, Card, Collapse, Select, Space, Typography } from "antd";
import React from "react";

import { SettingSpinConfigUpdatePayload, SettingSpinTitlePool } from "../../model/newapisdk";
import AntdInput from "../common/AntdInput";
import AntdSelectAddon from "../common/AntdSelectAddon";
import AntdTextarea from "../common/AntdTextarea";

interface Props {
    example: string
    setExample(v: string)
    dataLoading: boolean
    pools: SettingSpinTitlePool[]
    setPools(v: SettingSpinTitlePool[]): void
    updateLoading: boolean
    onUpdate(data: SettingSpinConfigUpdatePayload): void
    onCreateNameExist(): void
}

const SpinTitleNew: React.FC<Props> = (props: Props) => {

    const {
        example, setExample, dataLoading, pools, setPools,
        onCreateNameExist, updateLoading, onUpdate
    } = props

    const [newPattern, setNewPattern] = React.useState("")
    const [activePattern, setActivePattern] = React.useState("")
    const [unsavedData, setUnsavedData] = React.useState<string[]>([])

    const activeData = pools?.find((pool) => pool.name === activePattern)
    const addStatus = pools?.some((pool) => pool.name === newPattern) ? "warning" : ""
    const options = pools?.
        sort((a, b) => a.name.localeCompare(b.name)).
        map((pool) => ({
            label: <div className="d-flex align-items-center">
                <span className="flex-1">{pool.name}</span>
                <Typography.Text type="secondary">
                    {(unsavedData.includes(pool.name)) && <SaveOutlined />}
                </Typography.Text>
            </div>,
            value: pool.name
        }))

    function setPoolData(data: string) {
        setPools(pools?.map((pool) => {
            if (pool.name === activeData?.name) {
                return { ...pool, data }
            }
            return pool
        }))
    }

    function deletePoolData() {
        setPools(pools?.filter((pool) => {
            return pool.name !== activeData?.name
        }))
    }

    function addNewPoolData() {
        if (addStatus === "warning") {
            onCreateNameExist?.()

        } else {
            setUnsavedData([...unsavedData, newPattern])
            setPools([...(pools || []), {
                name: newPattern,
                data: ""
            }])
            setActivePattern(newPattern)
            setNewPattern("")
        }
    }

    function saveData() {
        setUnsavedData([])
        onUpdate({
            name: "",
            titlePool: pools || []
        })
    }

    React.useEffect(() => {
        if (activeData) {
            setExample(activeData.data)
        }
    }, [activeData])

    return <Card title={<><FontSizeOutlined /> Spin Title</>}>
        <Space direction="vertical" className="d-flex">
            <Space wrap>
                <AntdSelectAddon addon="Nama">
                    <Select
                        value={activePattern || undefined}
                        loading={dataLoading}
                        placeholder="Pilih nama spin"
                        style={{ width: 300 }}
                        options={options}
                        onChange={setActivePattern}
                    />
                </AntdSelectAddon>
                <Button
                    danger
                    icon={<DeleteOutlined />}
                    disabled={!activeData?.name}
                    onClick={deletePoolData}
                />

                <AntdInput
                    status={addStatus}
                    value={newPattern}
                    placeholder="Tambah nama"
                    onChange={setNewPattern}
                    onPressEnter={addNewPoolData}
                />
                <Button
                    icon={<PlusOutlined />}
                    disabled={!newPattern}
                    onClick={addNewPoolData}
                />
            </Space>

            <Alert
                banner
                showIcon
                type="info"
                message={<span>
                    contoh pola spin title :&nbsp;
                    <strong style={{ fontWeight: 500, fontStyle: "italic" }}>
                        &#123;sepatuku|sepatumurah|sepatusneakers&#125; [title] &#123;[belakang]|[akhir]&#125;
                    </strong>
                </span>}
            />
            <AntdTextarea
                value={activeData?.data}
                placeholder="Pilih nama spin terlebih dahulu..."
                disabled={!activeData}
                autoSize={{ minRows: 2, maxRows: 6 }}
                onChange={setPoolData}
            />

            <Collapse bordered={false} items={[
                {
                    key: "1",
                    label: "Contoh Judul",
                    children: <Space direction="vertical" className="d-flex">
                        <Button
                            icon={<ReloadOutlined />}
                            disabled={!activeData}
                            onClick={() => activeData && setExample(activeData?.data)}
                        >Generate Ulang</Button>
                        <p>Judul :&nbsp;
                            <strong style={{ fontWeight: 500, fontStyle: "italic" }}>{example}</strong>
                        </p>
                    </Space>,
                }
            ]} />

            <div className="d-flex justify-content-end">
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    disabled={updateLoading}
                    loading={updateLoading}
                    onClick={saveData}
                >Simpan Semua Spin</Button>
            </div>
        </Space>
    </Card>
}

export default SpinTitleNew
