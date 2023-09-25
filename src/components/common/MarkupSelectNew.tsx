import React from 'react';
import { Select, SelectProps } from 'antd';
import { useRecoilValue } from 'recoil';

import { markupDataState } from '../../recoil/atoms/markup'

interface Props extends Omit<SelectProps<string, { label: string }>, "onChange"> {
    onChange?(value: string): void
}

function filterOption(input: string, option?: { label: string; value: string }) {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
}

const MarkupSelectNew: React.FC<Props> = (props: Props) => {

    const markups = useRecoilValue(markupDataState)

    return <Select
        allowClear
        showSearch
        filterOption={filterOption}
        {...props}
        options={markups.map((value) => ({
            value,
            label: value
        }))}
    />
}

export default MarkupSelectNew
