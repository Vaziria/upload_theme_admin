import { Rule } from "antd/es/form"

const MIN_PRICE = 99

export async function validator(_: unknown, value: number): Promise<void> {
    if (Number.isFinite(value) && value < MIN_PRICE) {
        throw "Nilai yang harus diisi setidaknya 99."
    }

    return
}

export const priceValidator: Rule = { validator }
