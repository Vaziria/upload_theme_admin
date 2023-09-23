import { Button, Card, Col, Pagination, Row, Space, Tabs } from "antd";
import React from "react";
import { useHistory, useParams } from "react-router-dom";

import CollectionHeader from "../components/productmanual/CollectionHeader";
import ProductCard from "../components/productmanual/ProductCard";
import { ProductManualModel } from "../model/product_manual/ProductManual";
import items from "../samples/product_manual_items";

interface Params {
    collection_name: string
}

const itemModels = items.map((item) => new ProductManualModel(item))
const tabItems = [
    {
        label: 'Semua',
        key: '1',
    },
    {
        label: 'Aktif',
        key: '2',
    },
    {
        label: 'Draft',
        key: '3',
    }   
]

const ProductManualItems: React.FC = () => {

    const params = useParams<Params>()
    const history = useHistory()

    function openForm(productId?: number) {
        const url = `/productmanual/${params.collection_name}/form`
        if (productId) {
            history.push(url + "/" + productId, { fromParent: true })
        } else {
            history.push(url, { fromParent: true })
        }
    }

    return <Row className="mt-3">
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Card>
                <CollectionHeader title={params.collection_name} />

                <p className="c-bolder mt-2">
                    <span className="c-tx-gray">Total Produk :</span> {items.length}
                </p>

                <Tabs defaultActiveKey="1" items={tabItems} tabBarExtraContent={{
                    right: <Button
                        type="primary"
                        icon={<i className='fas fa-plus' />}
                        onClick={() => openForm()}
                    >
                        Tambah
                    </Button>
                }}/>

                <Row gutter={[12, 12]}>
                {itemModels.map((item, key) =>
                    <Col
                        key={key}
                        xs={{ span: 24 }}
                        sm={{ span: 24 }}
                        md={{ span: 12 }}
                        lg={{ span: 12 }}
                        xl={{ span: 8 }}
                        xxl={{ span: 6 }}
                    >
                        <ProductCard product={item} onEdit={() => openForm(item.id)} />
                    </Col>
                )}
                </Row>

                <Space className="mt-3 c-flex c-justify-center">
                    <Pagination
                        current={1}
                        pageSize={1}
                        total={15}
                        pageSizeOptions={[10, 20, 30, 50]}
                    />
                </Space>
            </Card>
        </Col>
    </Row>
}

export default ProductManualItems
