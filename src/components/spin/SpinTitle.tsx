import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { configSpin, settingSpin } from '../../api/spin'
import { emitEvent } from '../../event'
import { RootState } from '../../features'
import { addSpin, deleteSpin, errConfig } from '../../features/spin'
import { ErrKey, Spin } from '../../model/Spin'
import InputText from '../common/InputText'
import SpinSelect from '../common/SpinSelect'
import Textarea from '../common/Textarea'
import ExampleTitle from './SpinTitle/ExampleTitle'
import InspectMerek from './SpinTitle/InspectMerek'
import SpinDesc from './SpinTitle/SpinDesc'
import SpinTitleText from './SpinTitle/SpinTitle'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        spins: state.SpinReducer.spin
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IState {
    newSpinTitle: string
    selectSpin: Spin
}

const defspin: Spin = {
    name: '',
    data: ''
} 

class SpinTitle extends React.Component<PropsFromRedux, IState> {
    state: IState = {
        newSpinTitle: '',
        selectSpin: defspin
    }

    selectSpin (name: string): void {
        const selectSpin = this.props.spins
            .find(spin => spin.name === name)

        if (selectSpin) {
            this.setState({ selectSpin })
        } else {
            this.setState({ selectSpin: defspin })
        }
    }

    newSpin (name: string): void {
        let selectSpin = this.props.spins
            .find(spin => spin.name === name)
        
        if (!selectSpin) {
            selectSpin = {
                name,
                data: ''
            }
            addSpin(selectSpin)
        }

        this.setState({
            selectSpin,
            newSpinTitle: ''
        })
    }

    async postNewSpin (): Promise<void> {
        await settingSpin(this.props.spins)
        emitEvent('show_msg', {
            msg: 'Success Save Pola..',
        })
    }

    async deleteSpin (): Promise<void> {
        const { selectSpin } = this.state

        if (selectSpin) {
            deleteSpin(selectSpin)
            this.setState({ selectSpin: defspin })
        }
    }

    async saveConfig (): Promise<void> {
        const config = this.props.config
        const errKeys: ErrKey[] = []
        
        if (!config.title) {
            errKeys.push('title')
        }

        if (!config.smax) {
            errKeys.push('stock')
        }

        if (!config.desc) {
            errKeys.push('desc')
        }

        if (errKeys.length) {
            errConfig(errKeys)
            return
        }

        await configSpin(config)
        emitEvent('show_msg', {
            msg: 'Success Save All..',
        })
    }

    render (): JSX.Element {
        const { newSpinTitle, selectSpin } = this.state

        return <>
            <div className="form-group">
                <SpinTitleText />
                <InspectMerek />
                <ExampleTitle />
            </div>

            <label htmlFor="email">SPIN TITLE Ke 2 (Optional):</label>
			<div className="row">
				<div className="col-lg-6">
					<div className="input-group input-group-sm mb-3">
						<div className="input-group-prepend">
							<span className="input-group-text">Pola Name</span>
						</div>
						<SpinSelect
                            value={selectSpin.name}
                            onChange={name => this.selectSpin(name)}
                        />
					</div>
				</div>
				<div className="col-lg-6">
					<div className="input-group input-group-sm mb-3">
                        <div className="input-group-prepend">
                            <button
                                className="btn btn-primary inp-group"
                                type="button"
                                onClick={() => this.newSpin(newSpinTitle)}
                            >New</button> 
                        </div>
                        <InputText
                            value={newSpinTitle}
                            className="form-control"
                            changeVal={newSpinTitle => this.setState({ newSpinTitle })}
                        />
					</div>
				</div>
			</div>

            <Textarea
                rows={5}
                className="form-control"
                value={selectSpin.data}
                placeholder="{sepatuku|sepatumurah|[sepatu]} [title] {[belakang]|[akhir]}"
                changeVal={data => {
                    selectSpin.data = data
                    this.setState({ selectSpin })
                }}
            />
			<br/>

			<button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteSpin()}
            >DELETE POLA</button>

			<button
                className="btn btn-primary btn-sm"
                onClick={() => this.postNewSpin()}
            >SAVE POLA</button>
			<hr/>
            
            <SpinDesc />

            <button
                className="btn btn-primary btn-sm"
                type="button"
                onClick={() => this.saveConfig()}
            >SAVE ALL</button>
        </>
    }
}

export default connector(SpinTitle)
