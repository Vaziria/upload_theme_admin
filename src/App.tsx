import { ConfigProvider } from 'antd'
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

import { BASEURL } from './api/client'
import { persistor, store } from "./features"
import { loadCollection } from './features/collection'
import { loadHastags } from './features/hastag'
import { loadMarkup } from './features/markup'
import { getSearchShopeeShipping, getShopeeCities, shopeeGetManifest } from "./features/shopee/manifest"
import { loadSpin } from './features/spin'
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import { useQuery } from './model/apisdk'
import { shopeePublicCategoriesState, shopeeSellerCategoriesState, tokopediaPublicCategoriesState } from "./recoil/atoms/categories"
import { tokopediaCitiesState } from "./recoil/atoms/cities"
import { collectionSelectState } from './recoil/atoms/collection_list'
import { markupDataState } from './recoil/atoms/markup'
import { namespaceDataState } from "./recoil/atoms/namespace"

// TODO: sdk belum support base url
axios.defaults.baseURL = BASEURL

const Loader: React.FC = () => {
    const setShopeePublicCategories = useSetRecoilState(shopeePublicCategoriesState)
    const setShopeeSellerCategories = useSetRecoilState(shopeeSellerCategoriesState)
    const setTokopediaCities = useSetRecoilState(tokopediaCitiesState)
    const setTokopediaCategories = useSetRecoilState(tokopediaPublicCategoriesState)
    const setNamespaceData = useSetRecoilState(namespaceDataState)
    const setProductManualCollection = useSetRecoilState(collectionSelectState)
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
                setTokopediaCategories(manifest.categories)
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
                query: {
                    page: 1,
                    limit: 999999,
                },
                onSuccess(res) {
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
                    <PersistGate loading={null} persistor={persistor}>
                        <ConfigProvider
                            theme={{
                                components: {
                                    Card: {
                                        actionsLiMargin: "6px",
                                    },
                                },
                            }}
                        >

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
                        </ConfigProvider>
                    </PersistGate>
                </QueryClientProvider>
            </RecoilRoot>
        </Provider>
    )
}

export default App
