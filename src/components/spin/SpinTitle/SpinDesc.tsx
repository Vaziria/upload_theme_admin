import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../features'
import { updateConfig } from '../../../features/spin'
import Textarea from '../../common/Textarea'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        errKey: state.SpinReducer.configErrKey
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

class SpinDesc extends React.Component<PropsFromRedux> {

    render (): JSX.Element {
        const { config, errKey } = this.props
        const errDesc = errKey.includes('desc')

        return <div className="form-group">
            <label htmlFor="pwd">SPIN DESCRIPTION:</label>
            {errDesc && <p className="warn"><i>* Spin description harus diisi</i></p>}
            <Textarea
                rows={5}
                className="form-control"
                value={config.desc}
                changeVal={desc => updateConfig({ desc }, 'desc')}
            />
        </div>
    }
}

export default connector(SpinDesc)
