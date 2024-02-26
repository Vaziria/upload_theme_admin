import { Select, SelectProps } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { hastagDataState } from '../../recoil/atoms/hastag';

interface Props extends Omit<SelectProps<string, { label: string }>, "onChange"> {
    onChange?(value: string): void
}

function filterOption(input: string, option?: { label: string; value: string }) {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
}

const HastagSelectNew: React.FC<Props> = (props: Props) => {

    const { value, ...reprops } = props
    const hastags = useRecoilValue(hastagDataState)

    return <Select
        allowClear
        showSearch
        filterOption={filterOption}
        placeholder="pilih hastag"
        value={value || undefined}
        {...reprops}
        options={hastags.map((value) => ({
            value,
            label: value
        }))}
    />
}

export default HastagSelectNew
