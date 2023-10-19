import { Card, Divider, Form, Space, Switch } from "antd";
import React from "react";

import { CheckFS } from "./form/validator/path_validator";

import { FormModel } from "../../model/product_manual/ProductManualForm";
import VariantDetailForm from "./form/VariantDetailForm";
import VariantOptionListForm from "./form/VariantOptionListForm";
import VariantImageForm from "./form/VariantImageForm";

interface Props {
    checker: CheckFS
}

const ProductFormVariant: React.FC<Props> = (props: Props): JSX.Element => {
    const { checker } = props

    return <Card id="productbasic" className="mb-3">
        <h5 className="c-bold mb-3">Variasi Produk</h5>

        <div className="c-flex c-justify-space-between">
            <p>Gunakan variasi untuk membuat produk makin beragam. Maksimal kombinasi 2 variasi.</p>
            <Form.Item<FormModel> name={["basic", "use_variant"]} valuePropName="checked">
                <Switch />
            </Form.Item>
        </div>

        <Form.Item<FormModel> noStyle shouldUpdate>
            {(form) => {
                const useVariant = form.getFieldValue(["basic", "use_variant"])

                return <Form.Item noStyle hidden={!useVariant}>
                    <Space direction="vertical" size="large" className="d-flex">
                        <VariantOptionListForm />
                        <Divider>Detail Variasi</Divider>
                        <VariantDetailForm>
                            {(index) => <VariantImageForm index={index} cheker={checker} />}
                        </VariantDetailForm>
                    </Space>
                </Form.Item>
            }}
        </Form.Item>
    </Card>
}

export default ProductFormVariant
