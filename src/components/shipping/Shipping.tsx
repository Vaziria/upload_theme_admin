import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { IShipping } from '../../api/shipping'
import { RootState } from '../../features'
import Checkbox from '../common/Checkbox'

function mapState(state: RootState){
    return {
        shipping: state.ShopeeManifestReducer.shipping
            .filter(ship => ship.parent_channel_id == 0)
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
    get shippings (): IShipping[] {
        const shippings: IShipping[] = this.props.value

        if (shippings.length < 1) {
            this.props.shipping.forEach(ship => {
                shippings.push({
                    channelid: ship.channel_id,
                    enabled: false
                })
            })
        }

        return shippings
    }

    get isCheckAll (): boolean {
        const countEnabled = this.props.value
            .filter(ship => ship.enabled)
            .length

        return countEnabled === this.props.shipping.length
    }

    componentDidMount (): void {
        this.props.onRef && this.props.onRef(this)
    }

    onCheck (channelid: number, check: boolean): void {
        const shippings = this.shippings.map(ship => {
            if (ship.channelid === channelid) {
                ship.enabled = check
            }

            return ship
        })

        this.props.update(shippings)
    }

    checkAll (check: boolean): void {
        const shippings = this.shippings.map(ship => {
            ship.enabled = check
            return ship
        })

        this.props.update(shippings)
    }

    getChannelName (channelid: number): string {
        const findShipping = this.props.shipping
            .find(ship => ship.channel_id === channelid)
        
        return findShipping?.display_name || ''
    }

    renderShipping (): JSX.Element[] {
        const shipping: JSX.Element[] = []

        this.shippings.forEach((ship, index) => {
            shipping.push(
                <div key={index}>
                    <Checkbox
                        className="form-check-input"
                        type="checkbox"
                        checked={ship.enabled}
                        onChange={checked => this.onCheck(ship.channelid, checked)}
                    />  {this.getChannelName(ship.channelid)}<br></br>
                </div>
            )
        })

        return shipping
    }

    render (): JSX.Element {
        return <div>
            <Checkbox
                className="form-check-input"
                type="checkbox"
                checked={this.isCheckAll}
                onChange={check => this.checkAll(check)}
            />  Check All <hr style={{ marginLeft: '-1.5rem' }} />
            {this.renderShipping()}
        </div>
    }
}

export default connector(Shipping)
