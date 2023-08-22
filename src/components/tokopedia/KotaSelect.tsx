import React from "react"
import { useRecoilValue } from "recoil"
import { Select, SelectProps } from "antd";

import { tokopediaCitiesState } from "../../recoil/atoms/cities";
import { DefaultOptionType } from "antd/es/select";


interface Props extends Omit<SelectProps, "value" | "onChange" | "onSearch" | "mode"> {
    value: string[]
    onChange?: (value: string[]) => void
}

const KotaSelect: React.FC<Props> = (props: Props) => {

    const { value, onChange, ...selectProps } = props

    const cities = useRecoilValue(tokopediaCitiesState)
    const options: DefaultOptionType[] = [...cities]
        .sort((a, b) => a.name > b.name ? 1 : -1)
        .map<DefaultOptionType>((city) => ({
            label: city.name,
            value: city.value,
        }))
    
    function onValueChange(values: string[]) {
        values.forEach((v, index) => {
    
            const numV = parseInt(v)
            if (isNaN(numV)) {
                const city = cities.find((c) => c.name.toLowerCase() === v.toLowerCase())
                if (city) {
                    values[index] = city?.value
                }
            }
        })

        onChange?.(values)
    }

    return <Select
        {...selectProps}
        options={options}
        mode="multiple"
        placeholder="pilih kota..."
        value={value}
        filterOption={(search, option) => (option?.label?.toString() ?? '')
            .toLowerCase()
            .includes(search.toLowerCase())
        }
        onChange={onValueChange}
    />
}


export default KotaSelect
