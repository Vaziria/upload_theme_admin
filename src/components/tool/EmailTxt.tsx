import { Alert, Input, Space } from "antd"
import { TextAreaProps } from "antd/es/input"
import React from "react"

import { EmailData } from "../../model/newapisdk"

interface Props extends Omit<TextAreaProps, "value" | "onChange"> {
    value?: Array<EmailData>
    onChange?(v: Array<EmailData>): void
}

const alert = <span>
    list email dipisah oleh line/enter dengan format <strong>&quot;email|password&quot;</strong>
</span>

const placeholder = `masukkan list email sesuai format
bambang@gmail.com|emailpass123
antarshop@antar.com|antar123
.....
....
...`

const EmailTxt: React.FC<Props> = (props: Props) => {

    const { value, onChange, ...reprops } = props

    return <Space direction="vertical" className="d-flex" size="middle">
        <Alert message={alert} type="info" showIcon />
        <Input.TextArea
            rows={20}
            placeholder={placeholder}
            value={value?.map((data) => {
                let v = data.email
                if (data.pass !== undefined) {
                    v += '|' + data.pass
                }
                return v
            }).join('\n')}
            {...reprops}
            onChange={(ev) => {
                const v = ev.target.value.split('\n')
                    .map<EmailData>((v) => {
                        const data = v.split('|')
                        return {
                            email: data[0] || "",
                            pass: data[1],
                        }
                    })
                onChange?.(v)
            }}
        />
    </Space>
}

export default EmailTxt
