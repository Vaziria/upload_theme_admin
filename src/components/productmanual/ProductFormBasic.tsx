import { Card, Form, FormInstance } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../model/apisdk";
import { CheckFS } from "./form/validator/path_validator";

import DescForm from "./form/DescForm";
import ImageCollectionPathForm from "./form/ImageCollectionPathForm";
import PriceForm from "./form/PriceForm";
import StockForm from "./form/StockForm";
import TitleForm from "./form/TitleForm";
import UseMarkupForm from "./form/UseMarkupForm";
import WeightForm from "./form/WeightForm";

interface Props {
    form: FormInstance<BasicUpdatePayload>
    checker: CheckFS
}

const ProductFormBasic: React.FC<Props> = (props: Props): JSX.Element => {
    return <Form<BasicUpdatePayload>
        name="basicProduct"
        form={props.form}
        className="mb-3"
        labelCol={{
            sm: 8,
            md: 8,
            lg: 5,
        }}
        wrapperCol={{
            sm: 16,
            md: 16,
            lg: 19,
        }}
        autoComplete="off"
        onFinish={(a) => console.log(a)}
        onFinishFailed={(a) => console.log(a)}
    >
        <Card id="productbasic">
            <h5 className="c-bold mb-3">Informasi Produk</h5>

            <ImageCollectionPathForm cheker={props.checker} />
            <TitleForm />
            <DescForm />
            <PriceForm />
            <StockForm />
            <WeightForm />
            <UseMarkupForm />
        </Card>
    </Form>
}

export default ProductFormBasic
