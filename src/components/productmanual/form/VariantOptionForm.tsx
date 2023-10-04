import { Card, Form, FormInstance, FormListFieldData, Space } from "antd";
import { NamePath } from "antd/es/form/interface";
import React from "react";

import { UpdateVariationPayload, VariantOption } from "../../../model/apisdk";

import AddButton from "../../button/AddButton";
import TrashIconButton from "../../button/TrashIconButton";
import OptionListForm from "./variantform/OptionListForm";
import OptionNameForm from "./variantform/OptionNameForm";

interface Props {
    form: FormInstance<UpdateVariationPayload>
}

export const initialOption: Partial<VariantOption> = {
    name: "",
    option: [""],
}

const VariantOptionForm: React.FC<Props> = (props: Props) => {

    const initialValue = Form.useWatch("variant_option", props.form)

    React.useEffect(() => {
        const names: NamePath[] = []
        initialValue?.forEach((options, index) => {
            options?.option.forEach((option, optindex) => {
                if (option) {
                    names.push(["variant_option", index, "name"])
                    names.push(["variant_option", index, "option", optindex])
                }
            })
        })

        names.length && props.form.validateFields(names)
    }, [initialValue])

    function getName(field: FormListFieldData): string {
        if (initialValue) {
            const option = initialValue[field.key]
            if (option) {
                return option.name
            }
        }
        return `Variasi ${field.name + 1}`
    }

    return <Form.Item<UpdateVariationPayload>>
        <Form.List
            name="variant_option"
            initialValue={initialValue}
        >
            {(fields, opt) => (<Space direction="vertical" className="d-flex">
                {fields.map((field) => (
                    <Card
                        key={field.key}
                        size="small"
                        type="inner"
                        title={getName(field)}
                        className="c-bg-gray"
                        extra={fields.length > 1 &&
                            <TrashIconButton onClick={() => opt.remove(field.name)} />
                        }
                    >
                        <div>
                            <label>Nama Variasi</label>
                            <OptionNameForm name={field.name} />
                        </div>
                        <OptionListForm name={field.name} />
                    </Card>
                ))}

                <div>
                    {fields.length < 2 &&
                        <AddButton
                            type="dashed"
                            style={{ minWidth: 200 }}
                            onClick={() => opt.add(initialOption)}
                        >
                            Tambah Variasi
                        </AddButton>
                    }
                </div>
            </Space>)}
        </Form.List>
    </Form.Item>
}

export default VariantOptionForm
