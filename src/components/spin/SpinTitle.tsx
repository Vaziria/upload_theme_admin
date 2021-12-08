import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { configSpin, deleteSpin, exampleSpin, settingSpin } from '../../api/spin'
import { emitEvent } from '../../event'
import { RootState } from '../../features'
import { addSpin, updateConfig } from '../../features/spin'
import { Spin } from '../../model/Spin'
import Checkbox from '../common/Checkbox'
import InputText from '../common/InputText'
import SpinSelect from '../common/SpinSelect'
import Textarea from '../common/Textarea'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        spins: state.SpinReducer.spin
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IState {
    inputExample: string
    exampleTitle: string
    newSpinTitle: string
    selectSpin: Spin
}

const defspin: Spin = {
    name: '',
    data: ''
} 

class SpinTitle extends React.Component<PropsFromRedux, IState> {
    state: IState = {
        inputExample: '',
        exampleTitle: '',
        newSpinTitle: '',
        selectSpin: defspin
    }

    async getExampleTitle (): Promise<void> {
        const exampleTitle = await exampleSpin(this.state.inputExample)

        this.setState({
            exampleTitle
        })
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
        const name = this.state.selectSpin.name
        if (name) {
            await deleteSpin(name)
            emitEvent('show_msg', {
                msg: 'Delete Pola Success..',
            })
        }
    }

    async saveConfig (): Promise<void> {
        await configSpin(this.props.config)
    }

    render (): JSX.Element {
        const { exampleTitle, newSpinTitle, selectSpin } = this.state
        const { merek_ins_t, title, desc }  = this.props.config

        return <div className="row">
            <div className="col-lg-8">
                <div className="form-group">
                    <label htmlFor="email">SPIN TITLE:</label>
                    <div className="input-group input-group-sm mb-3">
                        <InputText
                            value={title}
                            className="form-control"
                            changeVal={title => updateConfig({ title })}
                        />
                    </div>

                    <div className="input-group input-group-sm mb-3">
                        <Checkbox
                            className="form-check-input"
                            id="merek"
                            checked={merek_ins_t}
                            onChange={merek_ins_t => updateConfig({ merek_ins_t })}
                        />

                        <label className="form-check-label" htmlFor="merek">inspect merek di title</label>
                    </div>

                    <p><strong>{exampleTitle}</strong></p>
                    <button
                        className="btn btn-primary btn-sm"
                        type="button"
                        onClick={() => this.getExampleTitle()}
                    >Contoh Judul</button>

                    <p className="warn"><i>** Contoh Pola Spin Title : {'{sepatuku|sepatumurah|sepatusneakers}'} [title] {'{[belakang]|[akhir]}'} </i></p>
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
                <div className="form-group">
					<label htmlFor="pwd">SPIN DESCRIPTION:</label>
					<Textarea
                        rows={5}
                        className="form-control"
                        value={desc}
                        changeVal={desc => updateConfig({ desc })}
                    />
				</div>

                <button
                    className="btn btn-primary btn-sm"
                    type="button"
                    onClick={() => this.saveConfig()}
                >SAVE ALL</button>
            </div>
        </div>
    }
}

export default connector(SpinTitle)
