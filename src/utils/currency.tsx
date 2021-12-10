function currency (val: number, region = 'id-ID', currency = 'IDR'): string {
    return new Intl.NumberFormat(region, { style: 'currency', currency: currency })
        .format(val)
        .replace(',00', '')
}

export default currency
