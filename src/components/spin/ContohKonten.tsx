import React from 'react'
import client from '../../api/client'
import HastagSelect from '../common/HastagSelect'
import MarkupSelect from '../common/MarkupSelect'
import SpinSelect from '../common/SpinSelect'

type Action = 'product'

type ProductLive = {
    name: string
    price: number
    price_untung: number
    desc: string
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
        const res = await client.get('/v1/examplespin', {
            params: this.state.payload
        })

        this.setState({ product_lives: res.data })
    }

    renderProductLives (): JSX.Element[] {
        const productLives: JSX.Element[] = []

        this.state.product_lives
            .forEach((prod_live, key) => productLives.push(
                <div key={key}>
                    <h5 className="judul-modal">{prod_live.name}</h5>
                    <h6>Harga Asli : {prod_live.price} {'=>'} Markup : {prod_live.price_untung}</h6>
                    <pre>{prod_live.desc}</pre>
                </div>
            ))

        return productLives
    }

    render (): JSX.Element {
        const { payload } = this.state
        
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
                            <div className="row">
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
                            </div>

                            <button
                                type="button"
                                className="btn btn-info btn-sm mt-3 mb-3"
                                onClick={() => this.getProductLives()}
                            >Reload</button>

                            {this.renderProductLives()}

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
