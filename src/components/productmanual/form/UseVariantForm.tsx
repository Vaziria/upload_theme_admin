import { Button, Form, FormInstance } from "antd";
import React from "react";

import { BasicUpdatePayload } from "../../../model/apisdk";

interface Props {
    form: FormInstance<BasicUpdatePayload>
    useVariant?: boolean
}

const UseVariantForm: React.FC<Props> = (props: Props) => {

    const useVariant = Form.useWatch("use_variant", props.form)

    const text = useVariant ? "Hapus Variasi" : "Gunakan Variasi"
    const icon = useVariant ? "fas fa-trash" : "fas fa-plus"

    return <Form.Item<BasicUpdatePayload> name="use_variant">
        <div className="c-flex c-justify-space-between">
            <p>Gunakan variasi untuk membuat produk makin beragam. Maksimal kombinasi 2 variasi.</p>
            <Button
                icon={<i className={icon} />}
                onClick={() => props.form.setFieldValue("use_variant", !useVariant)}
            >{text}</Button>
        </div>
    </Form.Item>
}

export default UseVariantForm
