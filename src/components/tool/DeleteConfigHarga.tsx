import { InputNumber, Space, Switch } from "antd"
import React from "react"

import { DeleteProduct } from "../../model/newapisdk"

type Value = Pick<DeleteProduct, "fil_harga" | "harga">

interface Props {
    value: Value
    onChange(v: Value): void
}

const DeleteConfigHarga: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props

    return <Space direction="vertical" className="d-flex">
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <Switch
                id="delharga"
                size="small"
                checked={value.fil_harga}
                onChange={(fil_harga) => onChange({
                    ...value,
                    fil_harga,
                })}
            />
            <label htmlFor="delharga" className="mb-0">
                Gunakan delete range harga
            </label>
        </div>

        {value.fil_harga && <Space.Compact className="w-100">
            <InputNumber
                value={value.harga.min}
                prefix="Rp. "
                className="w-100"
                onChange={(v) => onChange({
                    ...value,
                    harga: {
                        ...value.harga,
                        min: v || 0,
                    },
                })}
            />
            <InputNumber
                value={value.harga.max}
                prefix="Rp. "
                className="w-100"
                style={{
                    borderEndStartRadius: 0,
                    borderStartStartRadius: 0
                }}
                onChange={(v) => onChange({
                    ...value,
                    harga: {
                        ...value.harga,
                        max: v || 0,
                    },
                })}
            />
        </Space.Compact>}
    </Space>
}

export default DeleteConfigHarga
