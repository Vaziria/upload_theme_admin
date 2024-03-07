import { ProfileOutlined, SaveOutlined } from "@ant-design/icons"
import { Alert, Button, Col, Row, Space, message } from "antd"
import React from "react"
import { useHistory } from "react-router-dom"

import SpinAdditional from "../components/spin/SpinAdditional"
import SpinData from "../components/spin/SpinData"
import SpinHastag from "../components/spin/SpinHastag"
import SpinMarkup from "../components/spin/SpinMarkup"
import SpinTitleNew from "../components/spin/SpinTitleNew"
import { useMutation } from "../hooks/mutation"
import {
    DataSpinItemResponse, HastagLimitData, HastagUpdatePayload,
    Markup,
    SettingSpinConfigUpdatePayload, SettingSpinData,
    SettingSpinTitlePool, useQuery
} from "../model/newapisdk"

const SpinPageNew: React.FC = () => {

    const history = useHistory()
    const [messageApi, ctxholder] = message.useMessage()

    const [exampleTitle, setExampleTitle] = React.useState("")
    const [spinData, setSpinData] = React.useState<string[]>([])
    const [titlePools, setTitlePools] = React.useState<SettingSpinTitlePool[]>([])
    const [settingSpinData, setSettingSpinData] = React.useState<SettingSpinData>({
        smin: 0,
        smax: 0,
        merek_ins_t: false,
        ignore_first_word: false,
        title: "",
        desc: ""
    })
    const [hastags, setHastags] = React.useState<string[]>([])
    const [hastagLimit, setHastagLimit] = React.useState<number[]>([])

    const { send: getExampleTitle } = useQuery("GetLegacyV1ExamplespinTitle")
    const { send: getSpinData, pending: spinDataLoading } = useQuery("GetLegacyApiDataspin")
    const { send: getSpinDataOne } = useQuery("GetLegacyApiDataspinGet")
    const { send: getSettingSpinData, pending: settingSpinDataLoading } = useQuery("GetLegacyApiSettingSpin")
    const { send: getHastagList, pending: hastagLoading } = useQuery("GetLegacyApiHastagList")
    const { send: getHastag } = useQuery("GetLegacyApiHastag")
    const { send: getHastagLimit } = useQuery("GetLegacyApiConfigHastagLimit")
    const { send: getMarkup } = useQuery("GetLegacyApiMarkup")

    const { mutate: updateSpinData, pending: updateSpinDataLoading } = useMutation("PostLegacyApiDataspin")
    const { mutate: updateConfigSettingSpinData, pending: updateConfigSettingSpinDataLoading } = useMutation("PostLegacyApiConfigSettingSpin")
    const { mutate: updateSettingSpinData } = useMutation("PostLegacyApiSettingSpin")
    const { mutate: deleteSpinData } = useMutation("DeleteLegacyApiDataspin")
    const { mutate: updateHastag, pending: updateHastagLoading } = useMutation("PostLegacyApiHastag")
    const { mutate: updateHastagLimit } = useMutation("PostLegacyApiConfigHastagLimit")
    const { mutate: deleteHastag } = useMutation("DeleteLegacyApiHastag")
    const { mutate: addMarkup } = useMutation("PostLegacyApiAddMarkup")
    const { mutate: updateMarkup, pending: updateMarkupLoading } = useMutation("PostLegacyApiMarkup")
    const { mutate: deleteMarkup } = useMutation("PostLegacyApiDeleteMarkup")

    React.useEffect(() => {

        getSpinData({ onSuccess: setSpinData })
        getSettingSpinData({
            onSuccess: (res) => {
                setTitlePools(res.titlePool)
                res.data && setSettingSpinData(res.data)
            }
        })
        getHastagList({ onSuccess: setHastags })
        getHastagLimit({
            onSuccess: (res) => setHastagLimit(res.data)
        })

    }, [])

    function getExampleSpinTitle(title: string) {
        getExampleTitle({
            query: { title },
            onSuccess(res) {
                setExampleTitle(res.text)
            }
        })
    }

    function applyDeleteSpinData(name: string) {
        deleteSpinData({
            query: { name },
            onSuccess: () => messageApi.success(`spin data ${name} deleted`)
        })
    }

    function saveSpinData(data: DataSpinItemResponse) {
        updateSpinData({
            onSuccess: () => messageApi.success("spin data saved")
        }, data)
    }

    function saveConfigSettingSpinData(data: SettingSpinConfigUpdatePayload) {
        updateConfigSettingSpinData({
            onSuccess: () => messageApi.success("spin title saved")
        }, data)
    }

    function saveSettingSpinData(data: SettingSpinData) {
        updateSettingSpinData({
            onSuccess: () => messageApi.success("spin additional saved")
        }, data)
    }

    function saveHastag(data: HastagUpdatePayload) {
        updateHastag({
            onSuccess: () => messageApi.success("spin hastag saved"),
        }, data)
    }

    function saveHastagLimit(data: HastagLimitData) {
        updateHastagLimit({}, data)
        setHastagLimit([data.min, data.max])
    }

    function applyDeleteHastag(name: string) {
        deleteHastag({
            query: { name },
            onSuccess: () => messageApi.success(`hastag ${name} deleted`)
        })
    }

    function applyAddMarkup(data: Markup) {
        addMarkup({}, data)
    }

    function saveMarkup(data: Markup) {
        const { name, ...payload } = data
        updateMarkup({
            query: { name },
            onSuccess: () => messageApi.success("spin markup saved")
        }, payload)
    }

    function applyDeleteMarkup(names: string[]) {
        deleteMarkup({
            onSuccess: () => messageApi.success(`markup ${name} deleted`)
        }, names)
    }


    function onDuplicateName() {
        messageApi.warning("nama telah digunakan, ganti yang lain")
    }

    return <Row className="my-3">
        {ctxholder}
        <Col
            md={{ span: 24 }}
            lg={{ span: 20, offset: 2 }}
            xl={{ span: 16, offset: 4 }}
        >
            <Space direction="vertical" size="large" className="d-flex">

                <Button
                    type="primary"
                    icon={<ProfileOutlined />}
                    style={{ background: "#52c41a" }}
                    onClick={() => history.push("/spin/example")}
                >Buka Contoh Konten</Button>

                <Alert
                    showIcon
                    type="info"
                    message={<span>
                        item dengan icon &apos; <SaveOutlined /> &apos; berarti belum disimpan
                    </span>}
                />

                <SpinData
                    data={spinData}
                    dataLoading={spinDataLoading}
                    setData={setSpinData}
                    updateLoading={updateSpinDataLoading}
                    onUpdate={saveSpinData}
                    onActive={(name, callback) => getSpinDataOne({
                        query: { name },
                        onSuccess: (res) => res[0] && callback(res[0])
                    })}
                    onDelete={applyDeleteSpinData}
                    onCreateNameExist={onDuplicateName}
                />

                <SpinTitleNew
                    example={exampleTitle}
                    setExample={getExampleSpinTitle}
                    dataLoading={settingSpinDataLoading}
                    pools={titlePools}
                    setPools={setTitlePools}
                    updateLoading={updateConfigSettingSpinDataLoading}
                    onUpdate={saveConfigSettingSpinData}
                    onCreateNameExist={onDuplicateName}
                />

                <SpinAdditional
                    data={settingSpinData}
                    setData={setSettingSpinData}
                    updateLoading={updateConfigSettingSpinDataLoading}
                    onUpdate={saveSettingSpinData}
                />

                <SpinMarkup
                    updateLoading={updateMarkupLoading}
                    onUpdate={saveMarkup}
                    onAdd={applyAddMarkup}
                    onActive={(name, callback) => getMarkup({
                        query: { name },
                        onSuccess: callback
                    })}
                    onDelete={applyDeleteMarkup}
                    onCreateNameExist={onDuplicateName}
                />

                <SpinHastag
                    hastags={hastags}
                    hastagLoading={hastagLoading}
                    setHashtags={setHastags}
                    limit={hastagLimit}
                    updateLoading={updateHastagLoading}
                    onUpdate={saveHastag}
                    onUpdateLimit={saveHastagLimit}
                    onActive={(name, callback) => getHastag({
                        query: { name },
                        onSuccess: callback
                    })}
                    onDelete={applyDeleteHastag}
                    onCreateNameExist={onDuplicateName}
                />

            </Space>
        </Col>
    </Row>
}

export default SpinPageNew
