import { Button, Form, FormInstance, Modal } from "antd";
import React from "react";

import { BasicUpdatePayload, UpdateVariationPayload } from "../../../model/apisdk";
import { initialOption } from "./VariantOptionForm";

interface Props {
    form: FormInstance<BasicUpdatePayload>
    variantForm: FormInstance<UpdateVariationPayload>
}

const UseVariantForm: React.FC<Props> = (props: Props) => {

    const useVariant = Form.useWatch("use_variant", props.form)

    const text = useVariant ? "Hapus Variasi" : "Gunakan Variasi"
    const icon = useVariant ? "fas fa-trash" : "fas fa-plus"

    // const modal = Modal.info();
    function onUseVariant() {
        if (useVariant) {
            Modal.confirm({
                closable: true,
                maskClosable: true,
                centered: true,
                title: "Hapus Variasi?",
                content: <div className="my-3 mx-0">
                    Penghapusan variasi berefek pada hilangnya semua variasi beserta pilihannya.
                </div>,
                cancelButtonProps: {
                    style: {
                        width: "calc(50% - 4px)",
                    },
                },
                cancelText: "Batal",
                okButtonProps: {
                    style: {
                        width: "calc(50% - 4px)",
                    },
                },
                okText: "Hapus",
                onOk() {
                    props.form.setFieldValue("use_variant", false)
                    props.variantForm.setFieldValue("variant_option", [])
                }
            })

        } else {
            props.form.setFieldValue("use_variant", true)
            props.variantForm.setFieldValue("variant_option", [initialOption])
        }
    }

    return <Form.Item<BasicUpdatePayload> name="use_variant">
        <div className="c-flex c-justify-space-between">
            <p>Gunakan variasi untuk membuat produk makin beragam. Maksimal kombinasi 2 variasi.</p>
            <Button
                icon={<i className={icon} />}
                onClick={onUseVariant}
            >{text}</Button>
        </div>
    </Form.Item>
}

export default UseVariantForm
