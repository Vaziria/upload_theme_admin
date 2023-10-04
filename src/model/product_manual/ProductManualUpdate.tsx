import React from "react"

import { ApiResponse, SendOptions } from "../apisdk"
import { ValidatePayload } from "./ProductManualForm"
import { getErrMessage } from "../../utils/errmsg"

export interface UpdateResponse {
    success: boolean
    message: string
}

const defResponse: UpdateResponse = {
    success: false,
    message: ""
}

export type MutateFunc<T> = (a: SendOptions<ApiResponse, undefined>, b?: Partial<T>) => void
export type ApplyUpdate<T> = (payload: ValidatePayload<T>) => Promise<void>

export class ProductManualUpdateModel<T> {
    mutate: MutateFunc<T>
    successMessage?: string
    errorMessage?: string

    constructor(mutate: MutateFunc<T>, successMessage?: string, errorMessage?: string) {
        this.mutate = mutate
        this.successMessage = successMessage
        this.errorMessage = errorMessage
    }

    useUpdate(): [UpdateResponse, ApplyUpdate<T>] {
        const [response, setResponse] = React.useState({ ...defResponse })
        return [response, this.applyUpdate(setResponse)]
    }

    private applyUpdate(setResponse: React.Dispatch<UpdateResponse>): ApplyUpdate<T> {
        return (payload) => new Promise((resolve) => {
            setResponse?.({ ...defResponse })

            if (payload.validate) {
                this.mutate({
                    onSuccess: (res) => {
                        if (res.err_msg) {
                            setResponse?.({
                                success: true,
                                message: res.err_msg
                            })
                        } else {
                            setResponse?.({
                                success: true,
                                message: this.successMessage || ""
                            })
                        }
                        resolve()
                    },
                    onError: (err) => {
                        const message = getErrMessage(err as Error, this.errorMessage)
                        setResponse?.({
                            success: false,
                            message
                        })
                        resolve()
                    },
                }, payload.data)
            } else {
                setResponse?.({
                    success: false,
                    message: payload.message
                })
                resolve()
            }
        })
    }
}
