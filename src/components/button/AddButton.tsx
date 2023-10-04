import { Button, ButtonProps } from "antd";
import React from "react";

const AddButton: React.FC<ButtonProps> = (props: ButtonProps) => {
    return <Button
        icon={<i className="fas fa-plus" />}
        {...props}
        className={["c-btn-active", props.className].join(" ")}
    />
}

export default AddButton
