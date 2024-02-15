import { Cascader, CascaderProps } from 'antd'
import React from 'react'
import { useRecoilValue } from "recoil"


import { shopeePublicCategoriesState } from '../../recoil/atoms/categories'
import type { CascaderOption } from "../../types/cascader"

interface Props extends Pick<CascaderProps, "style" | "disabled" | "className"> {
    level?: number
    value: number
    onChange?: (value: number, values: number[]) => void
    onOptionsChange?: (options: CascaderOption[]) => void
}

const ShopeeeCategoryPublicCascader: React.FC<Props> = (props: Props) => {

    const { onChange, onOptionsChange, level, value, ...reProps } = props

    const fixvalue: number[] = []
    const fixlevel = level || 2
    const categories = useRecoilValue(shopeePublicCategoriesState)
    const options: CascaderOption[] = categories.map((cat) => {

        let chidlrens: CascaderOption[] = []
        if (fixlevel > 1) {
            chidlrens = cat.sub.map((subcat) => {

                let subchidlrens: CascaderOption[] = []
                if (fixlevel > 2 && subcat.sub_sub) {
                    subchidlrens = subcat.sub_sub?.map((subsubcat) => {

                        if (subsubcat.catid === value) {
                            fixvalue.push(
                                cat.main.catid,
                                subcat.catid,
                                subsubcat.catid
                            )
                        }

                        return {
                            value: subsubcat.catid,
                            label: subsubcat.display_name,
                        }
                    })

                } else if (subcat.catid === value) {
                    fixvalue.push(
                        cat.main.catid,
                        subcat.catid
                    )
                }

                return {
                    value: subcat.catid,
                    label: subcat.display_name,
                    children: subchidlrens,
                }
            })

        } else if (cat.main.catid === value) {
            fixvalue.push(cat.main.catid)
        }

        return {
            value: cat.main.catid,
            label: cat.main.display_name,
            children: chidlrens,
        }
    })

    return <Cascader
        placeholder="pilih kategori shopee..."
        allowClear={false}
        {...reProps}
        value={fixvalue}
        options={options}
        onChange={(values, options) => {
            const val = values[values.length - 1] as number
            onChange?.(val || 0, values as number[])
            onOptionsChange?.(options)
        }}
    />
}

export default ShopeeeCategoryPublicCascader
