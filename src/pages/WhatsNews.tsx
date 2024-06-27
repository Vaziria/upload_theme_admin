import { Card, Col, List, Row } from "antd"
import React from "react"

const data = [
    {
        title: "v6.0.98",
        items: [
            "Adding setting split produk",
            "Fix tokopedia banned kata di judul case sensitive",
            "Fix tokopedia upload gambar panduan ukuran",
            "Fix tokopedia upload gambar duplikat"
        ],
    },
    {
        title: "v6.0.99",
        items: [
            "Fix tokopedia variasi karakter minimal 3",
            "Fix upload advanced config nil",
        ],
    },
]


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
                    dataSource={data}
                    renderItem={(item) => (
                        <div key={item.title}>
                            <h5 className="mx-3 mt-3">{item.title}</h5>
                            <List.Item>
                                <ul className="mb-0">
                                    {item.items.map((text, ind) => (
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
