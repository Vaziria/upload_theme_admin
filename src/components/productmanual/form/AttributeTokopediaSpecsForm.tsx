import { Col, Empty, Form, Row, Select, Spin, Typography } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { tokopediaAttributeFormState } from "../../../recoil/atoms/tokopedia_attribute"


const AttributeTokopediaSpecsForm: React.FC = () => {

    const { called, data, pending } = useRecoilValue(tokopediaAttributeFormState)

    return <Spin spinning={pending} tip="Loading...">
        <Row gutter={[16, 16]}>

            {(!called || !data.exist) && <Col span={24}>
                <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description={called ?
                        <Typography.Text type="secondary">
                            Spesifikasi tidak ditemukan, silahkan sinkronisasi&nbsp;
                            <Typography.Text strong type="warning">&quot;Atribut Tokopedia&quot;</Typography.Text>
                        </Typography.Text>
                        : "Pilih Kategori"
                    }
                />
            </Col>}

            {data.exist && !data.attributes.length && <Col span={24}>
                <Empty description="Kategori tidak punya atribut" />
            </Col>}

            {data.attributes.map((attribute, index) => {

                return <Col key={index} span={24} xl={12}>
                    <Form.Item
                        name={["tokpedAttribute", "data", "attributes", index]}
                        label={<Typography.Text style={{ whiteSpace: "normal", wordBreak: "break-word" }}>
                            {attribute?.variant}
                        </Typography.Text>}
                        labelCol={{ span: 8 }}
                        className="mb-0"
                    >
                        <Select
                            allowClear={true}
                            options={attribute?.values.map((attr) => ({
                                label: attr.name,
                                value: attr.id.toString(),
                            }))}
                        />
                    </Form.Item>
                </Col>
            })}
        </Row>
    </Spin>
}

export default AttributeTokopediaSpecsForm
