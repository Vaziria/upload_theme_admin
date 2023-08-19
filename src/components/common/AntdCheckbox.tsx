import React from 'react';
import { Checkbox } from 'antd';

import type { CheckboxProps } from 'antd';
import type { CheckboxChangeEvent } from 'antd/es/checkbox';

interface Props extends Omit<CheckboxProps, "onChange"> {
    onChange?: (check: boolean) => void;
}

const AntdCheckbox: React.FC<Props> = (props: Props) => {

    const onChange = (e: CheckboxChangeEvent) => {
        props.onChange?.(e.target.checked)
    };

    return <Checkbox
        {...props}
        onChange={onChange}
    />
};

export default AntdCheckbox;