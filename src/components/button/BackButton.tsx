import { Button, ButtonProps } from "antd";
import React from "react";

const BackButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <Button
        type="text"
        icon={<i className='fas fa-chevron-left' />}
        {...props}
    />
}

export default BackButton
