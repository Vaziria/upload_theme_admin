import { DatabaseOutlined, DeleteOutlined, ExportOutlined } from "@ant-design/icons"
import { Button, Empty, List, Popconfirm, Space, Typography } from "antd"
import React from "react"

import { ProductNamespaceAgg } from "../../model/newapisdk"
import toCurrency from "../../model/product"

interface Props {
    namespaces?: ProductNamespaceAgg[]
    onSelect(col: ProductNamespaceAgg): void
    onDelete(col: ProductNamespaceAgg): void
}

const ListCollections: React.FC<Props> = (props: Props) => {
    return <List
        itemLayout="horizontal"
        dataSource={props.namespaces}
        style={{ width: 300 }}
        footer={<></>}
        locale={{
            emptyText: <Empty
                image={Empty.PRESENTED_IMAGE_SIMPLE}
                description="Collection kosong, silahkan grab"
                className="mt-5"
            />,
        }}
        renderItem={(item) => (
            <List.Item className="pl-3 list-hover" style={{ borderRight: 0 }}>
                <Space className="d-flex px-2" direction="vertical">
                    <Typography.Text
                        editable={{
                            text: item.name
                        }}
                        strong
                        className="mb-0"
                    >
                        <DatabaseOutlined /> {item.name} [ {item.count} ]
                    </Typography.Text>
                    <Typography.Text type="secondary" style={{ fontWeight: 400 }}>
                        {toCurrency(item.price_min)} - {toCurrency(item.price_max)}
                    </Typography.Text>
                    <Space>
                        <Button
                            type="primary"
                            size="small"
                            icon={<ExportOutlined />}
                            onClick={() => props.onSelect(item)}
                        >Buka</Button>

                        <Popconfirm
                            title={`Hapus ${item.name}`}
                            description={`Yakin ingin menghapus collection ${item.name}`}
                            onConfirm={() => props.onDelete(item)}
                            okText="Hapus"
                            okButtonProps={{
                                danger: true,
                            }}
                            cancelText="Batal"
                        >
                            <Button
                                danger
                                type="primary"
                                size="small"
                                icon={<DeleteOutlined />}
                            >Hapus</Button>
                        </Popconfirm>
                    </Space>
                </Space>
            </List.Item>
        )}
    />
}

export default ListCollections
