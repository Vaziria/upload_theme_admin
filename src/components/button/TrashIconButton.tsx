import { Button, ButtonProps } from "antd";
import React from "react";

const TrashIconButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <Button
        type="text"
        className="c-tx-gray-btn"
        icon={<i className="fas fa-trash" />}
        {...props}
    />
}

export default TrashIconButton
