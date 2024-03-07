import { AppstoreAddOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Card, InputNumber, Space } from "antd";
import React from "react";

import { SettingSpinData } from "../../model/newapisdk";
import AntdCheckbox from "../common/AntdCheckbox";
import AntdSelectAddon from "../common/AntdSelectAddon";
import AntdTextarea from "../common/AntdTextarea";

interface Props {
    data: SettingSpinData
    setData(v: SettingSpinData)
    updateLoading: boolean
    onUpdate(data: SettingSpinData): void
}

const SpinDesc: React.FC<Props> = (props: Props) => {

    const { data, setData, updateLoading, onUpdate } = props

    return <Card title={<><AppstoreAddOutlined /> Spin Additional</>}>
        <Space direction="vertical" className="d-flex">

            <Space direction="vertical" className="d-flex">
                <AntdCheckbox
                    checked={data.merek_ins_t}
                    style={{ fontWeight: 400 }}
                    onChange={(merek_ins_t) => setData({ ...data, merek_ins_t })}
                >inspect merek di judul</AntdCheckbox>

                <AntdCheckbox
                    checked={data.ignore_first_word}
                    style={{ fontWeight: 400 }}
                    onChange={(ignore_first_word) => setData({ ...data, ignore_first_word })}
                >hapus kata pertama di judul</AntdCheckbox>
            </Space>

            <AntdSelectAddon addon="Stock">
                <Space.Compact block style={{ width: 400 }}>
                    <InputNumber
                        value={data.smin}
                        min={0}
                        style={{
                            width: "calc(50% - 20px)",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                        }}
                        onChange={(v) => setData({ ...data, smin: v || 0 })}
                    />
                    <InputNumber
                        value={data.smax}
                        prefix="-&nbsp;&nbsp;&nbsp;&nbsp;"
                        min={0}
                        className="flex-1"
                        style={{
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderLeft: 0,
                        }}
                        onChange={(v) => setData({ ...data, smax: v || 0 })}
                    />
                </Space.Compact>
            </AntdSelectAddon>

            <div className="textarea-addon">
                <p className="textarea-addon-label py-1 m-0">Deskripsi</p>
                <AntdTextarea
                    value={data.desc}
                    rows={8}
                    placeholder="{sepatuku | sepatumurah | [sepatu]} [title] {[belakang] | [akhir]}"
                    style={{ background: "#fff" }}
                    bordered={false}
                    onChange={(desc) => setData({ ...data, desc })}
                />
            </div>

            <div className="d-flex justify-content-end">
                <Button
                    type="primary"
                    icon={<SaveOutlined />}
                    disabled={updateLoading}
                    loading={updateLoading}
                    onClick={() => onUpdate(data)}
                >Simpan Spin</Button>
            </div>
        </Space>
    </Card>
}

export default SpinDesc
