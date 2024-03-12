import { createBrowserHistory } from "history"
import React from "react"
import { Route, Switch } from "react-router-dom"

import AccountPage from "../pages/Account"
import CategMapNewPage from "../pages/CategMapNew"
import HomePage from "../pages/HomePage"
import ImportExport from "../pages/ImportExport"
import ProductDetailNew from "../pages/ProductDetailNew"
import ProductManual from "../pages/ProductManual"
import ProductManualDetail from "../pages/ProductManualDetail"
import ProductManualForm from "../pages/ProductManualForm"
import ProductManualItems from "../pages/ProductManualItems"
import SettingPage from "../pages/Setting"
import SpinPageExample from "../pages/SpinExample"
import SpinPageNew from "../pages/SpinNew"
import TaskPage from "../pages/Task"
import TaskGrabNew from "../pages/TaskGrabNew"
import Test from "../pages/Test"
import Tokopedia from "../pages/Tokopedia"
import ToolPageNew from "../pages/ToolNew"
import HitungBeratPage from "../pages/shopee/HitungBerat"
import { Path } from "./path"

export const roothistory = createBrowserHistory()

export const routes: ReadonlyArray<{ path: Path, component: React.ComponentType }> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/spin',
    component: SpinPageNew
  },
  {
    path: '/spin/example',
    component: SpinPageExample
  },
  {
    path: '/account',
    component: AccountPage
  },
  {
    path: '/customgrab',
    component: TaskGrabNew
  },
  {
    path: '/setting',
    component: SettingPage
  },
  {
    path: '/tool',
    component: ToolPageNew
  },
  {
    path: '/categmap',
    component: CategMapNewPage
  },
  {
    path: '/productstat',
    component: ProductDetailNew
  },
  {
    path: '/task',
    component: TaskPage
  },
  {
    path: '/legacy/shopee/berat',
    component: HitungBeratPage
  },
  {
    path: '/legacy/shopee/berat',
    component: HitungBeratPage
  },
  {
    path: '/toped',
    component: Tokopedia
  },
  {
    path: '/test',
    component: Test
  },
  {
    path: '/productmanual',
    component: ProductManual
  },
  {
    path: '/productmanual/:colid',
    component: ProductManualItems
  },
  {
    path: '/productmanual/:colid/:pid',
    component: ProductManualDetail
  },
  {
    path: '/productmanual/:colid/update/:pid',
    component: ProductManualForm
  },
  {
    path: '/import_export',
    component: ImportExport
  }
]

export function TypedSwitch(): JSX.Element {
  return (
    <Switch>
      {routes.map(({ path, component: RouteComponent }, i) => (
        <Route exact strict sensitive path={path} key={i} component={RouteComponent} />
      ))}
    </Switch>
  )
}
