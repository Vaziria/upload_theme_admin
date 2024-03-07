import {
    AppstoreAddOutlined, AppstoreOutlined, BarChartOutlined,
    BranchesOutlined, DeliveredProcedureOutlined, FontSizeOutlined,
    HomeOutlined, OrderedListOutlined, SettingOutlined,
    ToolOutlined, UserOutlined, VerticalAlignMiddleOutlined
} from "@ant-design/icons";
import { Layout, Menu, Typography } from "antd";
import React from "react";
import { useHistory, useLocation } from "react-router";

import { Path } from "../routes/path";
import { useRecoilValue } from "recoil";
import { infoState } from "../recoil/atoms/info";

interface Props {
    collapsed: boolean;
}

interface MenuItem {
    name: string,
    path: Path,
    icon: React.ReactNode
}

const items: MenuItem[] = [
    {
        name: "Home",
        path: "/",
        icon: <HomeOutlined />
    },
    {
        name: "Spin",
        path: "/spin",
        icon: <FontSizeOutlined />
    },
    {
        name: "Setting",
        path: "/setting",
        icon: <SettingOutlined />
    },
    {
        name: "Akun",
        path: "/account",
        icon: <UserOutlined />
    },
    {
        name: "Task",
        path: "/task",
        icon: <OrderedListOutlined />
    },
    {
        name: "Tools",
        path: "/tool",
        icon: <ToolOutlined />
    },
    {
        name: "Grab",
        path: "/customgrab",
        icon: <AppstoreAddOutlined />
    },
    {
        name: "Product Manual",
        path: "/productmanual",
        icon: <DeliveredProcedureOutlined />
    },
    {
        name: "Import / Export",
        path: "/import_export",
        icon: <VerticalAlignMiddleOutlined />
    },
    {
        name: "Category Mapper",
        path: "/categmap",
        icon: <BranchesOutlined />
    },
    {
        name: "Detail Product",
        path: "/productstat",
        icon: <BarChartOutlined />
    },
    {
        name: "Tokopedia",
        path: "/toped",
        icon: <AppstoreOutlined />
    }
]

const BaseSider: React.FC<Props> = (props: Props) => {

    const history = useHistory()
    const location = useLocation()
    const info = useRecoilValue(infoState)

    const { pathname } = location

    return <Layout.Sider
        trigger={null}
        collapsible
        collapsed={props.collapsed}
        width={250}
        style={{
            overflow: "auto",
            height: "100vh",
            position: "fixed",
            left: 0,
            top: 0,
            bottom: 0
        }}
    >
        <Typography.Title
            level={3}
            className="pt-3 pb-2"
            style={{
                color: "#fff",
                textAlign: "center",
                fontWeight: 700,
                cursor: "pointer"
            }}
            onClick={() => history.push("")}
        >
            {props.collapsed ? "UL" : "Upload Launcher"}
            {!props.collapsed && <Typography.Text
                type="warning"
                className="d-block"
            >v{info.version}</Typography.Text>}
        </Typography.Title>
        <Menu
            theme="dark"
            mode="inline"
            selectedKeys={[pathname]}
            items={items.map((item) => ({
                key: item.path,
                icon: item.icon,
                label: item.name,
                onClick: () => history.push(item.path),
            }))}
        />
    </Layout.Sider>
}

export default BaseSider
