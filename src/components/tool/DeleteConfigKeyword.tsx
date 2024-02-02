import { Input, Space, Switch } from "antd"
import React from "react"

import { DeleteProduct } from "../../model/newapisdk"

type Value = Pick<DeleteProduct, "fil_keyword" | "keyword">

interface Props {
    value: Value
    onChange(v: Value): void
}

const DeleteConfigKeyword: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    return <Space direction="vertical" className="d-flex">
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <Switch
                id="delkeyword"
                size="small"
                checked={value.fil_keyword}
                onChange={(fil_keyword) => onChange({
                    ...value,
                    fil_keyword,
                })}
            />
            <label htmlFor="delkeyword" className="mb-0">
                Gunakan delete by keyword
            </label>
        </div>

        {value.fil_keyword && <Input.TextArea
            value={value.keyword}
            rows={3}
            onChange={(ev) => onChange({
                ...value,
                keyword: ev.target.value,
            })}
        />}
    </Space>
}

export default DeleteConfigKeyword
