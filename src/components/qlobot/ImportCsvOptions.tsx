import { InputNumber } from "antd"
import React from "react"

import { QlobotShopeeImportCSVQuery } from "../../model/newapisdk"
import AntdInput from "../common/AntdInput"

interface Props {
    options: QlobotShopeeImportCSVQuery
    onChange: (data: Partial<QlobotShopeeImportCSVQuery>) => void
}

const ImportCsvOptions: React.FC<Props> = (props: Props) => {

    const { options, onChange } = props

    return <div className="d-flex" style={{ gap: 10 }}>
        <div className="flex-1">
            <label htmlFor="namespace">Nama Collection</label>
            <AntdInput
                id="namespace"
                value={options.namespace}
                placeholder="Masukkan nama collection..."
                onChange={(namespace) => onChange({ namespace })}
            />
        </div>

        <div className="flex-1">
            <label htmlFor="peritem">Item / Proses</label>
            <InputNumber
                id="peritem"
                value={options.per_item}
                className="d-block"
                style={{ minWidth: 200 }}
                onChange={(v) => onChange({ per_item: v || 50 })}
            />
        </div>
    </div>
}

export default ImportCsvOptions
