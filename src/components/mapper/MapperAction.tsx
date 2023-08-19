import React from "react"
import { Button, Space, message } from "antd"
import { ClusterOutlined, ReloadOutlined, SaveOutlined } from "@ant-design/icons"
import { useMutation } from "react-query"
import { useRecoilValue } from "recoil"

import { UpdateMapperItem, updateCategoryMappers } from "../../api/mapper"
import { mapperItemsState } from "../../recoil/atoms/mapper_items"


const MapperAction: React.FC = () => {

    const [messageApi, contextHolder] = message.useMessage();
    const items = useRecoilValue(mapperItemsState)

    async function updateMapping() {
        const data = items.map<UpdateMapperItem>((item) => ({
            shopee_id: item.shopee_id,
            tokpedia_id: item.tokpedia_id,
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
    const mutation = useMutation(updateMapping, {})

    return <>
        {contextHolder}
        <Space style={{ display: 'flex' }}>
            <Button
                icon={<ClusterOutlined rev={null} />}
            >Auto Suggest</Button>
            
            <Button
                type="primary"
                style={{ background: "#fa541c" }}
                icon={<ReloadOutlined rev={null} />}
            >Reset Mapping</Button>
            
            <Button
                type="primary"
                style={{ background: "#52c41a" }}
                icon={<SaveOutlined rev={null} />}
                onClick={() => mutation.mutate()}
            >Save Mapping</Button>
        </Space>
    </>
}

export default MapperAction
