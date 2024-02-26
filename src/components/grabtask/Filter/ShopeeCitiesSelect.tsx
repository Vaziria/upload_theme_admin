import { Select, SelectProps } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";

import { shopeeCitiesState } from "../../../recoil/atoms/cities";

const CitiesSelect: React.FC<SelectProps> = (props: SelectProps) => {

    const shopeeCities = useRecoilValue(shopeeCitiesState)
    const options = shopeeCities.map((city) => ({
        label: city,
        value: city,
    }))

    return <Select
        mode="multiple"
        options={options}
        style={{ width: 300 }}
        {...props}
    />
}

export default CitiesSelect
