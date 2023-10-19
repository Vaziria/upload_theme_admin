import { Card, Form, Input, InputNumber } from "antd";
import React from "react";

import { FormModel } from "../../model/product_manual/ProductManualForm";
import { descValidator, requiredValidator, titleValidator } from "./form/validator/basic_validator";
import { CheckFS, pathValidator } from "./form/validator/path_validator";
import { priceValidator } from "./form/validator/price_validator";
import { weightValidator } from "./form/validator/weight_validator";

import ImageCollectionSelect from "../common/ImageCollectionSelect";
import MarkupSelectNew from "../common/MarkupSelectNew";

interface Props {
    checker: CheckFS
}

const smInputCSS: React.CSSProperties = {
    minWidth: 200,
    width: 300
}

const ProductFormBasic: React.FC<Props> = (props: Props): JSX.Element => {
    const { checker } = props
    
    return <Card id="productbasic" className="mb-3">
        <h5 className="c-bold mb-3">Informasi Produk</h5>

        <Form.Item<FormModel>
            label="Koleksi Gambar"
            name={["basic","image_collection_path"]}
            rules={[requiredValidator, pathValidator(checker)]}
        >
            <ImageCollectionSelect className="w-100" />
        </Form.Item>

        <Form.Item<FormModel>
            label="Nama Produk"
            name={["basic", "title"]}
            rules={[requiredValidator, titleValidator]}
        >
            <Input placeholder="Mohon masukkan" showCount maxLength={255} />
        </Form.Item>

        <Form.Item<FormModel>
            label="Deskripsi Produk"
            name={["basic", "desc"]}
            rules={[requiredValidator, descValidator]}
        >
            <Input.TextArea showCount maxLength={3000} rows={8} />
        </Form.Item>

        <Form.Item<FormModel>
            label="Harga"
            name={["basic", "price"]}
            initialValue={0}
            rules={[requiredValidator, priceValidator]}
        >
            <InputNumber addonBefore="Rp" placeholder="Mohon masukkan" style={smInputCSS} />
        </Form.Item>

        <Form.Item<FormModel>
            label="Stok"
            name={["basic", "stock"]}
            initialValue={0}
            rules={[requiredValidator]}
        >
            <InputNumber placeholder="Mohon masukkan" style={smInputCSS} />
        </Form.Item>

        <Form.Item<FormModel>
            label="Berat"
            name={["basic", "weight"]}
            initialValue={0}
            rules={[requiredValidator, weightValidator]}
        >
            <InputNumber addonAfter="gr" placeholder="Mohon masukkan" style={smInputCSS} />
        </Form.Item>

        <Form.Item<FormModel>
            label="Markup"
            name={["basic", "use_markup"]}
        >
            <MarkupSelectNew style={smInputCSS} />
        </Form.Item>
    </Card>
}

export default ProductFormBasic
