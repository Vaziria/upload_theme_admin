
import { getErrMessage } from "../../utils/errmsg"
import { ApiResponse, SendOptions } from "../apisdk"

export interface UpdateResponse {
    success: boolean
    message: string
}

export type MutateFunc<T> = (a: SendOptions<ApiResponse, undefined>, b?: Partial<T>) => void
export type UpdateOptions = {
    success: string
    error: string
}

export class ProductManualUpdateModel<T> {
    mutate: MutateFunc<T>
    options: UpdateOptions

    constructor(mutate: MutateFunc<T>, options: UpdateOptions) {
        this.mutate = mutate
        this.options = options
    }

    update(payload: T): Promise<UpdateResponse> {
        return new Promise<UpdateResponse>((resolve) => {
            this.mutate({
                onSuccess: (res) => {
                    if (res.err_msg) {
                        resolve({
                            success: false,
                            message: res.err_msg
                        })
                    } else {
                        resolve({
                            success: true,
                            message: this.options.success || "success"
                        })
                    }
                },
                onError: (err) => {
                    const message = getErrMessage(err as Error, this.options.error)
                    resolve({
                        success: false,
                        message: message
                    })
                },
            }, payload)
        })
    }
}
