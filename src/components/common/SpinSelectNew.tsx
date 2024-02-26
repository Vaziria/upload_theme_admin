import { Select, SelectProps } from 'antd';
import React from 'react';
import { useRecoilValue } from 'recoil';

import { spinDataState } from '../../recoil/atoms/spin';

interface Props extends Omit<SelectProps<string, { label: string }>, "onChange"> {
    onChange?(value: string): void
}

function filterOption(input: string, option?: { label: string; value: string }) {
    return (option?.label ?? '').toLowerCase().includes(input.toLowerCase())
}

const SpinSelectNew: React.FC<Props> = (props: Props) => {

    const { value, ...reprops } = props
    const spins = useRecoilValue(spinDataState)

    return <Select
        allowClear
        showSearch
        filterOption={filterOption}
        placeholder="pilih spin"
        value={value || undefined}
        {...reprops}
        options={spins.map((spin) => ({
            value: spin.name,
            label: spin.name
        }))}
    />
}

export default SpinSelectNew
