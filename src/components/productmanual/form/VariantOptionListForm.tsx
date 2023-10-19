import { Form, Space } from "antd";
import React from "react";

import AddButton from "../../button/AddButton";
import VariantOptionItemForm from "./VariantOptionItemForm";


const VariantOptionListForm: React.FC = () => {
    return <Form.List name={["variant", "variant_option"]} initialValue={[]}>
        {(fields, opt) => {

            const showAddOption = fields.length < 2
            const showRemoveOption = fields.length > 1
            const addOption = () => opt.add({
                name: "",
                option: [""],
            })
            const removeOption = (index: number) => () => opt.remove(index)

            return <Space direction="vertical" size="large" className="d-flex">
                {fields.map((field) => {
                    return <VariantOptionItemForm
                        key={field.key}
                        field={field}
                        showRemove={showRemoveOption}
                        onRemove={removeOption(field.name)}
                    />
                })}

                {showAddOption && <div>
                    <AddButton type="dashed" style={{ minWidth: 200 }} onClick={addOption}>
                        Tambah Variasi
                    </AddButton>
                </div>}
            </Space>
        }}
    </Form.List>
}

export default VariantOptionListForm
