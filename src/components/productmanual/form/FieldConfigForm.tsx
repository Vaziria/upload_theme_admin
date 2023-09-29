import { Button, Form, FormInstance, Select, SelectProps, Space } from "antd";
import React from "react";

import { DefaultOptionType } from "antd/es/select";
import { FieldConfig, UpdateFieldConfigPayload } from "../../../model/apisdk";

interface Props {
    form: FormInstance<UpdateFieldConfigPayload>
}

const fieldTypes = [
    "field_title",
    "field_desc"
] as const

export type FieldType = typeof fieldTypes[number]

interface FieldSelectProps extends Omit<SelectProps<FieldType>, "options"> {
    selected: FieldType[]
}

const labels: { [key in FieldType]: string } = {
    field_title: "Nama Produk",
    field_desc: "Deskripsi Produk",
}

const initialOption: Partial<FieldConfig> = {
	use_spin: false,
	spin_text: "",
	use_once_text: false,
	once_text: []
}

export const FieldSelect: React.FC<FieldSelectProps> = (props: FieldSelectProps) => {
    const { selected, ...selectProps } = props

    const options = fieldTypes.map<DefaultOptionType>((field) => ({
        value: field,
        label: labels[field],
        disabled: selected.includes(field),
    }))

    return <Select
        allowClear
        style={{
            width: 300
        }}
        placeholder="Pilih field"
        {...selectProps}
        options={options}
    />
}

const FieldConfigForm: React.FC<Props> = (props: Props) => {

    const [field, setField] = React.useState<FieldType>()
    const [fieldSelected, setFieldSelected] = React.useState<FieldType[]>([])

    const fieldSpin = Form.useWatch("field_spin", props.form)
    React.useEffect(() => {
        if (fieldSpin) {
            const selected = fieldSpin.map((fspin) => fspin?.field_type as FieldType)
            setFieldSelected(selected)
        }
    }, [fieldSpin])

    return <Form.Item<UpdateFieldConfigPayload> >
        <Form.List
            name="field_spin"
            initialValue={[]}
        >
            {(fields, opt) => (<div style={{ display: 'flex', rowGap: 16, flexDirection: 'column' }}>
                {fields.map((field) => (
                    <div key={field.key}>{JSON.stringify(field)}</div>
                ))}
                {/* {fields.map((field) => (
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
                ))} */}

                <Space>
                    <FieldSelect
                        value={field}
                        selected={fieldSelected}
                        onChange={setField}
                    />
                    <Button
                        type="dashed"
                        icon={<i className="fas fa-plus" />}
                        className="c-btn-active"
                        disabled={!field}
                        onClick={() => {
                            opt.add({
                                field_type: field,
                                initialOption
                            })
                            setField(undefined)
                        }}
                    >Tambah Config</Button>
                </Space>
            </div>)}
        </Form.List>
    </Form.Item>
}

export default FieldConfigForm
