import React from "react"
import { Input, InputProps } from "antd"

interface Props extends Omit<InputProps, "onChange"> {
  onChange: (value: string) => void
}

const AntdInput: React.FC<Props> = (props: Props): JSX.Element => {

    const { onChange, ...inputProps } = props

    return <Input
        {...inputProps}
        onChange={(ev) => onChange(ev.target.value)}
    />
}

export default AntdInput