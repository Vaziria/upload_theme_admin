export interface ProductNamespace {
  count: number
  name: string
  price_max: number
  price_min: number
}

export interface ICategoryStat {
  count: number
  name: string[]
  price_max: number
  price_min: number
  _id: number
}

export interface IPriceStat {
  count: number
  _id: number[]
}

export interface IKotaStat {
  count: number
  price_max: number
  price_min: number
  _id: string
}

export default function toCurrency(val: number): string {
  const rule = /(?=(?:...)*$)/
  const split3 = (val || 0).toString().split(rule)

  return 'Rp ' + split3.join('.')
}