import { Rule } from "antd/es/form"
import { PathCheckPayload, PathCheckResponse, SendOptions } from "../../../../model/newapisdk"

export type CheckFS = (
    a: SendOptions<PathCheckResponse, undefined, Error>,
    b?: Partial<PathCheckPayload>
) => void

export function validator(checker: CheckFS): (_: unknown, path: string) => Promise<void> {
    return function (_: unknown, path: string): Promise<void> {

        if (!path) {
            return Promise.resolve()
        }

        return new Promise((resolve, reject) => {
            checker({
                onSuccess(res) {
                    if (!res.exist) {
                        return reject("lokasi koleksi gambar tidak ditemukan.")
                    }
    
                    if (res.err_msg) {
                        return reject(res.err_msg)
                    }

                    return resolve()
                },
                onError(err) {
                    reject(err)
                },
            }, { path })
        })
    }
}

export const pathValidator: (checker: CheckFS) => Rule = (checker: CheckFS) => ({
    validator: validator(checker)
})
