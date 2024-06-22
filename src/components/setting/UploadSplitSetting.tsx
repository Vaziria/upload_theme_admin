import { SplitCellsOutlined } from "@ant-design/icons"
import { Alert, Card, Space, Switch, message } from "antd"
import React from "react"

import { useMutation } from "../../hooks/mutation"
import { SettingAdvanced, useQuery } from "../../model/newapisdk"

const UploadSplitSetting: React.FC = () => {

    const [messageApi, ctxholder] = message.useMessage()
    const [setting, setSetting] = React.useState<SettingAdvanced>()

    const { send: getSetting, pending } = useQuery("GetShopeeV5ConfigConfigAdvanced")
    const { mutate: saveSetting } = useMutation("PutShopeeV5ConfigConfigAdvanced")

    function applySaveSetting(force_split: boolean) {
        if (setting) {
            const newsetting = { ...setting, force_split }
            setSetting(newsetting)
            saveSetting({
                onSuccess: () => messageApi.success("split produk saved"),
            }, newsetting)
        }
    }

    React.useEffect(() => {
        getSetting({ onSuccess: setSetting })
    }, [])

    return <Card className="mb-3" title={<>
        <SplitCellsOutlined /> Split Produk
    </>}>
        {ctxholder}
        <Space direction="vertical" size="middle" className="d-flex">
            <Alert message={<p className="mb-0">
                Produk split membuat produk yang displit memiliki gambar yang sama, hal berpotensi menjadikan produk tersebut <strong className="font-weight-bold">dibanned</strong>, pertimbangkan dengan bijak sebelum menggunakan
            </p>} type="warning" showIcon />

            <ul className="mb-0">
                <li>Produk split berlaku pada produk bervariasi, dengan gap harga atau jumlah variasi yang melebihi ketentuan</li>
                <li>Misal kategori A memiliki price gap 3x lipat, variasi yang melebihi 3x harga terendah akan diupload sebagai produk baru</li>
                <li>Misal juga maksimal variasi 20, variasi ke-21 sampai sekian akan diupload sebagai produk baru juga</li>
            </ul>

            <div className="d-flex">
                <Switch
                    disabled={pending}
                    checked={setting?.force_split}
                    onChange={applySaveSetting}
                />
                <p className="ml-2">
                    {setting?.force_split ?
                        "Split Produk Aktif" :
                        "Split Produk Tidak Aktif"
                    }
                </p>
            </div>
        </Space>
    </Card>
}

export default UploadSplitSetting
