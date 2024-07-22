import { Col, Row, message } from "antd"
import React from "react"

import EmailTools from "./Tools/EmailTools"
import ShopeeTools from "./Tools/ShopeeTools"

const ToolPageNew: React.FC = () => {

    const [messageApi, ctxholder] = message.useMessage()


    // const { mutate: deleteInbox } = useMutation("PostRunDeleteInbox")

    return <Row className="mt-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
            className="d-flex flex-column"
            style={{
                gap: "1rem",
            }}
        >
            <ShopeeTools onSuccess={messageApi.success} onError={messageApi.error} />
            <EmailTools onSuccess={messageApi.success} onError={messageApi.error} />
        </Col>
    </Row>
}

export default ToolPageNew
