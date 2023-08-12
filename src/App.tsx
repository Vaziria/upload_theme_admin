import React from 'react'
import { Provider } from "react-redux"
import { PersistGate } from "redux-persist/integration/react"
import { persistor, store } from "./features"
import { getSearchShopeeShipping, getShopeeCities, shopeeGetManifest } from "./features/shopee/manifest"
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import { BrowserRouter } from 'react-router-dom'
import SideNav from './components/SideNav'
import { TypedSwitch } from './routes'
import { setupV2Notification } from './api/notif'
import { loadMarkup } from './features/markup'
import { loadSpin } from './features/spin'
import { loadCollection } from './features/collection'
import { loadHastags } from './features/hastag'
import { RecoilRoot } from "recoil"


export default class App extends React.Component {
  async componentDidMount(): Promise<void>{
    Promise.all([
      shopeeGetManifest(),
      getShopeeCities(),
      getSearchShopeeShipping(),
      tokopediaGetManifest(),
      loadSpin(),
      loadCollection(),
      loadHastags(),
      loadMarkup(),
    ])

    try {
      await setupV2Notification()
    } catch (e) {
      console.error('setup notification gagal')
    }
    
  }

  render(): JSX.Element {
    return (
      <Provider store={store}>
        <RecoilRoot>
        <PersistGate loading={null}  persistor={persistor}>
        
          <BrowserRouter basename="v2">
            <div className="row">
    
              {/* navigation */}
              <SideNav></SideNav>
    
    
              <div className="col-10">
                
                <TypedSwitch></TypedSwitch>
              </div>
            </div>
          </BrowserRouter>
        </PersistGate>
        </RecoilRoot>
      </Provider>
    )
  }
}

