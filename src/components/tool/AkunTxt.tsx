import { Alert, Input, Space } from "antd"
import { TextAreaProps } from "antd/es/input"
import React from "react"

interface Props extends Omit<TextAreaProps, "onChange"> {
    onChange?(v: string): void
}

const alert = <span>
    list akun dipisah oleh line/enter dengan format <strong>&quot;username|password|email|email_password&quot;</strong>
</span>

const placeholder = `masukkan list akun sesuai format
bambang|pass123|bambang@gmail.com|emailpass123
antarshop|antar123|antarshop@antar.com|antar123
.....
....
...`

const AkunTxt: React.FC<Props> = (props: Props) => {

    const { onChange, ...reprops } = props

    return <Space direction="vertical" className="d-flex" size="middle">
        <Alert message={alert} type="info" showIcon />
        <Input.TextArea
            rows={20}
            placeholder={placeholder}
            {...reprops}
            onChange={(ev) => onChange?.(ev.target.value)}
        />
    </Space>
}

export default AkunTxt
