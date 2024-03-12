import { ExportOutlined, SyncOutlined } from "@ant-design/icons";
import { Button, Space, message } from "antd";
import React from "react";

import AntdCheckbox from "../components/common/AntdCheckbox";
import ActiveCollection from "../components/detail/ActiveCollection";
import ListCollections from "../components/detail/ListCollections";
import ListItems, { AggItem } from "../components/detail/ListItems";
import MarketplaceTabs from "../components/detail/MarketplaceTabs";
import ModeTabs, { ColMode } from "../components/detail/ModeTabs";
import RangeHargaSelect from "../components/detail/RangeHargaSelect";
import { useMutation } from "../hooks/mutation";
import { MarketList } from "../model/Common";
import { ExportSupplierQuery, ExportUrlQuery, ProductMatchStageQuery, ProductNamespaceAgg, ShopeeCategoryOld, useQuery } from "../model/newapisdk";
import toCurrency from "../model/product";
import { getShopeePubcatCSVitem } from "../recoil/callbacks/get_shopee_pubcat_csvitem";

const defquery: ProductMatchStageQuery = {
    marketplace: "",
    is_public: false,
    kota: "",
    namespace: "",
    pmax: 0,
    pmin: 0,
    use_empty_city: false
}

const ProductDetailNew: React.FC = () => {

    const [messageApi, ctxholder] = message.useMessage()
    const getCatCSVItem = getShopeePubcatCSVitem()

    const [mp, setMp] = React.useState<MarketList>("shopee")
    const [mode, setMode] = React.useState<ColMode>("range_price")
    const [filter, setFilter] = React.useState({
        is_public: false,
        rprice: 100000,
    })
    const [colRefresh, setColRefresh] = React.useState(0)
    const [itemRefresh, setItemRefresh] = React.useState(0)
    const [selectCol, setSelectCol] = React.useState<ProductNamespaceAgg>()
    const [items, setItems] = React.useState<AggItem[]>()
    const [catCSVItems, setCatCSVItems] = React.useState<ShopeeCategoryOld[]>([])

    const { send: getNamespace, data: namespaces } = useQuery("GetLegacyV1ProductNamespaceAll")
    const { send: deleteNamespace } = useQuery("GetLegacyV1ProductDelete")
    const { send: getPriceRange } = useQuery("GetLegacyV1ProductPriceRange")
    const { send: getCategory } = useQuery("GetLegacyV1ProductCategory")
    const { send: getCity } = useQuery("GetLegacyV1ProductKota")
    const { mutate: exportUrl } = useMutation("PutShopeeV5ProductExportUrl")
    const { mutate: exportSupplier } = useMutation("PutShopeeV5ProductExportSupplier")
    const { mutate: productResync, pending: syncLoading } = useMutation("GetLegacyV1ProductResync")
    const { mutate: categToCSV, pending: catCSVLoading } = useMutation("PostLegacyV1ProductCategstatToCsv")
    const { mutate: deleteItem } = useMutation("PostLegacyApiDeleteItem")

    const aggquery = { ...defquery, marketplace: mp }
    function onMpChange(mp: MarketList) {
        setSelectCol(undefined)
        setMp(mp)
    }

    function applyDeleteNamespace(col: ProductNamespaceAgg) {

        if (selectCol?.name === col.name) {
            setSelectCol(undefined)
        }

        deleteNamespace({
            query: { ...aggquery, namespace: col.name },
            onSuccess() {
                messageApi.success(`collection ${col.name} deleted`)
                setColRefresh((c) => c + 1)
            },
        })
    }

    function applyExportUrl(query: ExportUrlQuery) {
        exportUrl({
            query,
            onSuccess: () => message.success(`exported di "${query.namespace}_url.csv"`),
        })
    }

    function applyExportSupplier(query: ExportSupplierQuery) {
        exportSupplier({
            query,
            onSuccess: () => message.success(`exported di "${query.namespace}_supplier.csv"`),
        })
    }

    function applyProductResync() {
        productResync({
            query: aggquery,
            onSuccess: () => {
                message.success("product synchronized")
                setColRefresh((c) => c + 1)
            },
        })
    }

    function applyCategToCSV() {
        categToCSV({
            onSuccess: () => message.success("saved di shopee_list_category.csv"),
        }, catCSVItems)
    }

    function onItemDeleted() {
        message.success("item deleted")
        setColRefresh((c) => c + 1)
        setItemRefresh((c) => c + 1)
    }

    React.useEffect(() => getNamespace({ query: aggquery }), [mp, colRefresh])
    React.useEffect(() => {
        if (selectCol) {

            const colquery = { ...aggquery, namespace: selectCol.name }
            const { rprice, is_public: isPub } = filter
            const is_public = mp === "shopee" && isPub

            switch (mode) {
                case "range_price":
                    getPriceRange({
                        query: { ...colquery, rprice },
                        onSuccess: (res) => setItems(res.map<AggItem>(({ _id, count }, index) => ({
                            count,
                            id: index,
                            name: toCurrency(_id[1]),
                            price_min: _id[0],
                            price_max: _id[1],
                            onDelete: () => deleteNamespace({
                                query: { ...colquery, pmin: _id[0], pmax: _id[1] },
                                onSuccess: onItemDeleted
                            })
                        }))),
                    })
                    break

                case "category":
                    getCategory({
                        query: { ...colquery, is_public },
                        onSuccess: (res) => {
                            setItems(res.map<AggItem>(({ name, ...item }) => ({
                                ...item,
                                id: item._id,
                                name: name?.join(" > ") || "no category",
                                onDelete: () => deleteItem({
                                    query: { ...colquery, is_public },
                                    onSuccess: onItemDeleted
                                }, [item._id])
                            })))
                            setCatCSVItems(res
                                .map<ShopeeCategoryOld>((item) => getCatCSVItem(item._id))
                                .filter(i => i.catid > 0)
                            )
                        },
                    })
                    break

                case "city":
                    getCity({
                        query: { ...colquery },
                        onSuccess: (res) => setItems(res.map<AggItem>(({ _id, ...item }, index) => ({
                            id: index,
                            name: _id,
                            ...item,
                            onDelete: () => deleteNamespace({
                                query: { ...colquery, kota: _id },
                                onSuccess: onItemDeleted
                            })
                        }))),
                    })
                    break
            }
        } else {
            setItems([])
        }
    }, [mode, selectCol, filter, itemRefresh])

    return <div style={{
        margin: -15,
        background: "white",
        height: "calc(100vh - 33px)"
    }}>
        {ctxholder}

        <MarketplaceTabs mp={mp} className="px-4" onChange={onMpChange} tabBarExtraContent={{
            right: <Button
                disabled={mp !== "shopee"}
                type="primary"
                icon={<SyncOutlined />}
                loading={syncLoading}
                className="mr-4"
                style={{ background: mp !== "shopee" ? "#fff2e8" : "#fa541c" }}
                onClick={applyProductResync}
            >Resync Category</Button>
        }} />

        <div className="d-flex">
            <div className="d-flex" style={{
                height: "calc(100vh - 93px)",
                overflowY: "auto",
                flexDirection: "column",
                borderRight: "1px solid rgba(217, 217, 217, 0.6)"
            }}>
                <ListCollections
                    namespaces={namespaces || undefined}
                    onSelect={setSelectCol}
                    onDelete={applyDeleteNamespace}
                />
            </div>
            <Space direction="vertical" size="middle" className="d-flex flex-1 p-4" style={{
                height: "calc(100vh - 93px)",
                overflowY: "auto",
                flexDirection: "column",
                borderRight: "1px solid rgba(217, 217, 217, 0.6)"
            }}>

                <ActiveCollection
                    mp={mp}
                    collection={selectCol}
                    onExportUrl={applyExportUrl}
                    onExportSupplier={applyExportSupplier}
                />

                <ModeTabs mode={mode} onChange={setMode} />

                {mode === "range_price" && <RangeHargaSelect
                    value={filter.rprice}
                    style={{ width: 300 }}
                    onChange={(rprice) => setFilter((v) => ({ ...v, rprice }))}
                />}

                {mp === "shopee" && mode === "category" && <Space>
                    <AntdCheckbox
                        checked={filter.is_public}
                        disabled={mp !== "shopee" || mode !== "category"}
                        onChange={(is_public) => setFilter((v) => ({ ...v, is_public }))}
                    >
                        Gunakan Public Category
                    </AntdCheckbox>
                    <Button
                        type="primary"
                        icon={<ExportOutlined />}
                        disabled={!catCSVItems.length}
                        loading={catCSVLoading}
                        onClick={applyCategToCSV}
                    >Save to CSV</Button>
                </Space>}

                <ListItems items={items} />
            </Space>
        </div>
    </div>
}

export default ProductDetailNew
