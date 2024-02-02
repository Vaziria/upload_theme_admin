import { FileSyncOutlined } from "@ant-design/icons"
import { Card, Col, Row, Statistic, Typography } from "antd"
import React from "react"

const HomePage: React.FC = () => {
    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Typography.Title level={3}>Bot Upload</Typography.Title>

            <Card bordered={false}>
                <Statistic
                    title="Cache Size"
                    value={11.28}
                    precision={2}
                    valueStyle={{ color: '#3f8600' }}
                    prefix={<FileSyncOutlined />}
                    suffix="MB"
                />
            </Card>
        </Col>
    </Row>
}

export default HomePage
