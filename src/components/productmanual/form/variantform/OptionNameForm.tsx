import { Form, FormInstance, Input } from "antd"
import React from "react"
import { UpdateVariationPayload, VariantOption } from "../../../../model/apisdk"

interface Props {
    name: number
}

type VariantForm = FormInstance<UpdateVariationPayload>

function nameValidator(form: VariantForm, name: number){
    return async (_: unknown, value: string) => {
        const options: Array<VariantOption | undefined> = form.getFieldValue("variant_option")

        const onlyOne = options.every((option, optindex) => {
            if (option?.name == value) {
                return name === optindex
            }
            return true
        })
        if (!onlyOne) {
            return Promise.reject("Nama variasi harus berbeda.")
        }

        Promise.resolve()
    }
}

const OptionNameForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<UpdateVariationPayload["variant_option"]>
        className="mb-3"
        name={[props.name, "name"]}
        rules={[
            { required: true, message: "Kolom wajib diisi." },
            (form) => ({
                validator: nameValidator(form as VariantForm, props.name),
            })
        ]}
    >   
        <Input
            id={"variant_option_" + props.name}
            maxLength={14}
            showCount
            placeholder="Warna"
        />
    </Form.Item>
}

export default OptionNameForm
