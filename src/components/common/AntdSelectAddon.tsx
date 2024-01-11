import { SelectProps } from "antd";
import React, { ReactNode } from "react";

type Direction = "left" | "right"

interface Props extends SelectProps {
    addondir?: Direction
    addon?: ReactNode
    children: ReactNode
}

const AntdSelectAddon: React.FC<Props> = (props: Props): JSX.Element => {

    const { addondir, addon, children } = props;
    const childrens: ReactNode[] = []
    const classess = ["with-addon"]

    if ((!addondir && addon) || addondir === "left") {
        classess.push("left-addon-container")
        childrens.push(<div key="addon-left" className="left-addon">{addon}</div>)
    }

    childrens.push(children)

    if (addondir === "right") {
        classess.push("right-addon-container")
        childrens.push(<div key="addon-right" className="right-addon">{addon}</div>)
    }

    return <div className={classess.join(" ")}>
        {childrens}
    </div>
}

export default AntdSelectAddon
