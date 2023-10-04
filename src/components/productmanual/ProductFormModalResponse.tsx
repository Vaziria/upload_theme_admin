import { Button, List, Modal, Space, Spin, Typography } from 'antd';
import React from 'react';
import { UpdateResponse } from '../../model/product_manual/ProductManualUpdate';

export interface BacthResponse extends UpdateResponse {
    pending: boolean
}

export interface Props {
    open: boolean
    isPublished: boolean
    loading: boolean
    publishLoading: boolean
    responses: BacthResponse[]
    onClose(): void
    onBack(): void
    onPublish(): void
}

export interface ResponseIconProps {
    pending: boolean
    success: boolean
}

const ResponseIcon: React.FC<ResponseIconProps> = (props: ResponseIconProps) => {

    if (props.pending) {
        return <Spin size="small" />
    }

    const type = props.success ? "success" : "danger"
    const icon = props.success ? "far fa-check-circle" : "far fa-times-circle"
    return <Typography.Text type={type}>
        <i className={icon} />
    </Typography.Text>
}

const ProductFormModalResponse: React.FC<Props> = (props: Props) => {
    const { open, isPublished, loading, publishLoading, responses, onClose, onBack, onPublish } = props

    const validToPublish = responses[0].success

    return <Modal
        open={open}
        centered
        maskClosable={false}
        title="Status Produk"
        onCancel={onClose}
        footer={[
            <Button
                key="back"
                disabled={loading}
                loading={loading}
                onClick={onBack}
            >
              Kembali
            </Button>,
            <Button
                key="publish"
                type="primary"
                disabled={!validToPublish || isPublished || loading || publishLoading}
                loading={loading || publishLoading}
                onClick={onPublish}
            >
              Tampilkan
            </Button>,
          ]}
    >
        <List
            dataSource={responses.filter((r) => r.message)}
            renderItem={({ message, success, pending }) => (
                <List.Item>
                    <Space>
                        <ResponseIcon success={success} pending={pending} />
                        <Typography.Text>
                            {pending ? "sedang dalam proses..." : message}
                        </Typography.Text>
                    </Space>
                </List.Item>
            )}
        />
    </Modal>
};

export default ProductFormModalResponse;