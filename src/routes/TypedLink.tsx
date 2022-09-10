import React from 'react'
import { Link, LinkProps } from "react-router-dom"
import { Path } from "./path"
import { buildUrl, PathParams } from "./saferoute"

export interface TypedLinkProps<P extends Path> extends LinkProps {
  to: P,
  params: PathParams<P>,
  replace?: boolean,
  component?: React.ComponentType,
  children?: React.ReactNode,
  className?: string,
}

export default function TypedLink<P extends Path>(props: TypedLinkProps<P>): JSX.Element {
    const {
      to,
      params,
      replace,
      component,
      children,
    } = props

  return (
    <Link
      { ...props }
      
      to={buildUrl(to, params)}
      replace={replace}
      component={component}

      
    >
      {children}
    </Link>
  )
 }