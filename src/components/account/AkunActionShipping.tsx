import { Space } from "antd"
import React from "react"

import { UploadConfig, UploadProductShipping, UploadShipping, useQuery } from "../../model/newapisdk"
import AntdCheckbox from "../common/AntdCheckbox"
import { useMutation } from "../../hooks/mutation"

const AkunActionShipping: React.FC = () => {

    const [uploadConfig, setUploadConfig] = React.useState<UploadConfig>({
        use_custom_shipping: false,
        shipping: []
    })
    const [shippings, setShippings] = React.useState<UploadProductShipping[]>([])

    const { send: getShippings } = useQuery("GetLegacyV4ShopeeUploadConfigProductShippingList")
    const { send: getConfigUpload } = useQuery("GetLegacyShopeeConfigUpload")
    const { mutate: putConfigUpload } = useMutation("PutLegacyShopeeConfigUpload")

    React.useEffect(() => {
        getShippings({
            onSuccess: setShippings,
        })
        getConfigUpload({
            onSuccess: setUploadConfig
        })
    }, [])

    React.useEffect(() => {
        putConfigUpload({}, uploadConfig)
    }, [uploadConfig])

    const fixshippings: UploadProductShipping[] = shippings.map((s) => {
        const channel = uploadConfig.shipping.find((ship) => s.channel_id === ship.channelid)
        const enabled = !!channel?.enabled
        return { ...s, enabled }
    })
    const indeterminate = fixshippings.some((s) => s.enabled)
    const checked = fixshippings.every((s) => s.enabled)

    return <Space direction="vertical" className="d-flex">
        <AntdCheckbox
            checked={uploadConfig.use_custom_shipping}
            style={{ fontWeight: 300 }}
            onChange={(use_custom_shipping) => setUploadConfig((config) => ({
                ...config,
                use_custom_shipping,
            }))}
        >Gunakan Shipping Custom</AntdCheckbox>

        <AntdCheckbox
            checked={checked}
            indeterminate={!checked && indeterminate}
            disabled={!uploadConfig.use_custom_shipping}
            style={{ fontWeight: 300 }}
            onChange={(check) => {
                if (check) {
                    setUploadConfig((config) => ({
                        ...config,
                        shipping: shippings.map((ship) => ({
                            channelid: ship.channel_id,
                            enabled: true,
                        }))
                    }))

                } else {
                    setUploadConfig((config) => ({
                        ...config,
                        shipping: shippings.map((ship) => ({
                            channelid: ship.channel_id,
                            enabled: false,
                        }))
                    }))
                }
            }}
        >Pilih Semua</AntdCheckbox>

        <Space wrap>
            {fixshippings.map((ship) => <AntdCheckbox
                key={ship.channel_id}
                checked={ship.enabled}
                disabled={!uploadConfig.use_custom_shipping}
                style={{ fontWeight: 300, width: 165 }}
                onChange={(enabled) => setUploadConfig(({ use_custom_shipping }) => {
                    return {
                        use_custom_shipping,
                        shipping: fixshippings.map<UploadShipping>((s) => {
                            return {
                                enabled: ship.channel_id === s.channel_id ? enabled : s.enabled,
                                channelid: s.channel_id,
                            }
                        })
                    }
                })}
            >
                {ship.display_name}
            </AntdCheckbox>)}
        </Space>
    </Space>
}

export default AkunActionShipping
