import { Card, Form, FormInstance, FormListOperation, message } from "antd";
import React from "react";

import { useMutation } from "../../hooks/mutation";
import { UpdateFieldConfigPayload } from "../../model/apisdk";
import { FieldType } from "../../model/product_manual/FieldConfig";
import { getErrMessage } from "../../utils/errmsg";

import FieldConfigAddForm from "./form/FieldConfigAddForm";
import FieldConfigItemForm from "./form/FieldConfigItemForm";

interface Props {
    pid: number
    form: FormInstance<UpdateFieldConfigPayload>
}

const ProductFormFieldConfig: React.FC<Props> = (props: Props): JSX.Element => {

    const { pid, form } = props

    const { mutate: createField } = useMutation("PostPdcsourceSpinFieldConfig", {
        onSuccess: () => message.info("field config dibuat."),
        onError: (err) => {
            const msg = getErrMessage(err as Error, "gagal membuat field config.")
            message.error(msg)
        }
    })
    const { mutate: deleteField } = useMutation("DeletePdcsourceSpinFieldConfig", {
        onSuccess: () => message.info("field config dihapus."),
        onError: (err) => {
            const msg = getErrMessage(err as Error, "gagal menghapus field config.")
            message.error(msg)
        }
    })

    function applyCreate(field_type: FieldType, opt: FormListOperation) {
        createField({
            onSuccess(res) {
                opt.add(res.data)
            },
        }, {
            product_id: pid,
            field_type,
        })
    }

    function applyDelete(id: number, opt: FormListOperation, key: number) {
        deleteField({
            onSuccess() {
                opt.remove(key)
            },
        }, { id })
    }

    return <Card id="productfieldconfig" className="mb-3">
        <h5 className="c-bold mb-3">Field Config</h5>
        <p>Gunakan field config yang tersedia untuk meredaksi field produk ketika diupload.</p>

        <Form<UpdateFieldConfigPayload> form={form}>
            <Form.List name="field_spin" initialValue={[]}>
                {(fields, opt) => (
                    <div style={{
                        display: 'flex',
                        rowGap: 16,
                        flexDirection: 'column'
                    }}>
                        {fields.map((field) => (
                            <FieldConfigItemForm
                                key={field.key}
                                form={form}
                                field={field}
                                onDelete={(id) => applyDelete(id, opt, field.name)}
                            />
                        ))}

                        <FieldConfigAddForm
                            form={props.form}
                            onCreate={(type) => applyCreate(type, opt)}
                        />
                    </div>
                )}
            </Form.List>
        </Form>
    </Card>
}

export default ProductFormFieldConfig
