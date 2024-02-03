import { Image, Statistic } from "antd"
import React from "react"
import CountUp from "react-countup"
import { useRecoilValue } from "recoil"

import icon from "../../assets/images/tokopedia_icon.png"
import { namespaceDataState } from "../../recoil/atoms/namespace"

const TokopediaStat: React.FC = () => {

    const namespaces = useRecoilValue(namespaceDataState)
    const count = namespaces.tokopediaNamespaces.reduce((res, namespace) => {
        return res + namespace.count
    }, 0)

    return <Statistic
        title="Tokopedia Collection"
        value={count}
        valueStyle={{ color: "#52c41a" }}
        formatter={(value: string | number) => <CountUp end={Number(value)} separator="." />}
        prefix={<div className="mr-2">
            <Image
                preview={false}
                src={icon}
                width={32}
                className="mb-3"
            />
        </div>}
    />
}

export default TokopediaStat
