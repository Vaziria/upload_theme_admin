import { ClusterOutlined, SaveOutlined } from "@ant-design/icons"
import { Button, Space, message } from "antd"
import React from "react"
import { useMutation } from "react-query"
import { useRecoilState } from "recoil"

import { UpdateMapperItem, tokopediaToShopeeAutosuggest, updateCategoryMappers } from "../../api/mapper"
import { MarketList } from "../../model/Common"
import { mapperItemsState } from "../../recoil/atoms/mapper_items"
import { MapperFilterData } from "./MapperFilter"

interface Props {
    filter: MapperFilterData
    mode: MarketList
}

const MapperAction: React.FC<Props> = (props: Props) => {

    const { mode, filter } = props

    const [messageApi, contextHolder] = message.useMessage();
    const [items, setItems] = useRecoilState(mapperItemsState)

    async function autoSuggest() {
        return tokopediaToShopeeAutosuggest(filter.namespace || "")
            .then(() => messageApi.open({
                type: "info",
                content: "Running auto suggest"
            }))
            .catch(() => messageApi.open({
                type: "error",
                content: "Failed to run auto suggest"
            }))
    }
    const autoSuggestMutation = useMutation(autoSuggest, {})

    async function saveMapping() {
        const data = items
            .filter((item) => !!item.shopee_id)
            .map<UpdateMapperItem>((item) => ({
                shopee_id: item.shopee_id,
                tokopedia_id: item.tokopedia_id,
            }))
        
        return updateCategoryMappers(data)
            .then(() => {
                setItems(items.map((item) => ({
                    ...item,
                    unmapped: item.shopee_id === 0
                })))

                messageApi.open({
                    type: "success",
                    content: "Update mapping berhasil"
                })
            })
            .catch(() => messageApi.open({
                type: "error",
                content: "Update mapping gagal"
            }))
    }
    const disabled = mode === "shopee" || !filter.namespace
    const saveMutation = useMutation(saveMapping, {})

    return <>
        {contextHolder}
        <Space style={{ display: 'flex' }}>
            <Button
                disabled={disabled}
                icon={<ClusterOutlined />}
                onClick={() => autoSuggestMutation.mutate()}
            >Auto Suggest</Button>
            
            {/* <Button
                type="primary"
                style={{ background: "#fa541c" }}
                icon={<ReloadOutlined />}
            >Reset Mapping</Button> */}
            
            <Button
                type="primary"
                disabled={disabled}
                style={{ background: "#52c41a" }}
                icon={<SaveOutlined />}
                onClick={() => saveMutation.mutate()}
            >Save Mapping</Button>
        </Space>
    </>
}

export default MapperAction
