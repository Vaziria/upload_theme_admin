import { ClearOutlined } from "@ant-design/icons"
import { Button, Card, Col, Row, Space, Typography, message } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import JakmallStat from "../components/home/JakmallStat"
import ProductManualStat from "../components/home/ProductManualStat"
import QlobotShopeeStat from "../components/home/QlobotShopeeStat"
import ShopeeStat from "../components/home/ShopeeStat"
import CacheStat from "../components/home/SizeStat"
import TokopediaStat from "../components/home/TokopediaStat"
import UpdateTokopedia from "../components/home/UpdateTokopedia"
import { useMutation } from "../hooks/mutation"
import { UpdateTopedCategoryPayload, useQuery } from "../model/newapisdk"
import { infoState } from "../recoil/atoms/info"

const HomePage: React.FC = () => {

    const [cacheCount, setCacheCount] = React.useState(0)
    const [loading, setLoading] = React.useState(false)
    const [clearLoading, setClearLoading] = React.useState(false)
    const [clearWebdriverLoading, serClearWebdriverLoading] = React.useState(false)

    const [messageApi, ctxholder] = message.useMessage()
    const info = useRecoilValue(infoState)

    const { send: getV1MainCacheSize, data: cacheSize } = useQuery("GetV1MainCacheSize")
    const { mutate: clearCache } = useMutation("DeleteV1MainClearCache")
    const { mutate: clearCacheWebdriver } = useMutation("DeleteV1MainClearCacheWebdriver")
    const { mutate: updateTokopediaCategory, pending: pendingTokpedCategory } = useMutation("PutTokopediaCategoryUpdateCategory")

    function applyCacheSize(reset: boolean) {
        setLoading(true)
        getV1MainCacheSize({
            query: { reset },
            onSuccess(res) {
                setLoading(false)
                if (res.processing) {
                    setCacheCount((count) => count + 1)
                }
            },
        })
    }

    function applyClearCache() {
        setClearLoading(true)
        clearCache({
            onSuccess() {
                setClearLoading(false)
                messageApi.info("temporary files cleared")
                applyCacheSize(true)
            },
        })
    }

    function applyClearCacheWebdriver() {
        serClearWebdriverLoading(true)
        clearCacheWebdriver({
            onSuccess() {
                serClearWebdriverLoading(false)
                messageApi.info("temporary webdriver files cleared")
                applyCacheSize(true)
            },
        })
    }

    function applyUpdateTokopediaCategory(data: UpdateTopedCategoryPayload) {
        updateTokopediaCategory({
            onSuccess() {
                messageApi.info("category tokopedia updated")
            },
        }, data)
    }

    React.useEffect(() => applyCacheSize(false), [cacheCount])

    return <Row className="mt-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Space direction="vertical" size="large" className="d-flex">
                <div>
                    <Typography.Title level={3} className="mb-0">Launcher Bot Upload v{info.version}</Typography.Title>
                    <Typography.Text type="secondary">Lisensi: {info.lisensi}</Typography.Text>
                </div>

                <UpdateTokopedia
                    loading={pendingTokpedCategory}
                    onUpdate={applyUpdateTokopediaCategory}
                />

                <Row gutter={[16, 16]}>
                    <Col
                        span={24}
                        md={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 8 }}
                    >
                        <Card bordered={false}>
                            <CacheStat
                                title="Temp Size"
                                color="#3f8600"
                                loading={cacheSize?.processing || loading}
                                sizeSum={cacheSize?.cache_size}
                            />
                            <Button
                                icon={<ClearOutlined />}
                                className="mt-3"
                                loading={clearLoading}
                                onClick={applyClearCache}
                            >Clear</Button>
                        </Card>
                    </Col>

                    <Col
                        span={24}
                        md={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 8 }}
                    >
                        <Card bordered={false}>
                            <CacheStat
                                title="Webdriver Temp Size"
                                color="#1677ff"
                                loading={cacheSize?.processing || loading}
                                sizeSum={cacheSize?.webdriver_size}
                            />
                            <Button
                                icon={<ClearOutlined />}
                                className="mt-3"
                                loading={clearWebdriverLoading}
                                onClick={applyClearCacheWebdriver}
                            >Clear</Button>
                        </Card>
                    </Col>

                    <Col
                        span={24}
                        md={{ span: 12 }}
                        xl={{ span: 12 }}
                        xxl={{ span: 8 }}
                    >
                        <Card bordered={false}>
                            <ShopeeStat />
                            <TokopediaStat />
                            <QlobotShopeeStat />
                            <JakmallStat />
                            <ProductManualStat />
                        </Card>
                    </Col>
                </Row>
            </Space>
        </Col>
    </Row>
}

export default HomePage
