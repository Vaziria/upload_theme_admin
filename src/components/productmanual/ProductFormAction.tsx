import { Affix, Button, Card, Form, Space } from "antd";
import React from "react";

interface Props {
    loading: boolean
    onBack(): void
    onUpdate(): void
}

const ProductFormAction: React.FC<Props> = (props: Props): JSX.Element => {
    const { loading, onBack, onUpdate } = props

    return <Affix offsetBottom={0}>
        <Card size="small">
            <Form.Item wrapperCol={{ span: 24 }} className="d-flex justify-content-end mb-0">
                <Space>
                    <Button disabled={loading} onClick={onBack}>
                        Kembali
                    </Button>
                    <Button type="primary" disabled={loading} loading={loading} onClick={onUpdate}>
                        Simpan Produk
                    </Button>
                </Space>
            </Form.Item>
        </Card>
    </Affix>
}

export default ProductFormAction
