import axios from 'axios'
import React, { useEffect } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from "react-redux"
import { BrowserRouter } from 'react-router-dom'
import { RecoilRoot, useSetRecoilState } from "recoil"
import { PersistGate } from "redux-persist/integration/react"

import { setupV2Notification } from './api/notif'
import { getNamespaces } from './api/product'
import { TypedSwitch } from './routes'

import SideNav from './components/SideNav'

import { persistor, store } from "./features"
import { loadCollection } from './features/collection'
import { loadHastags } from './features/hastag'
import { loadMarkup } from './features/markup'
import { getSearchShopeeShipping, getShopeeCities, shopeeGetManifest } from "./features/shopee/manifest"
import { loadSpin } from './features/spin'
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import { useQuery } from './model/apisdk'
import { shopeePublicCategoriesState, shopeeSellerCategoriesState } from "./recoil/atoms/categories"
import { tokopediaCitiesState } from "./recoil/atoms/cities"
import { productManualCollectionState } from './recoil/atoms/collection'
import { namespaceDataState } from "./recoil/atoms/namespace"
import { markupDataState } from './recoil/atoms/markup'

// TODO: sdk belum support base url
axios.defaults.baseURL = "http://localhost:5000"

const Loader: React.FC = () => {
  const setShopeePublicCategories = useSetRecoilState(shopeePublicCategoriesState)
  const setShopeeSellerCategories = useSetRecoilState(shopeeSellerCategoriesState)
  const setTokopediaCities = useSetRecoilState(tokopediaCitiesState)
  const setNamespaceData = useSetRecoilState(namespaceDataState)
  const setProductManualCollection = useSetRecoilState(productManualCollectionState)
  const setMarkupData = useSetRecoilState(markupDataState)

  const { send: getCollections } = useQuery("GetPdcsourceCollectionList")

  useEffect(() => {
    Promise.all([
      shopeeGetManifest().then((manifest) => {
        setShopeeSellerCategories(manifest.category)
        setShopeePublicCategories(manifest.public_category_repo)
      }),
      getShopeeCities(),
      getSearchShopeeShipping(),
      tokopediaGetManifest().then((manifest) => {
        setTokopediaCities(manifest.cities)
      }),
      loadSpin(),
      loadCollection(),
      loadHastags(),
      loadMarkup().then(setMarkupData),
      setupV2Notification().catch(() => console.error('setup notification gagal')),

      getNamespaces("shopee").then(
        (shopeeNamespaces) => setNamespaceData((data) => ({
          ...data,
          shopeeNamespaces
        }))
      ),

      getNamespaces("tokopedia").then(
        (tokopediaNamespaces) => setNamespaceData((data) => ({
          ...data,
          tokopediaNamespaces
        }))
      ),

      getCollections({
        onSuccess(res){
          setProductManualCollection(res.data)
        }
      })
    ])

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
