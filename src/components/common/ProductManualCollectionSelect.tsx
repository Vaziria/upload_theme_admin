import { Select, SelectProps } from "antd";
import React from "react";
import { useRecoilValue } from "recoil";

import { collectionSelectState } from "../../recoil/atoms/collection_list";
import { DefaultOptionType } from "antd/es/select";

type Props = Omit<SelectProps<string>, "options">

const ProductManualCollectionSelect: React.FC<Props> = (props: Props) => {

    const { value, ...searchProps } = props;

    const collections = useRecoilValue(collectionSelectState)
    const options = collections.map((collection) => ({
        value: collection?.name,
        label: collection?.name,
    }))

    const inCollection = collections.some((col) => col?.name === value)

    function filterOption(input: string, option?: DefaultOptionType) {
        const label = option?.label?.toString().toLocaleLowerCase()
        return (label ?? "").includes(input.toLocaleLowerCase())
    }

    return <Select
        showSearch
        value={inCollection ? value : undefined}
        options={options}
        filterOption={filterOption}
        {...searchProps}
    />
}

export default ProductManualCollectionSelect