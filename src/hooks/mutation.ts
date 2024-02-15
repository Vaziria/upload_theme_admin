/* eslint-disable @typescript-eslint/no-explicit-any*/

import axios from "axios";
import { useState } from "react";
import { ClientReturn, Clients, MaybeNull, SendOptions, Target, clients } from "../model/newapisdk";

declare global {
    interface FormData {
        getBoundary(): string
    }
}

export type MutateFiles = {
    [key in string]: File
}

export interface MutateSendOptions<Data, Query, Err = Error> extends SendOptions<Data, Query, Err> {
    urlReplacer?(url: string): string
}

export interface MutationClientReturn<Data, Query, Body, Err = Error> extends Omit<ClientReturn<Data, Query, Err>, "send"> {
    mutate(a: MutateSendOptions<Data, Query, Err>, b?: Partial<Body>, files?: MutateFiles): void
}

export type Mutate<K extends Target> = MutationClientReturn<
    Clients[K]["response"],
    Clients[K]["query"],
    Clients[K]["body"]
>["mutate"]

export function useMutation<
    K extends Target,
    R extends Clients[K]["response"],
    Q extends Clients[K]["query"],
    B extends Clients[K]["body"],
>(action: K, options?: MutateSendOptions<R, Q>): MutationClientReturn<R, Q, B> {
    let uri: string = clients[action].url;
    const method = clients[action].method;
    const queryOptions = options;

    const [pending, setPending] = useState(false);
    const [data, setData] = useState<MaybeNull<R>>(null);
    const [error, setError] = useState<MaybeNull<Error>>(null);

    if (options?.urlReplacer) {
        uri = options.urlReplacer(uri)
    }

    async function mutate(options: MutateSendOptions<R, Q> | undefined = queryOptions, body?: Partial<B>, files?: MutateFiles) {
        setPending(true);

        if (options?.urlReplacer) {
            uri = options.urlReplacer(uri)
        }

        const query = queryOptions?.query || options?.query;

        const formData = new FormData();

        for (const key in body) {
            formData.set(key, body[key] as string)
        }
        for (const key in files) {
            formData.append(key, files[key], "csv.csv")
        }

        const headers = {};
        if (files && Object.keys(files).length > 0) {
            headers["Content-Type"] = `multipart/form-data; boundary=${formData.getBoundary}`
        }


        const paydata = files ? formData : body
        try {
            const { data } = await axios({
                method,
                url: uri,
                data: paydata,
                headers,
                ...(query
                    ? {
                        params: query
                    }
                    : {})
            });

            queryOptions?.onSuccess?.(data);
            options?.onSuccess?.(data);
            setData(data);
            setError(null);
        } catch (e) {
            queryOptions?.onError?.(e as any);
            options?.onError?.(e as any);
            setError(e as any);
            setData(null);
        } finally {
            setPending(false);
        }
    }

    return {
        data,
        error,
        pending,
        mutate
    };
}
