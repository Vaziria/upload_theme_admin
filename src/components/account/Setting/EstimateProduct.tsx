import React from 'react'
import client from '../../../api/client'
import { IAccount } from '../../../model/Account'

interface IProps {
    akun: IAccount
}

interface IState {
    estimated: number
}

class EstimateProduct extends React.Component<IProps, IState> {

    state: IState = {
        estimated: 0
    }

    async getEstimate (): Promise<void> {
        const { user, pass, tokped_categ } = this.props.akun
        const payload = {
            user,
            pass,
            categ: tokped_categ
        }

        const estimated = await client.post('/api/product/estimated', payload)
        if(estimated.data.errcode == 0) {
            this.setState({
                estimated: estimated.data.count
            })
        } 
    }

    render (): JSX.Element {
        return <div className="row">
            <div className="col">
                <style>{".esti:hover{color:green;}"}</style>
                <div onClick={() => this.getEstimate()} className="esti"
                    style={{
                        marginTop: 25,
                        fontWeight: 'bold',
                        cursor: 'pointer'
                    }}>
                    Estimate Produk : {this.state.estimated}
                </div>
            </div>
        </div>
    }
}

export default EstimateProduct