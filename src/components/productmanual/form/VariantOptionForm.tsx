import { Button, Card, Form } from "antd";
import React from "react";

import { UpdateVariationPayload, VariantOption } from "../../../model/apisdk";
import OptionListForm from "./variantform/OptionListForm";
import OptionNameForm from "./variantform/OptionNameForm";

const initialValue: Partial<VariantOption>[] = [{
    name: "",
    option: [""],
}]

const VariantOptionForm: React.FC= () => {

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
                        title={`Variasi ${field.name + 1}`}
                        extra={fields.length > 1 &&
                            <Button
                                block
                                type="text"
                                className="c-tx-gray-btn"
                                onClick={() => opt.remove(field.name)}
                            ><i className="fas fa-trash" /></Button>
                        }
                    >
                        <OptionNameForm name={field.name} />
                        <OptionListForm name={field.name} />
                    </Card>
                ))}

                {fields.length < 2 &&
                    <Button
                        block
                        type="dashed"
                        icon={<i className="fas fa-plus" />}
                        onClick={() => opt.add(initialValue)}
                    >Tambah Variasi</Button>
                }
            </div>)}
        </Form.List>
    </Form.Item>
}

export default VariantOptionForm
