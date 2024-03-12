import { DeleteOutlined } from "@ant-design/icons"
import { Button, Card, Empty, List, Popconfirm, Space, Typography } from "antd"
import React from "react"

import toCurrency from "../../model/product"

export interface AggItem {
    id: number
    name: string
    count: number
    price_min: number
    price_max: number
    onDelete(): void
}

interface Props {
    items?: AggItem[]
}

const ListItems: React.FC<Props> = (props: Props) => {

    const [size, setSize] = React.useState(12)
    const showCount = (props.items?.length || 0) > size ? size : (props.items?.length || 0)

    return <div>
        <Typography.Text type="secondary" style={{ fontWeight: 400 }}>
            Menampilan {showCount} dari {props.items?.length || 0} hasil
        </Typography.Text>
        <List
            itemLayout="horizontal"
            dataSource={props.items}
            className="mt-3"
            footer={<></>}
            locale={{
                emptyText: <Empty
                    image={Empty.PRESENTED_IMAGE_SIMPLE}
                    description="Silahkan pilih collection terlebih dahulu"
                    className="mt-5"
                />,
            }}
            pagination={!!props.items?.length && props.items.length > 10 && {
                align: "center",
                pageSizeOptions: [12, 24, 48, 96],
                pageSize: size,
                showSizeChanger: true,
                onChange(_, pageSize) {
                    setSize(pageSize)
                },
            }}
            grid={{
                gutter: 16,
                xs: 1,
                sm: 1,
                md: 1,
                lg: 2,
                xl: 3,
                xxl: 4,
            }}
            renderItem={(item) => (
                <List.Item>
                    <Card size="small" hoverable>
                        <Space direction="vertical" className="d-flex">
                            <Typography.Text strong>
                                {item.name}
                            </Typography.Text>
                            <div>
                                <Typography.Text type="secondary" className="d-block" style={{ fontWeight: 400 }}>
                                    Jumlah : {item.count}
                                </Typography.Text>
                                <Typography.Text type="secondary" style={{ fontWeight: 400 }}>
                                    Range Harga : {toCurrency(item.price_min)} - {toCurrency(item.price_max)}
                                </Typography.Text>
                            </div>
                            <Popconfirm
                                key="delete_col_item"
                                title={`Hapus ${item.name}`}
                                description={`Yakin ingin menghapus ${item.name}`}
                                onConfirm={item.onDelete}
                                okText="Hapus"
                                okButtonProps={{
                                    danger: true,
                                }}
                                cancelText="Batal"
                            >
                                <Button
                                    danger
                                    type="primary"
                                    icon={<DeleteOutlined />}
                                >Hapus</Button>
                            </Popconfirm>
                        </Space>
                    </Card>
                </List.Item>
            )}
        />
    </div>
}

export default ListItems
