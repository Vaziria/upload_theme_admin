import { Form, FormListFieldData, Radio, RadioChangeEvent } from "antd";
import React from "react";

import { FieldConfig } from "../../../../model/apisdk";

interface Props {
    field: FormListFieldData
    value?: Partial<FieldConfig>
    onChange?(v: Partial<FieldConfig>): void
}

const RadioForm: React.FC<Props> = (props: Props) => {
    const { value, onChange } = props
    const [radioValue, setRadioValue] = React.useState<string>()
    
    React.useEffect(() => {
        if (value) {
            setRadioValue(() => {
                if (value.use_spin) {
                    return "use_spin"
                }
                if (value.use_once_text) {
                    return "use_once_text"
                }

                return undefined
            })
        }
    }, [value])

    function onRadioChange(e: RadioChangeEvent) {
        const spin: Partial<FieldConfig> = {
            ...value,
            use_spin: false,
            use_once_text: false,
        }

        switch (e.target.value) {
            case "use_spin":
                spin.use_spin = true
                return onChange?.(spin)
            
            case "use_once_text":
                spin.use_once_text = true
                return onChange?.(spin)
            
            default:
                return onChange?.(spin)
        }
    }

    return <Radio.Group value={radioValue} onChange={onRadioChange}>
        <Radio.Button>Default</Radio.Button>
        <Radio.Button value="use_spin">Gunakan Spin</Radio.Button>
        <Radio.Button value="use_once_text">Gunakan Teks Sekali Pakai</Radio.Button>
    </Radio.Group>
}

const FieldConfigRadioForm: React.FC<Props> = (props: Props) => {
    return <Form.Item
        className="mb-3 mt-1"
        name={props.field.name}
    >
        <RadioForm {...props} />
    </Form.Item>
}

export default FieldConfigRadioForm
