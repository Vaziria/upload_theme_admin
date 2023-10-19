
export type AllowedValue = string | number | boolean;
export type AllowedParams = { [key: string]: AllowedValue }

function parseToString(value: AllowedValue): string {
    switch (typeof value) {

        case 'string':
            return value

        case 'number':
        case 'boolean':

            if (!value) {
                return ""
            }

            return value.toString()

        default:
            console.warn("unallowed search params value :", value)
            return ""
    }
}

export function createSearchParams(params: AllowedParams): string {

    const urlParams = new URLSearchParams()
    for (const key in params) {

        const value = params[key]
        const valuestr = parseToString(value)

        if (valuestr !== "") {
            urlParams.set(key, valuestr)
        }
    }

    return urlParams.toString()
}

export function searchParamsToQuery<T extends Record<keyof T, AllowedValue>>(base: T, searchParams: URLSearchParams): Partial<T> {
    let query: Partial<T> = {}

    Object.keys(base).forEach((key) => {
        const type = typeof base[key]
        const value = searchParams.get(key) || ""

        if (value) {
            switch (typeof base[key]) {
                case "string":
                    query = {
                        ...query,
                        [key]: value || query[key],
                    }
                    break
    
                case "number":
                    query = {
                        ...query,
                        [key]: parseInt(value) || query[key],
                    }
                    break
                
                default:
                    console.warn("[ params ] unsupported type", type)
            }
        }
    })

    return query
}