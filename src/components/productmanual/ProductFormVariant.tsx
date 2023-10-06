import { Card, Form, FormInstance } from "antd";
import React from "react";

import { BasicUpdatePayload, UpdateVariationPayload, Variant } from "../../model/apisdk";
import { CheckFS } from "./form/validator/path_validator";

import UseVariantForm from "./form/UseVariantForm";
import VariantDetailForm from "./form/VariantDetailForm";
import VariantImageForm from "./form/VariantImageForm";
import VariantOptionForm from "./form/VariantOptionForm";

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
                    initialVariants={props.initialVariants}
                    variantImage={(value) => <VariantImageForm
                        form={props.form}
                        index={value.var1Key}
                        cheker={props.checker}
                    />}
                />
            </>}
        </Form>
    </Card>
}

export default ProductFormVariant
