import { Button } from 'antd';
import React from "react";

import { useQuery } from "../../model/newapisdk";
import { PropGrabTask } from "./PropGrabTask";
import { MarketList } from '../../model/Common';

const color: { [key in MarketList]: string } = {
    shopee: "#ff4d4f",
    tokopedia: "#52c41a",
    jakmall: "#fa541c",
}

const label: { [key in MarketList]: string } = {
    shopee: "GENERATE SHOPEE CSV",
    tokopedia: "GENERATE TOKOPEDIA CSV",
    jakmall: "GENERATE JAKMALL CSV",
}

const GrabTaskDumpCategory: React.FC<PropGrabTask> = (props: PropGrabTask): JSX.Element => {
    const { marketplace } = props.task

    const [loading, setLoading] = React.useState(false)
    const { send: dumpShopee } = useQuery("GetLegacyApiCategoryDumpCsv")
    const { send: dumpTokopedia } = useQuery("GetTokopediaDumpCategoryDump")
    const { send: dumpJakmall } = useQuery("GetJakmallCategoryDumpCsv")

    const setLoadingFalse = () => setLoading(false)

    const dumper: { [key in MarketList]: () => void } = {
        shopee() {
            setLoading(true)
            dumpShopee({
                query: {
                    mp: marketplace,
                },
                onSuccess: setLoadingFalse,
                onError: setLoadingFalse
            })
        },
        tokopedia() {
            setLoading(true)
            dumpTokopedia({
                onSuccess: setLoadingFalse,
                onError: setLoadingFalse
            })
        },
        jakmall() {
            setLoading(true)
            dumpJakmall({
                onSuccess: setLoadingFalse,
                onError: setLoadingFalse
            })
        },
    }

    return <div>
        <label>Keterangan :</label>
        <div className="mb-1">
            silahkan edit di <strong>{marketplace}_list_category.csv</strong> atau
        </div>

        <Button
            type="primary"
            style={{ backgroundColor: color[marketplace] }}
            loading={loading}
            onClick={dumper[marketplace]}
        >
            <small>{label[marketplace]}</small>
        </Button>
    </div>
}

export default GrabTaskDumpCategory
