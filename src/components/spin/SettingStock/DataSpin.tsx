import React from 'react'
import { getDataspin } from '../../../api/spin'
import InputText from '../../common/InputText'

interface IProps {
    value: string
    update (dataspin: string): void
}

interface IState {
    dataspin: string[]
    newDataspin: string
}

class DataSpin extends React.Component<IProps, IState> {

    state: IState = {
        dataspin: [],
        newDataspin: ''
    }

    async getDataspin (): Promise<void> {
        const dataspin = await getDataspin()
        this.setState({ dataspin })
    }

    addDataspin (): void {
        const { dataspin, newDataspin } = this.state
        if (newDataspin) {

            const dataspinExist = dataspin.find(data => data === newDataspin)
            if (!dataspinExist) {
                dataspin.push(newDataspin)
            }
            
            this.props.update(newDataspin)
            this.setState({
                newDataspin: '',
                dataspin
            })
        }
    }

    deleteDataspin (name: string): void {
        const dataspin = this.state.dataspin
            .filter(data => data !== name)

        this.setState({ dataspin })
    }

    componentDidMount (): void {
        this.getDataspin()
    }

    render (): JSX.Element {

        const { value, update } = this.props
        const { dataspin, newDataspin } = this.state

        return <div className="row">
            <div className="col-lg-6">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">DATA</span>
                    </div>
                    <select
                        value={value}
                        className="form-control"
                        onChange={select => update(select.target.value)}
                    >
                        {!value && <option value=""></option>}
                        {dataspin.map((data, key) =>
                            <option key={key} value={data}>{data}</option>
                        )}
                    </select>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <button
                            className="btn btn-primary inp-group"
                            onClick={() => this.addDataspin()}
                        >New</button>
                    </div>
                    <InputText
                        className="form-control form-control" 
                        value={newDataspin}
                        changeVal={newDataspin => this.setState({ newDataspin })}
                    />
                </div>
            </div>
        </div>
    }
}

export default DataSpin
