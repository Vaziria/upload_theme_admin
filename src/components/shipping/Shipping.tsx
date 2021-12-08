import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IShipping } from '../../api/shipping'
import { RootState } from '../../features'
import { IShopeeShipping } from '../../model/shopee/shipping'
import Checkbox from '../common/Checkbox'

function mapState(state: RootState){
    return {
        shippings: state.ShopeeManifestReducer.shipping
    }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps extends PropsFromRedux {
    value: IShipping[]
    update (shippings: IShipping[]): void
    onRef?: (ref: Shipping) => void
}

export class Shipping extends React.Component<IProps> {

    componentDidMount (): void {
        this.props.onRef && this.props.onRef(this)
    }
    
    checkAll (check: boolean): void {

        if (check) {

            const shippings = this.props.shippings
            .filter(shipping => shipping.parent_channel_id === 0)
            .map(ship => {
                const shipp: IShipping = {
                    channelid: ship.channel_id,
                    enabled: true
                }

                return shipp
            })
    
            this.props.update(shippings)
        } else {
            this.props.update([])
        }
        
    }

    setCheck(cek: boolean, data: IShopeeShipping): void {
        if(cek){
            const ship: IShipping = {
                channelid: data.channel_id,
                enabled: true
            }

            this.props.update([...this.props.value, ship])
        } else {
            const newval: IShipping[] = this.props.value.filter(ship => ship.channelid !== data.channel_id)
            this.props.update(newval)
        } 
    }

    isCheck(): boolean {
        return this.props.value.length === this.props.shippings.filter(ship => ship.parent_channel_id === 0).length
    }

    render (): JSX.Element {

        const parents = this.props.shippings.filter(shipping => shipping.parent_channel_id === 0)

        return <div>
            <Checkbox
                className="form-check-input"
                type="checkbox"
                checked={this.isCheck()}
                onChange={check => this.checkAll(check)}
            />  Check All <hr style={{ marginLeft: '-1.5rem' }} />

            {
                parents.map((parent, index) => {
                    return <div key={index}>
                        <Checkbox
                            className="form-check-input"
                            type="checkbox"
                            checked={this.props.value.some(ship => ship.channelid === parent.channel_id)}
                            onChange={checked => this.setCheck(checked, parent)}
                        />  { parent.display_name }<br></br>
                    </div>
                })
            }

        </div>
    }
}

export default connector(Shipping)
