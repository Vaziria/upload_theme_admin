import React from 'react'
import { getShippingConfig, IShipping, saveShippingConfig } from '../../api/shipping'
import { emitEvent } from '../../event'
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

    async saveShipping (): Promise<void> {
        await saveShippingConfig(this.state)
        emitEvent('show_msg', {
            msg: 'Success Save Setting Shipping..',
        })
    }

    async getShipping (): Promise<void> {
        const config = await getShippingConfig()
        this.setState({ ...config })
    }

    componentDidMount (): void {
        this.getShipping()
    }

    renderChecklist (): JSX.Element {
        if (!this.state.use_custom_shipping) {
            return <></>
        }

        return <div className="pl-4 mb-3">
            <Shipping
                value={this.state.shipping}
                update={shipping => this.setState({ shipping })}
            />
        </div>
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
                />  Active Custom Shipping <br></br>
            </div>
            <hr />
            {this.renderChecklist()}
            <button
                className="btn btn-success btn-sm"
                onClick={() => this.saveShipping()}
            >Save Setting Shipping</button>
        </div>
    }
}


export default SettingShipping
