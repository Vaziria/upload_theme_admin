import { Typography } from "antd"
import React from "react"

import { MarketList } from "../../model/Common"
import { GrabTasker } from "../../model/newapisdk"
import AntdCheckbox from "../common/AntdCheckbox"
import AntdInput from "../common/AntdInput"
import CategoryCascader from "../jakmall/input/CategoryCascader"
import ShopeeeCategoryPublicCascader from "../shopee/ShopeeCategoryPublicCascader"
import TokopediaCategoryCascader from "../tokopedia/TokopediaCategoryCascader"
import { GrabTaskMode } from "./GrabTaskModeSelect"

interface Props {
    item: GrabTasker
    onChange(data: Partial<GrabTasker>): void
}

const CategorySelect: React.FC<Props> = (props: Props) => {

    const { item, onChange } = props
    const mpmode = item.marketplace as MarketList
    const value = item.tokped_categ[item.tokped_categ.length - 1]

    switch (mpmode) {

        case "tokopedia":
            return <TokopediaCategoryCascader
                value={Number(value)}
                className="w-100"
            />

        case "jakmall":
            return <CategoryCascader
                value={item.jakmall_categs}
                className="w-100"
                onChange={(jakmall_categs) => onChange({ jakmall_categs })}
            />

        default:
            return <ShopeeeCategoryPublicCascader
                value={item.shopee_categ.catid}
                className="w-100"
                onChange={(catid, categs) => onChange({
                    shopee_categ: {
                        catid,
                        parent_category: categs[0] || 0,
                        parent_display_name: "",
                        display_name: "",
                        is_collection: 0
                    },
                })}
            />
    }
}

const title = <Typography.Text type="secondary" className="d-block mb-1">
    Extra Setting
</Typography.Text>

const GrabTaskItemExtraSetting: React.FC<Props> = (props: Props) => {

    const { item, onChange } = props
    const grabmode = item.mode as GrabTaskMode

    const useFilter = <AntdCheckbox
        checked={item.use_filter}
        onChange={(use_filter) => onChange({ use_filter })}
    >Gunakan Filter</AntdCheckbox>

    switch (grabmode) {
        case "category":
            return <div>{title}
                <CategorySelect {...props} />
            </div>

        case "keyword":
            return <div>{title}
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                    {useFilter}
                    <AntdInput
                        value={item.keyword}
                        className="flex-1"
                        addonBefore="Keyword Txt"
                        onChange={(keyword) => onChange({ keyword })}
                    />
                </div>
            </div>

        case "product_url":
            return <div>{title}
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                    {useFilter}
                    <AntdInput
                        value={item.product_url}
                        className="flex-1"
                        addonBefore="Url Txt"
                        onChange={(product_url) => onChange({ product_url })}
                    />
                </div>
            </div>

        case "toko_username":
            return <div>{title}
                <div className="d-flex align-items-center" style={{ gap: 10 }}>
                    {useFilter}
                    <AntdInput
                        value={item.toko_username}
                        className="flex-1"
                        addonBefore="Toko Txt"
                        onChange={(toko_username) => onChange({ toko_username })}
                    />
                </div>
            </div>
    }

    return <></>
}

export default GrabTaskItemExtraSetting
