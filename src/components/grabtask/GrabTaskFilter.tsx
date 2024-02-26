import { Collapse } from "antd";
import React from "react";

import { useMutation } from "../../hooks/mutation";
import { MarketList } from "../../model/Common";
import { GrabShopeeQuery, GrabTokopediaQuery, SettingGrabFilterShopeeExtraResponse, useQuery } from "../../model/newapisdk";
import GrabTaskFilterShopee from "./GrabTaskFilterShopee";
import GrabTaskFilterTokopedia from "./GrabTaskFilterTokopedia";

interface Props {
    mode: MarketList
    onSave(): void
}

const GrabTaskFilter: React.FC<Props> = (props: Props) => {

    const [shopeeGrabFilter, setShopeeGrabFilter] = React.useState<SettingGrabFilterShopeeExtraResponse>({
        product_created: {
            active: false,
            max: 0,
            min: 0
        },
        shippings: []
    })
    const [shopeeGrabSetting, setShopeeGrabSetting] = React.useState<GrabShopeeQuery>({
        by: "",
        locations: [],
        official_mall: false,
        price_max: 0,
        price_min: 0,
        rating_filter: 0,
        shopee24: false,
        shopee_verified: false
    })
    const [tokopediaGrabFilter, setTokopediaGrabFilter] = React.useState<GrabTokopediaQuery>({
        pmin: 0,
        pmax: 0,
        ob: "",
        rt: "",
        condition: "",
        fcity: [],
        goldmerchant: false,
        official: false,
        shipping: [],
        preorder: false
    })

    const { send: getShopeeFilter } = useQuery("GetLegacyShopeeFilterGrabber")
    const { send: getShopeeSetting } = useQuery("GetLegacyApiConfigShopeeGrabSetting")
    const { send: getTokopediaFilter } = useQuery("GetLegacyApiSettingGrab")
    const { mutate: updateShopeeFilter } = useMutation("PutLegacyShopeeFilterGrabber")
    const { mutate: updateShopeeSetting } = useMutation("PostLegacyApiConfigShopeeGrabSetting")

    function saveShopeeGrabFilter() {
        updateShopeeFilter({
            onSuccess() {
                updateShopeeSetting({
                    onSuccess: props.onSave,
                }, {
                    data: shopeeGrabSetting,
                    name: 'shopeeGrabSetting'
                })
            },
        }, shopeeGrabFilter)
    }

    React.useEffect(() => {

        switch (props.mode) {

            case "shopee":
                getShopeeFilter({
                    onSuccess: setShopeeGrabFilter,
                })
                getShopeeSetting({
                    onSuccess: (res) => setShopeeGrabSetting(res.data)
                })
                break
            
            case "tokopedia":
                getTokopediaFilter({
                    onSuccess: (res) => setTokopediaGrabFilter(res.data.data),
                })
        }

        return () => undefined
    }, [props.mode])

    const [showFilter, setShowFilter] = React.useState<string | string[]>()
    let children = <>Tidak ada grab filter</>

    switch (props.mode) {
        case "shopee":
            children = <GrabTaskFilterShopee
                grabSetting={shopeeGrabSetting}
                grabFilter={shopeeGrabFilter}
                setGrabSetting={(val) => setShopeeGrabSetting((v) => ({ ...v, ...val }))}
                setGrabFilter={(val) => setShopeeGrabFilter((v) => ({ ...v, ...val }))}
                onSave={saveShopeeGrabFilter}
            />
            break

        case "tokopedia":
            children = <GrabTaskFilterTokopedia
                grabFilter={tokopediaGrabFilter}
                setGrabFilter={(val) => setTokopediaGrabFilter((v) => ({ ...v, ...val }))}
                onSave={saveShopeeGrabFilter}
            />
            break
    }

    return <Collapse
        ghost
        activeKey={showFilter}
        items={[{
            key: "1",
            label: showFilter?.length ? "Sembunyikan Grab Filter" : "Tampilkan Grab Filter",
            children: children,
        }]}
        onChange={setShowFilter}
    />
}

export default GrabTaskFilter
