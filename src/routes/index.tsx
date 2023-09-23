import { Route, Switch } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { TaskGrab } from "../pages/TaskGrab"
import { Path } from "./path"
import React from "react"
import SettingPage from "../pages/Setting"
import ToolPage from "../pages/Tool"
import { createBrowserHistory } from "history"
import DetailProduct from "../pages/ProductDetail/DetailProduct"
import TaskPage from "../pages/Task"
import AccountPage from "../pages/Account"
import HitungBeratPage from "../pages/shopee/HitungBerat"
import SpinPage from "../pages/Spin"
import Test from "../pages/Test"
import Tokopedia from "../pages/Tokopedia"
import CategMapNewPage from "../pages/CategMapNew"
import ProductManual from "../pages/ProductManual"
import ProductManualItems from "../pages/ProductManualItems"
import ProductManualForm from "../pages/ProductManualForm"

export const roothistory = createBrowserHistory()

export const routes: ReadonlyArray<{ path: Path, component: React.ComponentType }> = [
  {
    path: '/',
    component: HomePage
  },
  {
    path: '/spin',
    component: SpinPage
  },
  {
    path: '/account',
    component: AccountPage
  },
  {
    path: '/customgrab',
    component: TaskGrab
  },
  {
    path: '/setting',
    component: SettingPage
  },
  {
    path: '/tool',
    component: ToolPage
  },
  {
    path: '/categmap',
    component: CategMapNewPage
  },
  {
    path: '/productstat',
    component: DetailProduct
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
    path: '/productmanual/:collection_name',
    component: ProductManualItems
  },
  {
    path: '/productmanual/:collection_name/form',
    component: ProductManualForm
  },
  {
    path: '/productmanual/:collection_name/form/:product_id',
    component: ProductManualForm
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
