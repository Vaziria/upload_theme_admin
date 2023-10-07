import { Drawer, DrawerProps } from "antd";
import React from "react";

const DrawerBottom: React.FC<DrawerProps> = (props: DrawerProps) => {
    return <Drawer
        placement="bottom"
        contentWrapperStyle={{
            maxWidth: "calc(100% - 16.666667%)",
            minHeight: "80%",
            left: "16.666667%"
        }}
        {...props}
    />
}

export default DrawerBottom
