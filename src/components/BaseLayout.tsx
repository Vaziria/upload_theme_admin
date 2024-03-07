import { MenuFoldOutlined, MenuUnfoldOutlined } from "@ant-design/icons";
import { Button, Layout, theme } from "antd";
import React from "react";

import BaseSider from "./BaseSider";

interface Props {
    children: React.ReactNode
}

const BaseLayout: React.FC<Props> = (props: Props) => {

    const [collapsed, setCollapsed] = React.useState(false)
    const { token: { colorBgContainer } } = theme.useToken()

    return <Layout>
        <BaseSider collapsed={collapsed} />
        <Layout className={collapsed ? "ani-ease-in" : "ani-ease-out"} style={{ marginLeft: collapsed ? 80 : 250 }}>
            <Layout.Header className="d-flex align-items-center pr-3" style={{
                padding: 0,
                background: colorBgContainer,
                position: "fixed",
                width: `calc(100% - ${collapsed ? 80 : 250}px)`,
                borderBottom: "1px solid rgba(217, 217, 217, 0.6)",
                height: 48,
                zIndex: 3
            }}>
                <Button
                    type="text"
                    icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
                    onClick={() => setCollapsed(!collapsed)}
                    style={{
                        fontSize: '16px',
                        width: 48,
                        height: 48,
                    }}
                />
            </Layout.Header>
            <Layout.Content
                className="px-3"
                style={{
                    minHeight: "calc(100vh - 48px)",
                    marginTop: 48
                }}
            >
                {props.children}
            </Layout.Content>
        </Layout>
    </Layout>
}

export default BaseLayout
