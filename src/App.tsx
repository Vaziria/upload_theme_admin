import React, { useMemo } from 'react'
import { Provider } from "react-redux"
import { QueryClient, QueryClientProvider } from 'react-query'
import { PersistGate } from "redux-persist/integration/react"
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useSetRecoilState } from "recoil"

import { setupV2Notification } from './api/notif'
import { getNamespaces } from './api/product'
import { TypedSwitch } from './routes'

import { shopeeCategoryManifestState } from "./recoil/atoms/manifest"
import { namespaceDataState } from "./recoil/atoms/namespace"
import { persistor, store } from "./features"
import { loadSpin } from './features/spin'
import { loadHastags } from './features/hastag'
import { loadMarkup } from './features/markup'
import { loadCollection } from './features/collection'
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import { getSearchShopeeShipping, getShopeeCities, shopeeGetManifest } from "./features/shopee/manifest"

import SideNav from './components/SideNav'

const Loader: React.FC = () => {
  const setShopeeManifest = useSetRecoilState(shopeeCategoryManifestState)
  const setNamespaceData = useSetRecoilState(namespaceDataState)

  useMemo(() => {
    Promise.all([
      shopeeGetManifest().then((manifest) => setShopeeManifest({
        publicCategories: manifest.public_category_repo,
        sellerCategories: manifest.category,
      })),
      getShopeeCities(),
      getSearchShopeeShipping(),
      tokopediaGetManifest(),
      loadSpin(),
      loadCollection(),
      loadHastags(),
      loadMarkup(),
      setupV2Notification().catch(() => console.error('setup notification gagal')),
    ])

    getNamespaces("shopee").then(
      (shopeeNamespaces) => setNamespaceData((data) => ({
        ...data,
        shopeeNamespaces
      }))
    )

    getNamespaces("tokopedia").then(
      (tokopediaNamespaces) => setNamespaceData((data) => ({
        ...data,
        tokopediaNamespaces
      }))
    )

  }, [])

  return <></>
}

const queryClient = new QueryClient()

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <RecoilRoot>
      <QueryClientProvider client={queryClient}>
      <PersistGate loading={null}  persistor={persistor}>
      
        <BrowserRouter basename="v2">
          <Loader />
          <div className="row">
  
            {/* navigation */}
            <SideNav></SideNav>
  
  
            <div className="col-10">
              
              <TypedSwitch></TypedSwitch>
            </div>
          </div>
        </BrowserRouter>
      </PersistGate>
      </QueryClientProvider>
      </RecoilRoot>
    </Provider>
  )
}

export default App
