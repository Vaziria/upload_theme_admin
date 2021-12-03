import React from 'react'
import { getShippingConfig, IShipping, saveShippingConfig } from '../../api/shipping'
import Checkbox from '../common/Checkbox'
import Shipping from '../shipping/Shipping'

interface IState {
    shipping: IShipping[]
    use_custom_shipping: boolean
}

class SettingShipping extends React.Component<unknown, IState> {
    state: IState = {
        shipping: [],
        use_custom_shipping: false
    }

    saveShipping (): void {
        saveShippingConfig(this.state)
    }

    async getShipping (): Promise<void> {
        const config = await getShippingConfig()
        this.setState({ ...config })
    }

    componentDidMount (): void {
        this.getShipping()
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
            </div>
            <hr />
            <div className="pl-4 mb-3">
                <Shipping
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
