import React from 'react'
import { IShipping, shippingConfig } from '../../api/account'
import Checkbox from '../common/Checkbox'
import Shipping, { Shipping as ShippingRef } from '../shipping/Shipping'

interface IState {
    shipping: IShipping[]
    use_custom_shipping: boolean
}

class SettingShipping extends React.Component<unknown, IState> {
    state: IState = {
        shipping: [],
        use_custom_shipping: false
    }

    shippingRef: ShippingRef|null = null

    saveShipping (): void {
        shippingConfig(this.state)
    }

    render (): JSX.Element {
        return <div className="col-lg-4">
            <label>SETTING SHIPPING:</label>
            <div className="pl-4 mb-3 d-flex">
                <Checkbox
                    className="form-check-input"
                    type="checkbox"
                    checked={this.state.use_custom_shipping}
                    onChange={checked => this.setState({ use_custom_shipping: checked })}
                />  Use Custom <br></br>

                {/* <span className="ml-5">
                <Checkbox
                    className="form-check-input"
                    type="checkbox"
                    checked={this.shippingRef?.isCheckAll}
                    onChange={check => this.shippingRef?.checkAll()}
                />  Check All <br></br> </span>    */}
            </div>
            <hr />
            <div className="pl-4 mb-3">
                <Shipping
                    onRef={ref => this.shippingRef = ref}
                    value={this.state.shipping}
                    update={shipping => this.setState({ shipping })}
                />
            </div>
            <button
                className="btn btn-success btn-sm"
                onClick={() => this.saveShipping()}
            >Save Setting Shipping</button>
        </div>
    }
}


export default SettingShipping
