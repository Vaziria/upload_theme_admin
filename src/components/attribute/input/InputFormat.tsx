import { InputNumber, Typography } from "antd"
import React from "react"
import AntdInput from "../../common/AntdInput"

interface Props {
    formatType: number
    value?: string
    onChange?(value?: string): void
}

const InputFormat: React.FC<Props> = (props: Props) => {

    const { formatType, value, onChange } = props
    switch (formatType) {
        case 1:
            return <AntdInput
                className="w-100"
                value={value}
                onChange={(v) => onChange?.(v)}
            />

        case 2:
            return <InputNumber
                className="w-100"
                value={value}
                onChange={(v) => onChange?.(v || undefined)}
            />
    }

    return <Typography.Text type="secondary">
        Unsupported Format Type {formatType}
    </Typography.Text>
}

export default InputFormat
