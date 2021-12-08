import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../../features"

function mapState(state: RootState){
    return {
        hastags: state.HastagReducer.hastags
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProps extends PropsFromRedux {
    value: string
    update: (value: string) => void
}

class Hashtag extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Hastag</span>
            </div>
            <select
                value={value}
                className="custom-select"
                onChange={select => update(select.target.value)}
            >
                <option value="">None</option>
                {this.props.hastags.map((hastag, key) => 
                    <option key={key} value={hastag}>{hastag}</option>
                )}
                
            </select>
        </div>
    }
}

export default connector(Hashtag)
