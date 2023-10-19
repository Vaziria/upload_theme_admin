import React from "react";
import { useHistory, useLocation } from "react-router-dom";

import { PaginationQuery } from "../../model/apisdk";
import { createSearchParams, searchParamsToQuery } from "../../utils/params";

const defaultQuery = {
    page: 1,
    limit: 20,
}

export function useCollectionListQuery(): [PaginationQuery, (q: Partial<PaginationQuery>) => void]  {
    const history = useHistory()
    const { search } = useLocation();
    const searchParams = React.useMemo(() => new URLSearchParams(search), [search]);

    const [queryCache, setQueryCache] = React.useState<PaginationQuery>({
        ...defaultQuery,
        ...searchParamsToQuery(defaultQuery, searchParams),
    })

    function setQuery(q: Partial<PaginationQuery>): void {
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
