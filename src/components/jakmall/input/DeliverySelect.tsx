import { Select } from "antd"
import { SelectProps } from "antd/es/select"
import React from "react"
import { useRecoilValue } from "recoil"

import { jakmallFilterDataState } from "../../../recoil/atoms/jakmall_filter"

type Props = Omit<SelectProps<string[]>, "mode" | "options">

const DeliverySelect: React.FC<Props> = (props: Props): JSX.Element => {

    const filterData = useRecoilValue(jakmallFilterDataState)
    const options: { label: string, value: string }[] = []
    for (const value of Object.values(filterData.delivery_types)) {
        options.push({
            label: value,
            value
        })
    }

    const sortOptions = options.sort(function (a, b) {
        return a.value.localeCompare(b.value);
    })

    return <Select
        mode="multiple"
        options={sortOptions}
        {...props}
    />
}

export default DeliverySelect
