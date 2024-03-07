import { CodeOutlined, DeleteOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, Empty, InputNumber, Select, Space } from "antd";
import React from "react";
import { useRecoilState } from "recoil";

import { Markup } from "../../model/newapisdk";
import { markupDataState } from "../../recoil/atoms/markup";
import AntdInput from "../common/AntdInput";
import AntdSelectAddon from "../common/AntdSelectAddon";
import SpinMarkupItem from "./SpinMarkupItem";

interface Props {
    updateLoading: boolean
    onUpdate(data: Markup): void
    onAdd(data: Markup): void
    onActive(name: string, callback: (res: Markup) => void): void
    onDelete(names: string[]): void
    onCreateNameExist?(): void
}

const SpinMarkup: React.FC<Props> = (props: Props) => {

    const { updateLoading, onAdd, onUpdate, onActive, onDelete, onCreateNameExist } = props
    const [markups, setMarkups] = useRecoilState(markupDataState)

    const [activeMarkup, setActiveMarkup] = React.useState<Markup>({
        data: [],
        fix_mark: 0,
        name: ""
    })
    const [addMarkup, setAddMarkup] = React.useState<string>("")

    const options = markups.
        slice().
        sort((a, b) => a.localeCompare(b)).
        map((name) => ({
            label: name,
            value: name
        }))
    const addStatus = markups.includes(addMarkup) ? "warning" : ""

    function addNewData() {
        if (addStatus === "warning") {
            onCreateNameExist?.()

        } else {
            const markup: Markup = {
                data: [],
                fix_mark: 0,
                name: addMarkup
            }
            setMarkups([...markups, addMarkup])
            onAdd(markup)
            setActiveMarkup(markup)
            setAddMarkup("")
        }
    }

    function deleteData() {
        onDelete([activeMarkup.name])
        setMarkups((m) => m.filter((mup) => mup !== activeMarkup.name))
        setActiveMarkup({
            data: [],
            fix_mark: 0,
            name: ""
        })
    }

    return <Card title={<><CodeOutlined /> Spin Harga / Markup</>}>
        <Space direction="vertical" className="d-flex">

            <Space wrap>
                <AntdSelectAddon addon="Nama">
                    <Select
                        value={activeMarkup.name || undefined}
                        placeholder="Pilih nama markup"
                        style={{ width: 300 }}
                        options={options}
                        onChange={(name) => onActive(name, setActiveMarkup)}
                    />
                </AntdSelectAddon>
                <Button
                    danger
                    icon={<DeleteOutlined />}
                    disabled={!activeMarkup.name}
                    onClick={deleteData}
                />

                <AntdInput
                    status={addStatus}
                    value={addMarkup}
                    placeholder="Tambah nama"
                    onChange={setAddMarkup}
                    onPressEnter={addNewData}
                />
                <Button
                    icon={<PlusOutlined />}
                    disabled={!addMarkup}
                    onClick={addNewData}
                />
            </Space>

            <InputNumber
                value={activeMarkup.fix_mark}
                addonBefore="Biaya Tambahan"
                prefix="Rp. "
                style={{ width: 350 }}
                disabled={!activeMarkup.name}
                onChange={(val) => setActiveMarkup((v) => ({ ...v, fix_mark: val || 0 }))}
            />

            <Space direction="vertical" className="d-flex">
                {activeMarkup.data.map((item, key) => <SpinMarkupItem
                    key={key}
                    title={`Markup #${key + 1}`}
                    item={item}
                    onChange={(data) => setActiveMarkup((v) => ({
                        ...v,
                        data: v.data.map((d, dkey) => dkey === key ? data : d),
                    }))}
                    onDelete={() => setActiveMarkup((v) => ({
                        ...v,
                        data: v.data.filter((_, dkey) => dkey !== key),
                    }))}
                />)}
            </Space>

            {!activeMarkup.data?.length && <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={activeMarkup.name ? "Tidak ada markup ditemukan, silahkan tambah" : "Pilih nama terlebih dahulu"}
                className="py-3"
            />}

            <div className="d-flex justify-content-end" style={{ gap: 8 }}>
                <Button
                    type="primary"
                    icon={<PlusOutlined />}
                    disabled={!activeMarkup.name || updateLoading}
                    style={{
                        background: activeMarkup.name ? "#722ed1" : "#f9f0ff"
                    }}
                    onClick={() => setActiveMarkup((v) => ({
                        ...v,
                        data: [...v.data, {
                            mark: ">",
                            type: "number",
                            range: 0,
                            up: [0, 0]
                        }],
                    }))}
                >Tambah Markup</Button>

                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    disabled={!activeMarkup.name || updateLoading}
                    loading={updateLoading}
                    onClick={() => onUpdate(activeMarkup)}
                >Simpan Markup</Button>
            </div>
        </Space>
    </Card>
}

export default SpinMarkup
