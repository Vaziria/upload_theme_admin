import { Form, FormInstance, Table } from "antd";
import React from "react";

import { ColumnsType } from "antd/es/table";
import { UpdateVariationPayload, Variant } from "../../../model/apisdk";
import { ValueCache, VariantCacheModel } from "../../../model/product_manual/VariantCache";
import { CheckFS } from "./validator/path_validator";
import DetailImageCollectionPathForm from "./variantform/DetailImageCollectionPathForm";
import DetailPriceForm from "./variantform/DetailPriceForm";
import DetailStockForm from "./variantform/DetailStockForm";

interface Props {
    form: FormInstance<UpdateVariationPayload>
    cheker: CheckFS
    initialVariants?: Array<Variant | undefined>
}

const VariantDetailForm: React.FC<Props> = (props: Props) => {

    const [valueCaches, setValueCaches] = React.useState<ValueCache[]>([])
    const options = Form.useWatch("variant_option", props.form)
    const variants = Form.useWatch("variant", props.form)

    React.useEffect(() => {
        if (options) {
            const cacheModel = new VariantCacheModel(options, valueCaches)
            const caches = cacheModel.createCaches()
            setValueCaches(caches)

            const variants = caches.map((cache) => cache.data)
            props.form.setFieldValue("variant", variants)
            props.form.validateFields(["variant"])
        }

    }, [options])

    React.useEffect(() => {
        if (props.initialVariants) {
            const caches = valueCaches.map((cache, index) => ({
                ...cache,
                data: {
                    ...cache.data,
                    ...props.initialVariants?.[index]
                }
            }))
            setValueCaches(caches)

            const variants = caches.map((cache) => cache.data)
            props.form.setFieldValue("variant", variants)
        }
    }, [props.initialVariants])

    React.useEffect(() => {
        setValueCaches((caches) => {
            variants?.forEach((data, index) => {
                if (caches[index]) {
                    caches[index].data = {
                        ...caches[index]?.data,
                        ...data,
                    }
                }
            })
            return caches
        })
    }, [variants])

    function onImgColPathChange(var1key: number): (path: string) => void {
        return (path) => {
            valueCaches.forEach((cache, index) => {
                if (cache.var1Key === var1key) {
                    const key = ["variant", index, "image_collection_path"]
                    props.form.setFieldValue(key, path)
                    props.form.validateFields(key)
                }
            })
        }
    }

    const columns: ColumnsType<ValueCache> = [
        {
            title: options?.[0]?.name || "Variasi 1",
            dataIndex: "var1Name",
            key: "var1Name",
            onCell(data) {
                if (options?.length > 1) {
                    if (data.first) {
                        return {
                            rowSpan: options[1]?.option.length || 1,
                        }
                    }

                    return {
                        rowSpan: 0
                    }
                }
                
                return {}
            },
            width: 200,
            render(_, data, index) {
                return <div>
                    <p className="mb-2 c-tx-center">{ data.data.values?.[0] }</p>
                    <DetailImageCollectionPathForm
                        index={index}
                        cheker={props.cheker}
                        disabled={!data.data.values?.[0]}
                        placeholder="Pilih koleksi gambar"
                        onChange={onImgColPathChange(data.var1Key)}
                    />
                </div>
            },
        },
        {
            title: "Harga",
            dataIndex: "price",
            key: "price",
            render(_, __, index) {
                return <DetailPriceForm index={index} />
            },
        },
        {
            title: "Stock",
            dataIndex: "stock",
            key: "stock",
            render(_, __, index) {
                return <DetailStockForm index={index} />
            },
        },
    ]

    if (options && options.length > 1) {
        columns.splice(1, 0, {
            title: options?.[1]?.name || "Variasi 2",
            dataIndex: "var2Name",
            key: "var2Name",
            render(_, data) {
                return <div style={{
                    minWidth: 50,
                    textAlign: "center"
                }}>{ data.data.values?.[1] }</div>
            }
        })
    }

    return <Form.Item<UpdateVariationPayload>
        name="variant"
    >
        <Table
            dataSource={valueCaches}
            columns={columns}
            bordered
            rowKey="key"
            rowClassName="c-bg-gray"
            pagination={false}
        />
    </Form.Item>
}

export default VariantDetailForm
