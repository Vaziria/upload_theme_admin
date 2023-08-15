import React, { useEffect, useState } from "react"
import { getShippingWeight } from "../../api/shopee/shipping_api"
import FloatNumber from "../../components/common/FLoatNumber"
import { emitEvent } from "../../event"
import client from "../../api/client"
import { Button, Card, Col, Input, InputNumber, Row, Space, Typography, notification } from "antd"
import { atom } from "recoil"

const { Text, Title } = Typography

interface WeightRatioConfigItem {
    price_min: number
    price_max: number
    ratio: number
}

interface WeightRatioConfig {
    data: WeightRatioConfigItem[]
}



type NotificationType = 'success' | 'info' | 'warning' | 'error';

function WeightRatioConfig() {

    const [datas, setDatas] = useState<WeightRatioConfigItem[]>([])
    const [api, contextHolder] = notification.useNotification();

    const openNotificationWithIcon = (type: NotificationType) => {
        api[type]({
            message: 'Ratio Saved',
            description:
                'Ratio for Weight Prediction Saved',
        });
    };



    const addData = () => {
        setDatas(datas => {
            const newData = {
                price_max: 0,
                price_min: 0,
                ratio: 1000,
            }
            
            const last =  datas[datas.length - 1]
            if(last){
                newData.price_min = last.price_max
            }

            return [...datas, newData]
        })
    }

    const removeData = (ind: number) => {
        setDatas(datas => {
            return datas.filter((data, indx) => ind !== indx)
        })
    }

    const editData = (ind: number, data: WeightRatioConfigItem) => {
        setDatas(datas => {
            return datas.map((old, oind) => {
                if(oind === ind) {
                    return data
                }
                return old
            })
        })
    }

    const saveData = async () => {
        await client.put("/shopee/v5/config/weight_ratio", {
            data: datas
        })

        openNotificationWithIcon("success")
    }

    useEffect(() => {
        client.get("/shopee/v5/config/weight_ratio").then(data => {
            if(data.data.data) {
                setDatas(data.data.data)
            }
            
        })
    }, [])

    return (

        <Card title="Config Berat" style={{ width: 800 }}>
            {contextHolder}
            <Space direction="vertical">
                <Space>
                    <Button type="primary" style={{ backgroundColor: "#00c851" }} onClick={() => saveData()}>Save</Button>
                    <Button type="primary" onClick={addData}>Add</Button>
                </Space>



                <Space
                    direction="vertical"
                >
                    {
                        datas.map((data, ind) => {
                            const isError = data.price_max < data.price_min
                            return <Space key={ind}>
                                <InputNumber status={isError ? "error": ""} value={data.price_min} addonBefore="price min" onChange={e => editData(ind, {...data, price_min: e ? e: 0})} />
                                <InputNumber status={isError ? "error": ""} value={data.price_max} addonBefore="price max" onChange={e => editData(ind, {...data, price_max: e ? e: 0})} />
                                <InputNumber value={data.ratio} addonBefore="berat (gr)" onChange={e => editData(ind, {...data, ratio: e ? e: 1000})} />

                                <Button type="primary" style={{ backgroundColor: "red" }} onClick={() => removeData(ind)}>Remove</Button>
                            </Space>
                        })

                    }

                </Space>


            </Space>

        </Card>

    )
}



interface IState {
    url: string
    jarak: number
    harga: number
    predict: number
}

export default class HitungBeratPage extends React.Component<unknown, IState> {

    state: IState = {
        url: '',
        jarak: 0,
        harga: 0,
        predict: 0.0
    }

    async componentDidMount(): Promise<void> {
        const res = await client.get('/legacy/v3/predictweight/load')
        this.setState({
            predict: res.data.predict_weight
        })
    }

    async changeUrl(url: string): Promise<void> {
        this.setState({ url })
        const data = await getShippingWeight(url)
        this.setState({
            jarak: data.jarak,
            harga: parseInt(data.harga)
        })
    }

    async save(): Promise<void> {
        await client.get('/legacy/v3/predictweight/save', {
            params: {
                predict: this.state.predict
            }
        })

        emitEvent('show_msg', {
            msg: 'Predict berhasil disimpan',
        })
    }
    render(): JSX.Element {

        return (
            <Space direction="horizontal" align="start">
                <WeightRatioConfig />

            </Space>
        )

        
    }
}