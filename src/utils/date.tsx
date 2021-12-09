const month = [
    'Januari',
    'Februari',
    'Maret',
    'April',
    'Mei',
    'Juni',
    'Juli',
    'Agustus',
    'September',
    'Oktober',
    'November',
    'Desember'
]
  
function dateZero (month: number): string {
    if (month < 10) {
        return '0' + month
    }

    return month.toString()
}
  
export function dateFormater (datetime: number, format = 'DD/MM/YY'): string {
    const date = new Date(datetime)
  
    return format
        .replace(/YY/g, date.getFullYear().toString())
        .replace(/MNs/g, month[date.getMonth()].slice(0, 3))
        .replace(/MN/g, month[date.getMonth()])
        .replace(/MM/g, dateZero(date.getMonth() + 1))
        .replace(/DD/g, dateZero(date.getDate()))
        .replace(/HH/g, date.getHours().toString())
        .replace(/mm/g, date.getMinutes().toString())
        .replace(/ss/g, date.getSeconds().toString())
        .replace(/ms/g, date.getMilliseconds().toString())
}
  
export default dateFormater
