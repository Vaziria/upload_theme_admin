import { Col, Row, Spin, message } from "antd";
import React from "react";
import { Prompt, useLocation, useParams } from "react-router-dom";

import { useGoBack } from "../hooks/back";
import { useMutation } from "../hooks/mutation";
import { useQuery } from "../model/apisdk";
import { ProductManualFormModel } from "../model/product_manual/ProductManualForm";
import { getErrMessage } from "../utils/errmsg";

import ProductFormAction from "../components/productmanual/ProductFormAction";
import ProductFormBasic from "../components/productmanual/ProductFormBasic";
import ProductFormFieldConfig from "../components/productmanual/ProductFormFieldConfig";
import ProductFormProgress from "../components/productmanual/ProductFormProgress";
import ProductFormVariant from "../components/productmanual/ProductFormVariant";
import { ProductManualFormProgressModel } from "../model/product_manual/ProductManualFormProgress";
import { ProductManualUpdateModel } from "../model/product_manual/ProductManualUpdate";
import ProductFormModalResponse, { BacthResponse } from "../components/productmanual/ProductFormModalResponse";

interface Params {
    colid: string
    pid: string
}

const ProductManualForm: React.FC = (): JSX.Element => {

    const goback = useGoBack()
    const location = useLocation()
    const params = useParams<Params>()

    const pid = parseInt(params.pid)
    const formModel = new ProductManualFormModel(pid)
    const [openResponse, setOpenResponse] = React.useState(false)
    const [showPromt, setShowPromt] = React.useState(false)

    const { data, pending, error, send: getProduct } = useQuery("GetPdcsourceProductItem")
    const isPublish = !data?.data?.as_draft

    React.useEffect(() => {
        getProduct({
            query: {
                product_id: pid
            },
            onSuccess({ data }) {
                setShowPromt(true)
                formModel.initializeFields(data)
            },
            onError(err) {
                const msg = getErrMessage(err as Error, "gagal mendapatkan produk.")
                message.error(msg)
                goback("/productmanual/:colid", params)
            }
        })
    }, [])

    const { mutate: checkFs } = useMutation("PostPdcsourceFsCheck")
    const { mutate: mutateBasic, pending: basicPending } = useMutation("PostPdcsourceEditSetBasic", {})
    const { mutate: mutateVariant, pending: variantPending } = useMutation("PostPdcsourceEditVariationUpdate", {})
    const { mutate: mutateFieldConfig, pending: fieldConfigPending } = useMutation("PostPdcsourceEditFieldConfig", {})
    const { mutate: mutatePublish, pending: publishPending } = useMutation("PutPdcsourceEditPublish", {
        onSuccess() {
            message.success("produk berhasil ditampilkan.")
            goback("/productmanual/:colid", params)
        },
        onError(err) {
            const msg = getErrMessage(err as Error, "gagal menampilkan produk.")
            message.error(msg)
            goback("/productmanual/:colid", params)
        }
    })

    const basicUpdateModel = new ProductManualUpdateModel(mutateBasic, "informasi produk tersimpan.", "gagal menyimpan informasi produk.")
    const variantUpdateModel = new ProductManualUpdateModel(mutateVariant, "variasi produk tersimpan.", "gagal menyimpan variasi produk.")
    const fieldConfigUpdateModel = new ProductManualUpdateModel(mutateFieldConfig, "field config tersimpan.", "gagal menyimpan field config.")

    const [basicResponse, applyBasicUpdate] = basicUpdateModel.useUpdate()
    const [variantResponse, applyVariantUpdate] = variantUpdateModel.useUpdate()
    const [fieldConfigResponse, applyFieldConfigUpdate] = fieldConfigUpdateModel.useUpdate()
    const responses: BacthResponse[] = [
        { ...basicResponse, pending: basicPending },
        { ...variantResponse, pending: variantPending },
        { ...fieldConfigResponse, pending: fieldConfigPending }
    ]

    const progressModel = new ProductManualFormProgressModel(formModel)
    const isLoading = basicPending || variantPending || fieldConfigPending

    async function updateProduct(): Promise<void> {
        setShowPromt(false)
        setOpenResponse(true)
        const useVariant = formModel.basic.getFieldValue("use_variant")
    
        const basicPayload = await formModel.getBasicPayload()
        await applyBasicUpdate(basicPayload)
        useVariant && formModel.getVariantPayload().then((payload) => applyVariantUpdate(payload))
        formModel.getFieldConfigPayload().then((payload) => applyFieldConfigUpdate(payload))
    }

    // handle page refresh
    const alertUser = (ev: BeforeUnloadEvent) => {
        ev.preventDefault();
        ev.returnValue = "";
    }
    React.useEffect(() => {
        window.addEventListener("beforeunload", alertUser);
        return () => {
            window.removeEventListener("beforeunload", alertUser);
        };
    }, [])

    function onBackPromt(promt: boolean) {
        setShowPromt(promt)
        goback("/productmanual/:colid", params)
    }

    return <Row className="mt-3">

        <Prompt when={showPromt} message={(loc) => {
            const sameLoc = location.pathname === loc.pathname
            return sameLoc || "Yakin ingin buang semua perubahan?"
        }} />

        <ProductFormModalResponse
            open={openResponse}
            isPublished={isPublish}
            loading={isLoading}
            publishLoading={publishPending}
            responses={responses}
            onClose={() => setOpenResponse(false)}
            onBack={() => onBackPromt(false)}
            onPublish={() => mutatePublish({}, {
                product_id: pid
            })}
        />

        <Col span={6} offset={1} className="pr-3">
            <ProductFormProgress progressModel={progressModel} />
        </Col>

        <Col span={16}>
            <Spin tip="Loading..." spinning={pending || !!error}>

                <ProductFormBasic form={formModel.basic} checker={checkFs} />
                <ProductFormVariant
                    form={formModel.variant}
                    formBasic={formModel.basic}
                    checker={checkFs}
                    initialVariants={data?.data?.variant}
                />
                <ProductFormFieldConfig
                    pid={pid}
                    form={formModel.fieldConfig}
                />

                <div id="productfinish" />
                <ProductFormAction
                    loading={isLoading}
                    onBack={() => onBackPromt(true)}
                    onUpdate={updateProduct}
                />
            </Spin>
        </Col>
    </Row>
}

export default ProductManualForm
