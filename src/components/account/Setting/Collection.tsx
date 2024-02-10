import { Space } from "antd"
import React from "react"
import { UploadMode } from "../../../api/bot_configuration"
import NamespaceSelect from "../../common/NamespaceSelectNew"
import ProductManualCollectionSelect from "../../common/ProductManualCollectionSelect"

interface IProps {
    mode: UploadMode
    value?: string
    update(collection: string): void
}

const Collection: React.FC<IProps> = (props: IProps) => {

    const { mode, value, update } = props

    if (mode === "shopee_manual") {
        return <Space.Compact className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Collection</span>
            </div>
            <ProductManualCollectionSelect
                value={value}
                placeholder="Pilih Collection"
                className="flex-1"
                onChange={update}
            />
        </Space.Compact>
    }

    return <Space.Compact className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Collection</span>
        </div>
        <NamespaceSelect
            showAll
            showCount
            marketplace={mode}
            value={value}
            placeholder="Pilih Collection"
            className="flex-1"
            onChange={(namspace) => update(namspace || "")}
        />
    </Space.Compact>
}

export default Collection
