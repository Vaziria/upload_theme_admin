import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { MarketList } from "../../model/Common";
import { ProductListQuery } from "../../model/newapisdk";
import { createSearchParams, searchParamsToQuery } from "../../utils/params";

export interface CategmapQuery {
    from: MarketList
    mode: MarketList
    namespace: string
    search: string
    unmapped: boolean
    page: number
    pagesize: number
}

export const defaultQuery: CategmapQuery = {
    from: "tokopedia",
    mode: "shopee",
    namespace: "",
    page: 1,
    pagesize: 10,
    search: "",
    unmapped: false
}

export function useCategmapQuery(): [CategmapQuery, (q: Partial<CategmapQuery>) => void]  {
    const history = useHistory()
    const { search } = useLocation();
    const searchParams = React.useMemo(() => new URLSearchParams(search), [search]);

    const [queryCache, setQueryCache] = React.useState<CategmapQuery>({
        ...defaultQuery,
        ...searchParamsToQuery(defaultQuery, searchParams),
    })

    function setQuery(q: Partial<ProductListQuery>): void {
        setQueryCache((query) => {
            const newQuery = {
                ...query,
                ...q
            }
            const search = "?" + createSearchParams(newQuery)
            history.push({ search })

            return newQuery
        })
    }

    return [queryCache, setQuery]
}
