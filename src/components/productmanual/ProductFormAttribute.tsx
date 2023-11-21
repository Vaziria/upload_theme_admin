import { Card, Divider, Space } from "antd";
import React from "react";

import AttributeShopeeCategoryForm from "./form/AttributeShopeeCategoryForm";
import AttributeShopeeSpecsForm from "./form/AttributeShopeeSpecsForm";
import AttributeTokopediaCategoryForm from "./form/AttributeTokopediaCategoryForm";
import AttributeTokopediaSpecsForm from "./form/AttributeTokopediaSpecsForm";

const ProductFormAttribute: React.FC = (): JSX.Element => {

    return <Card id="productattribute" className="mb-3">
        <h5 className="c-bold mb-3">Atribut Produk</h5>

        <div className="c-flex c-justify-space-between mb-3">
            <p>Gunakan variasi untuk membuat produk makin beragam. Maksimal kombinasi 2 variasi.</p>
        </div>

        <Space direction="vertical" size="large" className="c-flex">
            <Card title="Shopee" size="small" type="inner" className="c-bg-gray">
                <Space direction="vertical" className="c-flex">
                    <AttributeShopeeCategoryForm />
                    <Divider>Spesifikasi</Divider>
                    <AttributeShopeeSpecsForm />
                </Space>
            </Card>

            <Card title="Tokopedia" size="small" type="inner" className="c-bg-gray">
                <Space direction="vertical" className="c-flex">
                    <AttributeTokopediaCategoryForm />
                    <Divider>Spesifikasi</Divider>
                    <AttributeTokopediaSpecsForm />
                </Space>
            </Card>
        </Space>
    </Card>
}

export default ProductFormAttribute
