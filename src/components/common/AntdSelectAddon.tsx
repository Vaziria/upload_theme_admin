import React, { ReactNode } from "react";
import { DivProps } from "../../types/props";

type Direction = "left" | "right"

interface Props extends DivProps {
    addondir?: Direction
    addon?: ReactNode
    children: ReactNode
}

const AntdSelectAddon: React.FC<Props> = (props: Props): JSX.Element => {

    const { addondir, addon, children, className, ...reprops } = props;
    const childrens: ReactNode[] = []
    const classess = [className, "with-addon"]

    if ((!addondir && addon) || addondir === "left") {
        classess.push("left-addon-container")
        childrens.push(<div key="addon-left" className="left-addon">{addon}</div>)
    }

    childrens.push(children)

    if (addondir === "right") {
        classess.push("right-addon-container")
        childrens.push(<div key="addon-right" className="right-addon">{addon}</div>)
    }

    return <div className={classess.join(" ")} {...reprops}>
        {childrens}
    </div>
}

export default AntdSelectAddon
