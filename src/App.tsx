import { TaskGrab } from "./pages/TaskGrab"
import React from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./features"
import { shopeeGetManifest } from "./features/shopee/manifest"
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import Notif from "./components/notif/Notif"
import AlertHead from "./components/AlertHead"

export default class App extends React.Component {
  async componentDidMount(): Promise<void>{
    await shopeeGetManifest()
    await tokopediaGetManifest()
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null}  persistor={persistor}>
          <div className="row">
  
            {/* navigation */}
            <div className="col-2">
              <nav className="side-nav mb-1 navbar navbar-expand-lg navbar-dark">
                  <nav className="nav mb-4">
                    <h2 className="title-bot">Upload Tool</h2>
                    <span className="versi">v3.0.25</span>
                </nav>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent-4"
                  aria-controls="navbarSupportedContent-4" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent-4" ng-controller="rootNavController">
                  <ul className="list-group list-group-flush ul-navi-custom">
                    <a href="/#!/spin" className="list-group-item navi-custom"><i className="fab fa-less"></i> Spin</a>
                    <a href="/#!/setting" className="list-group-item navi-custom"><i className="fas fa-cogs"></i> Setting</a>
                    <a href="/#!/akun" className="list-group-item navi-custom"><i className="fas fa-users"></i> Akun</a>
                    <a href="/#!/product" className="list-group-item navi-custom"><i className="fas fa-cubes"></i> Product</a>
                    <a href="/#!/tool" className="list-group-item navi-custom"><i className="fas fa-hammer"></i> Tools</a>
                    <a href="/#" className="list-group-item navi-custom active"><i className="fas fa-cloud-download-alt"></i> Custom Grab</a>
                    <a href="/#!/categmap" className="list-group-item navi-custom"><i className="fas fa-th-list"></i> Mapper Category</a>
                    <a href="/#!/productstat" className="list-group-item navi-custom"><i className="far fa-chart-bar"></i> Detail Product</a>
                  </ul>
                </div>
              </nav>
            </div>
  
  
            <div className="col-10">
              <nav className="navbar fixed-top navbar-light bg-light">
                <ul className="justify-content-end mb-0 h1">
                  <Notif></Notif>
                </ul>
                <div className="ctrl justify-content-end">
                  <AlertHead></AlertHead>
                </div>
              </nav>
              <div className="container-fluid">
                <TaskGrab></TaskGrab>
              </div>
            </div>
            </div>
        </PersistGate>
      </Provider>
    )
  }
}

