import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { deleteDataspin, getDataspinData, postDataspin } from '../../api/spin'
import { emitEvent } from '../../event'
import { RootState } from '../../features'
import { updateConfig } from '../../features/spin'
import { InputNumber } from '../common/InputNumber'
import LineTextarea from '../common/LineTextarea'
import DataSpin from './SettingStock/DataSpin'


function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        errKey: state.SpinReducer.configErrKey
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IState {
    name: string
    data: string[]
}

class SettingStock extends React.Component<PropsFromRedux, IState> {

    dataspinRef: DataSpin|null = null
    state: IState = {
        name: '',
        data: []
    }

    async getSpinData (spinname: string): Promise<void> {
        const { name, data } = await getDataspinData(spinname)
        this.setState({
            name,
            data
        })
    }

    async deleteDataSpin (): Promise<void> {
        await deleteDataspin(this.state.name)
        this.dataspinRef?.deleteDataspin(this.state.name)
        this.setState({
            name: '',
            data: []
        })
    }

    async saveDataspin (): Promise<void> {
        const { name, data } = this.state
        await postDataspin(name, data)
        emitEvent('show_msg', {
            msg: 'Success Save List..',
        })
    }

    render (): JSX.Element {
        const { config, errKey } = this.props
        const { name, data } = this.state
        const stockErr = errKey.includes('stock')

        return <>
            <label htmlFor="pwd">SETTING STOCK:</label>
            {stockErr && <p className="warn"><i>* Setting stok harus diisi</i></p>}
			<div className="input-group mb-3 input-group-sm">
				<div className="input-group-prepend">
					<span className="input-group-text">STOCK</span>
				</div>
                <InputNumber
                    value={config.smin}
                    className="form-control form-control"
                    changeVal={smin => updateConfig({ smin }, 'stock')}
                />
                <InputNumber
                    value={config.smax}
                    className="form-control form-control"
                    changeVal={smax => updateConfig({ smax }, 'stock')}
                />
			</div>

            <div className="row" ng-controller="dataSpinController">
				<div className="col">
					<DataSpin
                        ref={ref => this.dataspinRef = ref}
                        value={name}
                        update={name => this.getSpinData(name)}
                    />

                    <LineTextarea
                        line={data}
                        rows={5}
                        update={data => this.setState({ data })}
                    />
                    <br/>
					<button
                        className="btn btn-danger btn-sm"
                        onClick={() => this.deleteDataSpin()}
                    >DELETE</button>

					<button
                        className="btn btn-primary btn-sm"
                        onClick={() => this.saveDataspin()}
                    >SAVELIST</button>
				</div>
			</div>
        </>
    }
}

export default connector(SettingStock)
