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


import { BASEURL } from './api/client'
import BaseLayout from './components/BaseLayout'
import { persistor, store } from "./features"
import { loadCollection } from './features/collection'
import { loadHastags } from './features/hastag'
import { loadMarkup } from './features/markup'
import { getSearchShopeeShipping, getShopeeCities, shopeeGetManifest } from "./features/shopee/manifest"
import { loadSpin } from './features/spin'
import { tokopediaGetManifest } from "./features/tokopedia/manifest"
import { useQuery } from './model/newapisdk'
import { shopeePublicCategoriesState, shopeeSellerCategoriesState, tokopediaPublicCategoriesState } from "./recoil/atoms/categories"
import { shopeeCitiesState, tokopediaCitiesState } from "./recoil/atoms/cities"
import { collectionSelectState } from './recoil/atoms/collection_list'
import { hastagDataState } from './recoil/atoms/hastag'
import { infoState } from './recoil/atoms/info'
import { markupDataState } from './recoil/atoms/markup'
import { namespaceDataState } from "./recoil/atoms/namespace"
import { shippingsState } from './recoil/atoms/shipping'
import { spinDataState } from './recoil/atoms/spin'
import { setJakmallCategoriesCallback } from './recoil/callbacks/set_jakmall_categories'
import { setJakmallFilterDataCallback } from './recoil/callbacks/set_jakmall_filter'

// TODO: sdk belum support base url
axios.defaults.baseURL = BASEURL

const Loader: React.FC = () => {
    const setShopeePublicCategories = useSetRecoilState(shopeePublicCategoriesState)
    const setShopeeSellerCategories = useSetRecoilState(shopeeSellerCategoriesState)
    const setShopeeCities = useSetRecoilState(shopeeCitiesState)
    const setTokopediaCities = useSetRecoilState(tokopediaCitiesState)
    const setTokopediaCategories = useSetRecoilState(tokopediaPublicCategoriesState)
    const setNamespaceData = useSetRecoilState(namespaceDataState)
    const setProductManualCollection = useSetRecoilState(collectionSelectState)
    const setMarkupData = useSetRecoilState(markupDataState)
    const setInfo = useSetRecoilState(infoState)
    const setSpinData = useSetRecoilState(spinDataState)
    const setHastagData = useSetRecoilState(hastagDataState)
    const setShippings = useSetRecoilState(shippingsState)
    const setJakmallCategories = setJakmallCategoriesCallback()
    const setJakmallFilterData = setJakmallFilterDataCallback()

    const { send: getCollections } = useQuery("GetPdcsourceCollectionList")
    const { send: getInfo } = useQuery("GetV1MainInfo")
    const { send: getJakmallCategories } = useQuery("GetJakmallCategoryList")
    const { send: getJakmallFilterData } = useQuery("GetJakmallSearchFilterData")

    useEffect(() => {
        Promise.all([
            shopeeGetManifest().then((manifest) => {
                setShopeeSellerCategories(manifest.category)
                setShopeePublicCategories(manifest.public_category_repo)
            }),
            getShopeeCities().then(setShopeeCities),
            getSearchShopeeShipping().then(setShippings),
            tokopediaGetManifest().then((manifest) => {
                setTokopediaCities(manifest.cities)
                setTokopediaCategories(manifest.categories)
            }),
            loadSpin().then((data) => {
                setSpinData(data.spin)
            }),
            loadCollection(),
            loadHastags().then(setHastagData),
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

            getNamespaces("qlobot_shopee").then(
                (qlobotShopeeNamespaces) => setNamespaceData((data) => ({
                    ...data,
                    qlobotShopeeNamespaces
                }))
            ),

            getNamespaces("jakmall").then(
                (jakmallNamespaces) => setNamespaceData((data) => ({
                    ...data,
                    jakmallNamespaces
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
            }),

            getInfo({
                onSuccess: setInfo,
            }),

            getJakmallCategories({
                onSuccess: setJakmallCategories,
            }),

            getJakmallFilterData({
                onSuccess: setJakmallFilterData,
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
                                        colorBorder: "red"
                                    },
                                    Rate: {
                                        starBg: "#bfbfbf",
                                        starColor: "#fa541c"
                                    },
                                },
                            }}
                        >

                            <BrowserRouter basename="v2">
                                <Loader />
                                <BaseLayout>
                                    <TypedSwitch></TypedSwitch>
                                </BaseLayout>
                                {/* <div className="row">

                                    <SideNav></SideNav>


                                    <div className="col-10">

                                        <TypedSwitch></TypedSwitch>
                                    </div>
                                </div> */}
                            </BrowserRouter>
                        </ConfigProvider>
                    </PersistGate>
                </QueryClientProvider>
            </RecoilRoot>
        </Provider>
    )
}

export default App
