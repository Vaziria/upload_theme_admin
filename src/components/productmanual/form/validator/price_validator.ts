const MIN_PRICE = 99

export async function priceValidator(_: unknown, value: number): Promise<void> {
    if (Number.isFinite(value) && value < MIN_PRICE) {
        throw "Nilai yang harus diisi setidaknya 99."
    }

    return
}
