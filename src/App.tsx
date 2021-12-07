import React from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./features"
import { getShopeeCities, getShopeeShipping, shopeeGetManifest } from "./features/shopee/manifest"
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import Notif from "./components/notif/Notif"
import AlertHead from "./components/AlertHead"
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/SideNav'
import { TypedSwitch } from './routes'
import { setupV2Notification } from './api/notif'
import { loadMarkup } from './features/markup'

export default class App extends React.Component {
  async componentDidMount(): Promise<void>{
    await shopeeGetManifest()
    await getShopeeCities()
    await getShopeeShipping()

    await tokopediaGetManifest()
    await loadMarkup()
    try {
      await setupV2Notification()
    } catch (e) {
      console.error('setup notification gagal')
    }
    
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <PersistGate loading={null}  persistor={persistor}>
          <BrowserRouter basename="v2">
            <div className="row">
    
              {/* navigation */}
              <SideNav></SideNav>
    
    
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
                  <TypedSwitch></TypedSwitch>
                </div>
              </div>
              </div>
          </BrowserRouter>
          
        </PersistGate>
      </Provider>
    )
  }
}

