import { Route, Switch } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { TaskGrab } from "../pages/TaskGrab"
import { Path } from "./path"
import React from "react"
import SettingPage from "../pages/Setting"

export const routes: ReadonlyArray<{ path: Path, component: React.ComponentType }> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/customgrab',
    component: TaskGrab
  },
  {
    path: '/setting',
    component: SettingPage
  }
]

export function TypedSwitch(): JSX.Element {
  return (
    <Switch>
      {routes.map(({ path, component: RouteComponent }, i) => (
        <Route exact strict sensitive path={path} key={i}>
          <RouteComponent />
        </Route>
      ))}
    </Switch>
  )
}
