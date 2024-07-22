import { Card, Col, List, Row } from "antd"
import React from "react"

import versions from "../versions"

const WhatsNews: React.FC = () => {
    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card title="What's News">
                <p>
                    Berisi update bot mulai dari versi <strong className="font-weight-bold">v6.0.98</strong> sampai seterusnya
                </p>

                <List
                    bordered
                    dataSource={Object.keys(versions)}
                    renderItem={(key) => (
                        <div key={key}>
                            <h5 className="mx-3 mt-3">{key}</h5>
                            <List.Item>
                                <ul className="mb-0">
                                    {versions[key].map((text, ind) => (
                                        <li key={ind}>{text}</li>
                                    ))}
                                </ul>
                            </List.Item>
                        </div>
                    )}
                />
            </Card>
        </Col>
    </Row>
}

export default WhatsNews
