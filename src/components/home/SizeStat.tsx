import { FileSyncOutlined, LoadingOutlined } from "@ant-design/icons"
import { Spin, Statistic } from "antd"
import React from "react"

import { SizeSum } from "../../model/newapisdk"
import CountUp from "react-countup"

interface Props {
    title: string
    color: string
    loading: boolean
    sizeSum?: SizeSum
}

const CacheStat: React.FC<Props> = (props: Props) => {

    const { title, color, loading, sizeSum } = props
    let [size, suffix] = [0, "MB"]

    if (sizeSum?.size_gb && sizeSum.size_gb > 1) {
        size = sizeSum.size_gb
        suffix = "GB"

    } else if (sizeSum?.size_mb && sizeSum.size_mb > 1) {
        size = sizeSum.size_mb
        suffix = "MB"

    } else if (sizeSum?.size_kb && sizeSum.size_kb > 1) {
        size = sizeSum.size_kb
        suffix = "KB"

    } else if (sizeSum?.size && sizeSum.size > 1) {
        size = sizeSum.size
        suffix = "B"
    }

    return <Statistic
        title={title}
        value={size}
        precision={2}
        valueStyle={{ color }}
        formatter={(value: string | number) => <CountUp decimal="." decimals={2} end={value as number} separator="," />}
        prefix={<div className="px-2 mr-2" style={{ background: color, borderRadius: 3 }}>
            {loading ?
                <Spin indicator={<LoadingOutlined spin style={{ color: "#fff" }} />} /> :
                <FileSyncOutlined style={{ color: "#fff" }} />
            }
        </div>}
        suffix={suffix}
    />
}

export default CacheStat
