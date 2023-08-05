import React from 'react'
import client from '../../api/client'
import currency from '../../utils/currency'
import HastagSelect from '../common/HastagSelect'
import MarkupSelect from '../common/MarkupSelect'
import SpinSelect from '../common/SpinSelect'

type Action = 'product'

type MarkupDebug = {
    harga_asli: number
    up_percent?: number
    up_price: number
    up_fix?: number
    harga_up: number
}

type ProductLive = {
    name: string
    price: number
    price_untung: number
    desc: string
    markup_debug: MarkupDebug
}

interface IState {
    payload: {
        action: Action
        harga: string
        polatitle: string
        hastag: string
    },
    product_lives: ProductLive[]
}

class ContohKonten extends React.Component<unknown, IState> {
    state: IState = {
        payload: {
            action: 'product',
            harga: '',
            polatitle: '',
            hastag: ''
        },
        product_lives: []
    }

    async getProductLives (): Promise<void> {

        const res = await client.get('/legacy/v1/examplespin/products', {

            params: this.state.payload
        })

        this.setState({ product_lives: res.data })
    }

    render (): JSX.Element {
        const { payload, product_lives } = this.state
        const defaultMarkup: MarkupDebug = {
            harga_asli: 0,
            up_price: 0,
            harga_up: 0
        }
        
        return <>
            <div
                className="modal fade"
                id="modalLoginForm"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="myModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog modal-xl" role="document">
                    <div className="modal-content">
                    <div className="modal-body mx-3">
                        <div className="md-form mb-5">
                            <div className="row mb-3">
                                <div className="col">
                                    <p className="label-modal">Markup : </p>
                                    <MarkupSelect
                                        value={payload.harga}
                                        onChange={markup => {
                                            payload.harga = markup
                                            this.setState({ payload })
                                        }}
                                    />
                                </div>
                                <div className="col">
                                    <p className="label-modal">Polatitle : </p>
                                    <SpinSelect
                                        value={payload.polatitle}
                                        onChange={polatitle => {
                                            payload.polatitle = polatitle
                                            this.setState({ payload })
                                        }}
                                    />
                                </div>
                                <div className="col">
                                    <p className="label-modal">Hastag: </p>
                                    <HastagSelect
                                        value={payload.hastag}
                                        onChange={hastag => {
                                            payload.hastag = hastag
                                            this.setState({ payload })
                                        }}
                                    />
                                </div>
                                <button
                                    type="button"
                                    className="btn btn-info btn-sm align-self-end mb-1"
                                    onClick={() => this.getProductLives()}
                                >Preview</button>
                            </div>
                            <p className="warn"><i>
                                ** harga keseluruhan dibulatkan ke perseribuan
                            </i></p>

                            {product_lives.map((prod, key) => {
                                const markup_debug = {
                                    ...defaultMarkup,
                                    ...prod.markup_debug
                                }

                                return <div key={key}>
                                    <h5 className="judul-modal">{prod.name}</h5>
                                    <h6 className='judul-modal mb-0'>Harga Asli : {currency(markup_debug.harga_asli)}</h6>
                                    <h6 className='judul-modal mb-0'>
                                        {markup_debug.up_percent && `Di up ${markup_debug.up_percent.toFixed(1)}%, `}
                                        Harga markup: {currency(markup_debug.up_price)}
                                    </h6>
                                    <h6 className='judul-modal'>
                                        {markup_debug.up_fix && `Biaya tambahan ${currency(markup_debug.up_fix)}, `}
                                        Harga final: {currency(markup_debug.harga_up)}
                                    </h6>
                                    <pre>{prod.desc}</pre>
                                </div>
                            })}
                            {/* {this.renderProductLives()} */}

                        </div>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-left">
                <a
                    className="btn btn-md btn-success mb-3"
                    data-toggle="modal"
                    data-target="#modalLoginForm"
                >Open Contoh Konten</a>
            </div>
        </>
    }
}

export default ContohKonten
