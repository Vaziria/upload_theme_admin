import React from "react"
import { Button, Space, message } from "antd"
import { ClusterOutlined, SaveOutlined } from "@ant-design/icons"
import { useMutation } from "react-query"
import { useRecoilValue } from "recoil"

import { UpdateMapperItem, updateCategoryMappers, tokopediaToShopeeAutosuggest } from "../../api/mapper"
import { mapperItemsState } from "../../recoil/atoms/mapper_items"
import { MarketList } from "../../model/Common"
import { MapperFilterData } from "./MapperFilter"

interface Props {
    filter: MapperFilterData
    mode: MarketList
}

const MapperAction: React.FC<Props> = (props: Props) => {

    const { mode, filter } = props

    const [messageApi, contextHolder] = message.useMessage();
    const items = useRecoilValue(mapperItemsState)

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
            .then(() => messageApi.open({
                type: "success",
                content: "Update mapping berhasil"
            }))
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
                icon={<ClusterOutlined rev={null} />}
                onClick={() => autoSuggestMutation.mutate()}
            >Auto Suggest</Button>
            
            {/* <Button
                type="primary"
                style={{ background: "#fa541c" }}
                icon={<ReloadOutlined rev={null} />}
            >Reset Mapping</Button> */}
            
            <Button
                type="primary"
                disabled={disabled}
                style={{ background: "#52c41a" }}
                icon={<SaveOutlined rev={null} />}
                onClick={() => saveMutation.mutate()}
            >Save Mapping</Button>
        </Space>
    </>
}

export default MapperAction
