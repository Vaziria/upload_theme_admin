import React from 'react'
import { Redirect } from 'react-router-dom'
import { Path } from './path'



type ExtractRouteParams<T> = string extends T
    ? Record<string, string>
    : T extends `${infer _Start}:${infer Param}/${infer Rest}`
    ? { [k in Param | keyof ExtractRouteParams<Rest>]: string }
    : T extends `${infer _Start}:${infer Param}`
    ? { [k in Param]: string }
    : Record<string, never>



// Object which has matching parameter keys for a path.
export type PathParams<P extends Path> = ExtractRouteParams<P>

export function buildUrl<P extends Path>(
  path: P,
  params: PathParams<P>,
): string {
  let ret: string = path

  // Upcast `params` to be used in string replacement.
  const paramObj: { [i: string]: string } = params

  for (const key of Object.keys(paramObj)) {
    ret = ret.replace(`:${key}`, paramObj[key])
  }

  return ret
}


type TypedRedirectProps<P extends Path, Q extends Path> = {
  to: P,
  params: PathParams<P>,
  push?: boolean,
  from?: Q,
};

/**
 * Type-safe version of `react-router-dom/Redirect`.
 */
export function TypedRedirect<P extends Path, Q extends Path>({
  to,
  params,
  push,
  from,
}: TypedRedirectProps<P, Q>){
  return (
    <Redirect
      to={buildUrl(to, params)}
      push={push}
      from={from}
    />
  )
}
