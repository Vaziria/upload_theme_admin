import { Rule } from "antd/es/form";

const MIN_WEIGHT = 1
const MAX_WEIGHT = 1000000

function validator(_: unknown, value: number): Promise<void> {
    if (Number.isFinite(value)) {
        if (value < MIN_WEIGHT || value > MAX_WEIGHT) {
            return Promise.reject(new Error("Masukkan 1 sampai 1000000."));
        }
    }

    return Promise.resolve();
}

export const weightValidator: Rule = { validator }