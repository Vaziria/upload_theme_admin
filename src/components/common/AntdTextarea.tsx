import React from "react"
import { Input } from "antd"
import { TextAreaProps } from "antd/es/input"

interface Props extends Omit<TextAreaProps, "onChange"> {
  onChange?: (value: string) => void
}

const AntdTextarea: React.FC<Props> = (props: Props): JSX.Element => {

    const { onChange, ...inputProps } = props

    return <Input.TextArea
        {...inputProps}
        onChange={(ev) => onChange?.(ev.target.value)}
    />
}

export default AntdTextarea
