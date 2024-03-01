import { LeftOutlined, LoadingOutlined, ReloadOutlined } from "@ant-design/icons"
import { Alert, Button, Card, Col, Empty, Row, Space, Spin } from "antd"
import React from "react"

import AntdSelectAddon from "../components/common/AntdSelectAddon"
import HastagSelectNew from "../components/common/HastagSelectNew"
import MarkupSelectNew from "../components/common/MarkupSelectNew"
import SpinSelectNew from "../components/common/SpinSelectNew"
import SpinExampleItem from "../components/spin/SpinExampleItem"
import { useGoBack } from "../hooks/back"
import { ExampleSpinProductsQuery, useQuery } from "../model/newapisdk"


const SpinPageExample: React.FC = () => {

    const goback = useGoBack()
    const [query, setQuery] = React.useState<ExampleSpinProductsQuery>({
        harga: "",
        hastag: "",
        polatitle: ""
    })
    const { send, data, pending } = useQuery("GetLegacyV1ExamplespinProducts")

    React.useEffect(() => send({ query }), [query])

    return <Row className="my-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card title={
                <Space size="large">
                    <Button
                        type="text"
                        icon={<LeftOutlined />}
                        className="mt-1"
                        onClick={() => goback("/spin")}
                    />
                    Spin Example
                </Space>
            }>

                <Space direction="vertical" size="large" className="d-flex">
                    <Alert
                        banner
                        showIcon
                        type="info"
                        message={<em>harga keseluruhan dibulatkan ke perseribuan</em>}
                    />

                    <Space direction="vertical" className="d-flex">

                        <Space wrap>
                            <AntdSelectAddon addon="Markup">
                                <MarkupSelectNew
                                    style={{ width: 200 }}
                                    onChange={(harga) => setQuery((q) => ({ ...q, harga }))}
                                />
                            </AntdSelectAddon>

                            <AntdSelectAddon addon="Polatitle">
                                <SpinSelectNew
                                    style={{ width: 200 }}
                                    onChange={(polatitle) => setQuery((q) => ({ ...q, polatitle }))}
                                />
                            </AntdSelectAddon>

                            <AntdSelectAddon addon="Hastag">
                                <HastagSelectNew
                                    style={{ width: 200 }}
                                    onChange={(hastag) => setQuery((q) => ({ ...q, hastag }))}
                                />
                            </AntdSelectAddon>
                        </Space>
                    </Space>

                    <Button
                        type="primary"
                        icon={<ReloadOutlined />}
                        onClick={() => send({ query })}
                    >Generate Ulang</Button>

                    {data?.map((item, key) => <SpinExampleItem key={key} item={item} />)}

                    {pending && <Spin
                        indicator={<LoadingOutlined style={{ fontSize: 24 }} spin />}
                        tip="Loading..."
                    >
                        <div className="d-flex justify-content-center py-5" />
                    </Spin>}

                    {!data?.length && !pending && <Empty
                        image={Empty.PRESENTED_IMAGE_SIMPLE}
                        description="Tidak ada produk ditemukan"
                        className="py-5"
                    />}
                </Space>
            </Card>
        </Col>
    </Row>
}

export default SpinPageExample
