import { Col, Empty, Form, Row, Typography, message } from "antd"
import React from "react"

import { ShopeeAttributeResponse, getShopeeAttribute } from "../../../api/shopee/attribute"
import AttributeInput from "../../attribute/AttributeInput"

interface Props {
    categories?: number[]
}

const AttributeShopeeSpecsForm: React.FC<Props> = (props: Props) => {

    const { categories } = props
    const [shopeeAttribute, setShopeeAttribute] = React.useState<ShopeeAttributeResponse>({
        exist: false,
        attributes: []
    })

    React.useEffect(() => {
        if (categories && categories.length) {
            const catId = categories[categories.length - 1]
            getShopeeAttribute(catId).then((res) => {
                if (!res.exist) {
                    message.warning("Spesifikasi tidak ditemukan")
                }
                setShopeeAttribute(res)
            })
        }
    }, [categories])

    return <Row gutter={[16, 16]}>

        {!shopeeAttribute.exist && <Col span={24}>
            <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description={<Typography.Text type="secondary">
                    Spesifikasi tidak ditemukan, silahkan sinkronisasi&nbsp;
                    <Typography.Text strong type="warning">&quot;Atribut Shopee&quot;</Typography.Text>
                </Typography.Text>}
            />
        </Col>}

        {shopeeAttribute.attributes.map((attribute, index) => {
            return <Col key={attribute.attributeId} span={24} xl={12}>
                <Form.Item
                    name={["shopeeAttribute", "data", "attributes", index]}
                    label={<span style={{ whiteSpace: "normal", wordBreak: "break-word" }}>{attribute.displayName}</span>}
                    labelCol={{ span: 8 }}
                    className="mb-0"
                    required={attribute.mandatory}
                >
                    <AttributeInput attribute={attribute} />
                </Form.Item>
            </Col>
        })}
    </Row>
}

export default AttributeShopeeSpecsForm
