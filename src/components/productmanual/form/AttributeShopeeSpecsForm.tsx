import { Col, Empty, Form, Row, Spin, Typography } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { AttributePayload } from "../../../model/newapisdk"
import { shopeeAttributeFormState } from "../../../recoil/atoms/shopee_attribute"
import { isSelectMultiply } from "../../attribute/base"
import { requiredValidator } from "./validator/basic_validator"

import AttributeInput from "../../attribute/AttributeInput"

const AttributeShopeeSpecsForm: React.FC = () => {

    const { called, data, pending } = useRecoilValue(shopeeAttributeFormState)

    return <Spin spinning={pending} tip="Loading...">
        <Row gutter={[16, 16]}>

            {(!called || !data.exist) && <Col span={24}>
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={called ?
                        <Typography.Text type="secondary">
                            Spesifikasi tidak ditemukan, silahkan sinkronisasi&nbsp;
                            <Typography.Text strong type="warning">&quot;Atribut Shopee&quot;</Typography.Text>
                        </Typography.Text>
                        : "Pilih Kategori"
                    }
                />
            </Col>}

            <Form.Item shouldUpdate noStyle>
                {(form) => data.attributes.map((attribute, index) => {
                    const { attributeId, attributeInfo } = attribute
                    const { inputType, maxValueCount } = attributeInfo

                    const data: AttributePayload | undefined = form.getFieldValue(["shopeeAttribute", "data", "attributes", index])
                    const selected = data?.attribute_values.length || 0
                    const isMultiply = isSelectMultiply(inputType)

                    return <Col key={attributeId} span={24} xl={12}>
                        <Form.Item
                            name={["shopeeAttribute", "data", "attributes", index]}
                            label={<Typography.Text style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                                {attribute.displayName}
                                {isMultiply && <>
                                    <Typography.Text type="secondary" className="d-block" style={{ fontSize: 11 }}>
                                        {selected}/{maxValueCount}
                                    </Typography.Text>
                                </>}
                            </Typography.Text>}
                            labelCol={{ span: 8 }}
                            className="mb-0"
                            rules={attribute.mandatory ? [requiredValidator] : []}
                        >
                            <AttributeInput attribute={attribute} />
                        </Form.Item>
                    </Col>
                })}
            </Form.Item>
        </Row>
    </Spin>
}

export default AttributeShopeeSpecsForm
