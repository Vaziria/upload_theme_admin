function currency (val: number, region = 'id-ID', currency = 'IDR'): string {
    return new Intl.NumberFormat(region, { style: 'currency', currency: currency })
        .format(val)
        .replace(',00', '')
}

const currencyRx = /\d(?=(\d{3})+\.)/g
export function currency_custom(amount: number): string {
	const amountStr = amount.toFixed(1)
	const amountFixed = amountStr.replace(currencyRx, '$&.')
	return "Rp " + amountFixed.slice(0, amountFixed.length - 2)
}

export default currency
