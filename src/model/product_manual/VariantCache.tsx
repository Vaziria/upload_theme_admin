import { Variant, VariantOption } from "../apisdk"

export interface ValueCache {
    var1Key: number
    var2Key?: number
    key: string
    first?: boolean
    data: Partial<Variant>
}

export interface OptionCache {
    key: number
    name: string
    optname: string
}

export class VariantCacheModel {
    options: (VariantOption | undefined)[]
    valueCaches: ValueCache[]

    constructor(options: (VariantOption | undefined)[], valueCaches: ValueCache[]) {
        this.options = options
        this.valueCaches = valueCaches
    }

    getCacheData(key1: number, key2?: number): Partial<Variant> {
        const cache = this.valueCaches.find((v) => {
            if (Number.isFinite(key2)) {
                return v.var1Key === key1 && v.var2Key === key2
            }
            return v.var1Key === key1
        })
        return {
            price: 0,
            stock: 0,
            ...cache?.data,
        }
    }

    createSingleVariantCache(variant: OptionCache): ValueCache {
        const cacheData = this.getCacheData(variant.key)
        return {
            var1Key: variant.key,
            key: `vardetail_col_${variant.key}`,
            data: {
                ...cacheData,
                names: [variant.name],
                values: [variant.optname]
            }
        }
    }

    createMultiVariantCache(variant1: OptionCache, variant2: OptionCache): ValueCache {
        const cacheData = this.getCacheData(variant1.key, variant2.key)
        return {
            var1Key: variant1.key,
            var2Key: variant2.key,
            key: `vardetail_col_${variant1.key}_${variant2.key}`,
            first: variant2.key === 0,
            data: {
                ...cacheData,
                names: [variant1.name, variant2.name],
                values: [variant1.optname, variant2.optname],
            }
        }
    }

    createCaches(): ValueCache[] {
        const caches: ValueCache[] = []
        const variant1 = this.options?.[0]
        const variant2 = this.options?.[1]

        variant1?.option.forEach((opt1, ind1) => {
            if (variant2) {
                variant2?.option.forEach((opt2, ind2) => {
                    const itemCache = this.createMultiVariantCache({
                        key: ind1,
                        name: variant1.name,
                        optname: opt1,
                    }, {
                        key: ind2,
                        name: variant2.name,
                        optname: opt2,
                    })
                    caches.push(itemCache)
                })
            } else {
                const itemCache = this.createSingleVariantCache({
                    key: ind1,
                    name: variant1.name,
                    optname: opt1,
                })
                caches.push(itemCache)
            }
        })

        return caches
    }
}
