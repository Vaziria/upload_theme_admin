import { Button, Card, Form, FormInstance } from "antd";
import React from "react";

import { UpdateVariationPayload, VariantOption } from "../../../model/apisdk";
import OptionListForm from "./variantform/OptionListForm";
import OptionNameForm from "./variantform/OptionNameForm";
import { NamePath } from "antd/es/form/interface";

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

    return <Form.Item<UpdateVariationPayload>>
        <Form.List
            name="variant_option"
            initialValue={initialValue}
        >
            {(fields, opt) => (<div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                {fields.map((field) => (
                    <Card
                        key={field.key}
                        size="small"
                        type="inner"
                        title={
                            (initialValue && initialValue[field.key]?.name)
                                ? initialValue[field.key]?.name
                                : `Variasi ${field.name + 1}`
                        }
                        extra={fields.length > 1 &&
                            <Button
                                block
                                type="text"
                                className="c-tx-gray-btn"
                                onClick={() => opt.remove(field.name)}
                            ><i className="fas fa-trash" /></Button>
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
                        <Button
                            type="dashed"
                            icon={<i className="fas fa-plus" />}
                            className="c-btn-active"
                            onClick={() => opt.add(initialOption)}
                        >Tambah Variasi</Button>
                    }
                </div>
            </div>)}
        </Form.List>
    </Form.Item>
}

export default VariantOptionForm
