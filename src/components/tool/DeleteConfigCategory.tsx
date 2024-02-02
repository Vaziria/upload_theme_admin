import { Button, Space, Switch } from "antd"
import React from "react"

import { DeleteProduct } from "../../model/newapisdk"
import ShopeeeCategoryCascader from "../shopee/ShopeeCategoryCascader"
import { DeleteOutlined, PlusOutlined } from "@ant-design/icons"

type Value = Pick<DeleteProduct, "fil_category" | "category">

interface Props {
    value: Value
    onChange(v: Value): void
}

const DeleteConfigCategory: React.FC<Props> = (props: Props) => {

    const { value, onChange } = props
    const categories = value.category.reduce((res, cat) => {
        const fixcat = cat.filter(c => c > 0)
        res.push(fixcat[fixcat.length - 1] || 0)
        return res
    }, [] as number[])

    function addCat() {
        onChange({
            ...value,
            category: [...value.category, [0, 0, 0]]
        })
    }

    function updateCat(index: number, categs: number[]) {
        onChange({
            ...value,
            category: value.category.map((cat, ind) => {
                if (ind === index) {
                    return categs
                }
                return cat
            })
        })
    }

    function deleteCat(index: number) {
        onChange({
            ...value,
            category: value.category.filter((_, ind) => !(ind === index))
        })
    }

    return <Space direction="vertical" className="d-flex">
        <div className="d-flex align-items-center" style={{ gap: 10 }}>
            <Switch
                id="delcategory"
                size="small"
                checked={value.fil_category}
                onChange={(fil_category) => onChange({
                    ...value,
                    fil_category,
                })}
            />
            <label htmlFor="delcategory" className="mb-0">
                Gunakan delete by category
            </label>
        </div>

        {value.fil_category && <Space direction="vertical" className="d-flex">
            {categories.map((cat, index) => (<div key={index} className="w-100 d-flex" style={{ gap: 6 }}>
                <ShopeeeCategoryCascader
                    value={cat}
                    className="flex-1"
                    onChange={(_, categs) => updateCat(index, categs)}
                />
                <Button
                    danger
                    type="text"
                    icon={<DeleteOutlined />}
                    onClick={() => deleteCat(index)}
                />
            </div>))}

            <Button
                type="primary"
                icon={<PlusOutlined />}
                onClick={addCat}
            >Tambah</Button>
        </Space>}
    </Space>
}

export default DeleteConfigCategory
