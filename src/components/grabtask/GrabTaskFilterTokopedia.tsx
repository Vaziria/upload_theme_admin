import { Space } from "antd";
import React from "react";

import { TokopediaSettingGrab } from "../../api/tokopedia/grab_api";
import TokopediaSort from "./Filter/TokopediaSort";

interface Props {
    grabFilter: TokopediaSettingGrab
    setGrabFilter(v: Partial<TokopediaSettingGrab>): void
    onSave(): void;
}

const GrabTaskFilterTokopedia: React.FC<Props> = (props: Props) => {

    const { grabFilter, setGrabFilter } = props

    return <Space direction="vertical" size="large" className="d-flex">
        <TokopediaSort value={grabFilter.ob} onChange={(ob) => setGrabFilter({ ob })} />
    </Space>
}

export default GrabTaskFilterTokopedia
