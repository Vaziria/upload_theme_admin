import { Space } from "antd"
import React from "react"

import { UploadMode } from "../../../api/bot_configuration"
import { MarketList } from "../../../model/Common"
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

    let mp: MarketList = "shopee"
    switch (mode) {
        case "shopee":
        case "tokopedia":
        case "qlobot_shopee":
            mp = mode
            break

        case "jakmall_shopee":
            mp = "jakmall"
            break
    }

    return <Space.Compact className="input-group mb-3 input-group-sm">
        <div className="input-group-prepend">
            <span className="input-group-text" id="basic-addon3">Collection</span>
        </div>
        <NamespaceSelect
            showAll
            showCount
            marketplace={mp}
            value={value}
            placeholder="Pilih Collection"
            className="flex-1"
            onChange={(namspace) => update(namspace || "")}
        />
    </Space.Compact>
}

export default Collection
