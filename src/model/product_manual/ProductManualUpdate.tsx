
import { Mutate, useMutation } from "../../hooks/mutation"
import { getErrMessage } from "../../utils/errmsg"
import { Clients, Target } from "../apisdk"
import { ProductManualFormModel } from "./ProductManualForm"

export interface UpdateResponse {
    success: boolean
    message: string
}

export type UpdateOptions = {
    success: string
    error: string
}

export interface UseUpdate {
    pending: boolean
    update: (publish?: boolean) => Promise<[boolean, UpdateResponse[]]>
}

export class ProductManualUpdateModel {
    form: ProductManualFormModel

    constructor(form: ProductManualFormModel) {
        this.form = form
    }

    private applyUpdate<K extends Target>(mutate: Mutate<K>, payload: Clients[K]["body"], options?: UpdateOptions): Promise<UpdateResponse> {
        return new Promise<UpdateResponse>((resolve) => {
            mutate({
                onSuccess: (res) => {
                    if (res.err_msg) {
                        resolve({
                            success: false,
                            message: res.err_msg
                        })
                    } else {
                        resolve({
                            success: true,
                            message: options?.success || "success"
                        })
                    }
                },
                onError: (err) => {
                    const message = getErrMessage(err as Error, options?.error)
                    resolve({
                        success: false,
                        message: message
                    })
                },
            }, payload)
        })
    }

    useUpdate(): UseUpdate {
        const { mutate: mutateBasic, pending: basicPending } = useMutation("PostPdcsourceEditSetBasic", {})
        const { mutate: mutateVariant, pending: variantPending } = useMutation("PostPdcsourceEditVariationUpdate", {})
        const { mutate: mutateFieldConfig, pending: fieldConfigPending } = useMutation("PostPdcsourceEditFieldConfig", {})
        const { mutate: mutatePublish, pending: publishPending } = useMutation("PutPdcsourceEditPublish", {})

        const pending = basicPending || variantPending || fieldConfigPending || publishPending

        const update = async (publish?: boolean): Promise<[boolean, UpdateResponse[]]> => {

            const payload = await this.form.getPayload()

            const promises = [
                this.applyUpdate(mutateBasic, payload.basic, {
                    success: "informasi produk tersimpan",
                    error: "gagal menyimpan informasi produk",
                }),
                this.applyUpdate(mutateFieldConfig, payload.fieldConfig, {
                    success: "field config tersimpan",
                    error: "gagal menyimpan field config",
                })
            ]

            if (payload.basic.use_variant) {
                promises.push(this.applyUpdate(mutateVariant, payload.variant, {
                    success: "variasi produk tersimpan",
                    error: "gagal menyimpan variasi produk",
                }))
            }

            const responses = await Promise.all(promises)
            const isSuccess = responses.every((res) => res.success)

            if (isSuccess && publish) {
                const publishRes = await this.applyUpdate(mutatePublish, {}, {
                    success: "produk ditampilkan",
                    error: "gagal menampilkan produk",
                })

                const isSuccess = responses.every((res) => res.success)
                responses.push(publishRes)

                return [isSuccess, responses]
            }

            return [isSuccess, responses]
        }

        return {
            pending,
            update
        }
    }
}
