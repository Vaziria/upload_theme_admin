import { Select, SelectProps } from "antd"
import React from "react"
import { useRecoilValue } from "recoil"

import { jakmallFilterDataState } from "../../../recoil/atoms/jakmall_filter"

type Props = Omit<SelectProps<string>, "options">

const SearchSortSelect: React.FC<Props> = (props: Props): JSX.Element => {

    const filterData = useRecoilValue(jakmallFilterDataState)
    return <Select
        options={filterData.sorts}
        {...props}
    />
}

export default SearchSortSelect