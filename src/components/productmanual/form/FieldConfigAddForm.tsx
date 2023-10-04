import { Form, FormInstance, Select, Space } from "antd";
import { DefaultOptionType } from "antd/es/select";
import React from "react";

import { UpdateFieldConfigPayload } from "../../../model/apisdk";
import { FieldType, fieldLabels, fieldTypes } from "../../../model/product_manual/FieldConfig";

import AddButton from "../../button/AddButton";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
    onCreate(type: FieldType): void
}

const FieldConfigAddForm: React.FC<Props> = (props: Props): JSX.Element => {

    const { form, onCreate } = props

    const [field, setField] = React.useState<FieldType>()
    const [fieldSelected, setFieldSelected] = React.useState<FieldType[]>([])

    const fieldSpin = Form.useWatch("field_spin", form)
    React.useEffect(() => {
        if (fieldSpin) {
            const selected = fieldSpin.map((fspin) => fspin?.field_type as FieldType)
            setFieldSelected(selected)
        }
    }, [fieldSpin])

    const options = fieldTypes.map<DefaultOptionType>((field) => ({
        value: field,
        label: fieldLabels[field],
        disabled: fieldSelected.includes(field),
    }))

    function createField() {
        if (field) {
            onCreate(field)
        }
        setField(undefined)
    }

    return <Space>
        <Select
            allowClear
            style={{ width: 300 }}
            placeholder="Pilih field"
            value={field}
            onChange={setField}
            options={options}
        />
        <AddButton
            type="dashed"
            disabled={!field}
            onClick={createField}
        >Tambah Config</AddButton>
    </Space>
}

export default FieldConfigAddForm
