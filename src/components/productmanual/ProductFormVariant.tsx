import { Card, Form, FormInstance } from "antd";
import React from "react";

import { BasicUpdatePayload, UpdateVariationPayload, Variant } from "../../model/apisdk";
import { CheckFS } from "./form/validator/path_validator";

import UseVariantForm from "./form/UseVariantForm";
import VariantOptionForm from "./form/VariantOptionForm";
import VariantDetailForm from "./form/VariantDetailForm";

interface Props {
    form: FormInstance<UpdateVariationPayload>
    formBasic: FormInstance<BasicUpdatePayload>
    checker: CheckFS
    initialVariants?: (Variant | undefined)[]
}

const ProductFormVariant: React.FC<Props> = (props: Props): JSX.Element => {

    const useVariant = Form.useWatch("use_variant", props.formBasic)

    return <Card id="productbasic" className="mb-3">
        <h5 className="c-bold mb-3">Variasi Produk</h5>

        <Form form={props.formBasic}>
            <UseVariantForm form={props.formBasic} variantForm={props.form} />
        </Form>

        <Form<UpdateVariationPayload>
            name="productvariation"
            form={props.form}
            autoComplete="off"
        >
            {useVariant && <>
                <VariantOptionForm form={props.form} />
                <VariantDetailForm
                    form={props.form}
                    cheker={props.checker}
                    initialVariants={props.initialVariants}
                />
            </>}
        </Form>
    </Card>
}

export default ProductFormVariant
