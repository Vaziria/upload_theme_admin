import React from "react"
import { getShippingWeight } from "../../api/shopee/shipping_api"
import FloatNumber from "../../components/common/FLoatNumber"
import { emitEvent } from "../../event"
import client from "../../api/client"

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

        const { jarak, harga, predict } = this.state

        return <div className="margin-container">
        <div className="row">
            <div className="col">
                <h3>HITUNG BERAT PRODUK:</h3>
                <p><strong>PERHITUNGAN JARAK ke KAB. BLITAR, SRENGAT:</strong></p>
                <div className="input-group input-group-sm">
                    <input 
                        type="text" 
                        className="form-control" 
                        value={this.state.url}
                        placeholder="Masukkan Product Url (Bebas)"
                        onChange={(e) => this.changeUrl(e.target.value)}
                    />
                </div>
                <br/>
                <p><strong>JARAK</strong> :  { jarak.toFixed(3) }  <strong>km</strong></p>
                <p><strong>ONGKOS KIRIM</strong> :  { harga }  <strong>IDR</strong></p>
                <p><strong>ONGKOS KIRIM / JARAK</strong> :  { (harga / jarak).toFixed(3) }  <strong>IDR/km</strong></p>
    
                <p><strong>BERAT ( gr )</strong> = ( Ongkos Kirim / Jarak ) / (harga / gr)</p>
    
                <p><strong>BERAT ( gr )</strong> =  { (harga / jarak).toFixed(3) }   /  <FloatNumber
                    value={this.state.predict}
                    changeVal={(val) => this.setState({ predict: val })}
                    style={{
                        width: '100px',
                        display: 'inline' 
                    }}

                    className="form-control form-control-sm" placeholder="harga/gr"
                ></FloatNumber>
                 =  
                <strong>
                    { ((harga / jarak) / predict).toFixed(3) }
                </strong>
                 (  { (((harga / jarak) / predict) / 1000).toFixed(3) }  kg )
                </p>
                <button className="btn btn-sm btn-info" onClick={() => this.save()}>SAVE</button>
            </div>
            <div className="col">
                
            </div>
        </div>
    </div>
    }
}