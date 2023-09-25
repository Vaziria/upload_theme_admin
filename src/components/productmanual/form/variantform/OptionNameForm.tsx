import { Form, Input } from "antd"
import React from "react"
import { UpdateVariationPayload } from "../../../../model/apisdk"

interface Props {
    name: number
}

const OptionNameForm: React.FC<Props> = (props: Props) => {
    return <Form.Item<UpdateVariationPayload["variant_option"]>
        name={[props.name, "name"]}
        rules={[
            { required: true, message: "Kolom wajib diisi." }
        ]}
    >
        <div>
            <label>Nama Variasi</label>
            <Input
                id={"variant_option_" + props.name}
                maxLength={14}
                showCount
                placeholder="Warna"
            />
        </div>
    </Form.Item>
}

export default OptionNameForm
