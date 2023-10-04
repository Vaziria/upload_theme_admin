import { Button, ButtonProps } from "antd";
import React from "react";

const DeleteButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <Button
        danger
        icon={<i className="fas fa-trash" />}
        {...props}
        className={["c-btn-active", props.className].join(" ")}
    />
}

export default DeleteButton
