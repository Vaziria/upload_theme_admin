import axios from "axios"

export function getErrMessage(err: Error, defmsg?: string): string {
    let msg = defmsg || ""

    if (axios.isAxiosError(err)) {
        msg = err.response?.data?.err_msg || msg
    }

    return msg || err.message
}