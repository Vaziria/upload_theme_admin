import { AppstoreAddOutlined, MergeCellsOutlined, PlusOutlined, SaveOutlined } from "@ant-design/icons";
import { Button, Space } from "antd";
import React from "react";

import { GrabTasker } from "../../model/newapisdk";
import { MarketList } from "../../model/Common";
import { MarketplaceColor } from "../../const/mpcolor";

interface Props {
    mode: MarketList
    onAdd(task: Partial<GrabTasker>): void
    onSave(): void
    runGrabMode: {
        [key in MarketList]?: () => void
    }
    generateCsvLoading: boolean
    runGenerateCsv: {
        [key in MarketList]?: () => void
    }
}

const GrabTaskAction: React.FC<Props> = (props: Props) => {

    const { mode, onAdd, onSave, runGrabMode, generateCsvLoading, runGenerateCsv } = props;

    return <div className="d-flex justify-content-between">
        <Button
            type="primary"
            style={{ backgroundColor: MarketplaceColor[mode] }}
            className="c-tx-sm"
            icon={<MergeCellsOutlined />}
            loading={generateCsvLoading}
            onClick={runGenerateCsv[mode]}
        >GENERATE {mode.replaceAll("_", "").toUpperCase()} CSV</Button>

        <Space>
            <Button
                type="primary"
                className="c-tx-sm"
                icon={<PlusOutlined />}
                onClick={() => onAdd({})}
            >ADD</Button>

            <Button
                type="primary"
                style={{ backgroundColor: "#fa8c16" }}
                className="c-tx-sm"
                icon={<SaveOutlined />}
                onClick={onSave}
            >SAVE</Button>

            <Button
                type="primary"
                style={{ backgroundColor: MarketplaceColor[mode] }}
                className="c-tx-sm"
                icon={<AppstoreAddOutlined />}
                onClick={runGrabMode[mode]}
            >GRAB {mode.replaceAll("_", "").toUpperCase()}</Button>
        </Space>
    </div>
}

export default GrabTaskAction
