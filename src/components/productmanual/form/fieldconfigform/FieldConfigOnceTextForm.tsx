import { Badge, Button, Drawer, Form, FormInstance, FormListFieldData } from "antd";
import React from "react";

import { UpdateFieldConfigPayload, UseOnceText } from "../../../../model/apisdk";
import { FieldType, fieldLabels } from "../../../../model/product_manual/FieldConfig";

import FieldConfigOnceTextListForm from "./FieldConfigOnceTextListForm";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    field: FormListFieldData
}

async function onceTextValidator(_, onceText: UseOnceText[]) {
    const emptyLen = onceText.filter((ot) => !ot.text).length
    if (emptyLen > 0) {
        return Promise.reject(`${emptyLen} kolom kosong.`)
    }
}

const FieldConfigOnceTextForm: React.FC<Props> = (props: Props) => {
    const { form, field } = props

    const [open, setOpen] = React.useState(false)

    const fieldType: FieldType = Form.useWatch(["field_spin", field.name, "field_type"], form)
    const label = fieldType && fieldLabels[fieldType]

    return <Form.List
        name={[props.field.name, "once_text"]}
        rules={[
            { validator: onceTextValidator },
        ]}
    >
        {(ifields, opt, { errors }) => (<>
            <Badge count={ifields.length}>
                <Button
                    danger={errors.length > 0}
                    type="dashed"
                    className="c-btn-active"
                    icon={<i className="fas fa-table" />}
                    onClick={() => setOpen(true)}
                >Buka Teks Sekali Pakai</Button>
            </Badge>

            <Form.ErrorList errors={errors} />

            <Drawer
                title={`${label} - Teks Sekali Pakai ( ${ifields.length} )`}
                placement="bottom"
                contentWrapperStyle={{
                    maxWidth: "calc(100% - 16.666667%)",
                    minHeight: "80%",
                    left: "16.666667%"
                }}
                open={open}
                onClose={() => setOpen(false)}
            >

                <FieldConfigOnceTextListForm
                    form={form}
                    parentField={field}
                    fields={ifields}
                    opt={opt}
                />

            </Drawer>
        </>
        )}
    </Form.List>
}

export default FieldConfigOnceTextForm
