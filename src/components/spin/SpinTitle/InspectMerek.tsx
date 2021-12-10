import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../features'
import { updateConfig } from '../../../features/spin'
import Checkbox from '../../common/Checkbox'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

class InspectMerek extends React.Component<PropsFromRedux> {

    render (): JSX.Element {
        const { config } = this.props

        return <div className="input-group input-group-sm mb-3 ml-4">
            <Checkbox
                className="form-check-input"
                id="merek"
                checked={config.merek_ins_t}
                onChange={merek_ins_t => updateConfig({ merek_ins_t })}
            />

            <label className="form-check-label" htmlFor="merek">inspect merek di title</label>
        </div>
    }
}

export default connector(InspectMerek)
