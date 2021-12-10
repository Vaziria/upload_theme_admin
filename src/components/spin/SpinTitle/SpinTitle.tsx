import React from 'react'
import { connect, ConnectedProps } from 'react-redux'
import { RootState } from '../../../features'
import { updateConfig } from '../../../features/spin'

import InputText from '../../common/InputText'

function mapState(state: RootState){
    return {
        config: state.SpinReducer.config,
        errKey: state.SpinReducer.configErrKey
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

class SpinTitle extends React.Component<PropsFromRedux> {

    render (): JSX.Element {
        const { config, errKey } = this.props
        const errTitle = errKey.includes('title')

        return <>
            <label>SPIN TITLE:</label>
            {errTitle && <p className="warn"><i>* Spin title harus diisi</i></p>}
            <div className="input-group input-group-sm mb-3">
                <InputText
                    value={config.title}
                    className="form-control"
                    changeVal={title => updateConfig({ title }, 'title')}
                />
            </div>
        </>
    }
}

export default connector(SpinTitle)
