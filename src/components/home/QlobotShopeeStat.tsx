import { Image, Statistic } from "antd"
import React from "react"
import CountUp from "react-countup"
import { useRecoilValue } from "recoil"

import icon from "../../assets/images/qlobot_icon.png"
import { namespaceDataState } from "../../recoil/atoms/namespace"

const QlobotShopeeStat: React.FC = () => {

    const namespaces = useRecoilValue(namespaceDataState)
    const count = namespaces.qlobotShopeeNamespaces.reduce((res, namespace) => {
        return res + namespace.count
    }, 0)

    return <Statistic
        title="Qlobot Shopee Collection"
        value={count}
        valueStyle={{ color: "#f5222d" }}
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

export default QlobotShopeeStat
