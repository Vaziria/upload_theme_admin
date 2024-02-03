import { Image, Statistic } from "antd"
import React from "react"
import CountUp from "react-countup"
import { useRecoilValue } from "recoil"

import icon from "../../assets/images/manual_icon.png"
import { collectionSelectState } from "../../recoil/atoms/collection_list"

const ProductManualStat: React.FC = () => {

    const namespaces = useRecoilValue(collectionSelectState)
    const count = namespaces.reduce((res, namespace) => {
        return res + (namespace?.count || 0)
    }, 0)

    return <Statistic
        title="Product Manual Collection"
        value={count}
        valueStyle={{ color: "#1677ff" }}
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

export default ProductManualStat
