import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { ProductListQuery } from "../../model/apisdk";
import { createSearchParams, searchParamsToQuery } from "../../utils/params";

const defaultQuery = {
    page: 1,
    limit: 20,
    status: "all",
}

export function useProductListQuery(coll_id: number): [ProductListQuery, (q: Partial<ProductListQuery>) => void]  {
    const history = useHistory()
    const { search } = useLocation();
    const searchParams = React.useMemo(() => new URLSearchParams(search), [search]);

    const [queryCache, setQueryCache] = React.useState<ProductListQuery>({
        coll_id,
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
