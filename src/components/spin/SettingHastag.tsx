import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { deleteHastag as deleteHastagApi, getHastagData, getLimit, saveHastag, setLimit } from '../../api/hastag'
import { emitEvent } from '../../event'
import { RootState } from '../../features'
import { addHastag, deleteHastag } from '../../features/hastag'
import HastagSelect from '../common/HastagSelect'
import { InputNumber } from '../common/InputNumber'
import InputText from '../common/InputText'
import LineTextarea from '../common/LineTextarea'

function mapState(state: RootState){
    return {
        hastags: state.HastagReducer.hastags
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IState {
    limit: [number, number]
    newHastag: string
    hastagData: string[]
    activeHastag: string
}

class SettingHastag extends React.Component<PropsFromRedux, IState> {
    state: IState = {
        limit: [0, 0],
        newHastag: '',
        hastagData: [],
        activeHastag: ''
    }

    async getLimit (): Promise<void> {
        const limit = await getLimit()
        this.setState({ limit })
    }

    async changeLimit (limit: [number, number]): Promise<void> {
        this.setState({ limit })
        
        if (limit[0] < limit[1]) {
            setLimit(limit)
        }
    }

    async setActiveHastag (activeHastag: string): Promise<void> {
        const hastagData = await getHastagData(activeHastag)
        this.setState({
            activeHastag,
            hastagData
        })
    }

    addHastag (): void {
        const newHastag = this.state.newHastag

        if (!newHastag) return

        const hastags = this.props.hastags
        const hastagExist = hastags.find(hastag => hastag === newHastag)

        if (!hastagExist) {
            addHastag(newHastag)
        }
        
        this.setActiveHastag(newHastag)
        this.setState({
            newHastag: ''
        })
    }

    async deleteHastag (): Promise<void> {
        const { activeHastag } = this.state
        
        if (activeHastag) {
            await deleteHastagApi(activeHastag)
            deleteHastag(activeHastag)
            emitEvent('show_msg', {
                msg: 'Success Delete Hastag..',
            })
        }

        this.setState({
            activeHastag: '',
            hastagData: []
        })
    }

    async saveHastag (): Promise<void> {
        const { activeHastag, hastagData } = this.state
        
        if (activeHastag) {
            await saveHastag(activeHastag, hastagData)
            emitEvent('show_msg', {
                msg: 'Success Save Hastag..',
            })
        }
    }
    
    componentDidMount (): void {
        this.getLimit()
    }

    render (): JSX.Element {
        const { limit, newHastag, hastagData, activeHastag } = this.state

        return <div>
            <div className="form-group">
                <label>SETTING HASTAG:</label><br/>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text">LIMIT</span>
                    </div>
                    <InputNumber
                        value={limit[0]}
                        className="form-control"
                        changeVal={value => this.changeLimit([value, limit[1]])}
                    />
                    <InputNumber
                        value={limit[1]}
                        className="form-control"
                        changeVal={value => this.changeLimit([limit[0], value])}
                    />
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                            <span className="input-group-text">DATA</span>
                        </div>
                        <HastagSelect
                            value={activeHastag}
                            onChange={hastag => this.setActiveHastag(hastag)}
                        />
                    </div>
                </div>
                <div className="col">
                    <div className="input-group mb-3 input-group-sm">
                        <div className="input-group-prepend">
                            <button
                                className="btn btn-primary inp-group"
                                onClick={() => this.addHastag()}
                            >New</button>
                        </div>
                       <InputText
                            className="form-control"
                            value={newHastag}
                            changeVal={newHastag => this.setState({ newHastag })}
                       />
                    </div>
                </div>
            </div>

            <LineTextarea
                line={hastagData}
                placeholder="#sepatu"
                rows={5}
                update={hastagData => this.setState({ hastagData })}
            />
            
            <br/>
            <button
                className="btn btn-danger btn-sm"
                onClick={() => this.deleteHastag()}
            >DELETE</button>
            <button
                className="btn btn-primary btn-sm"
                onClick={() => this.saveHastag()}
            >SAVELIST</button>
        </div>
    }
}

export default connector(SettingHastag)
