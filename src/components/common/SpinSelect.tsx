import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"

function mapState(state: RootState){
    return {
        spins: state.SpinReducer.spin
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
    value: string
    onChange: (value: string) => unknown
}

class SpinSelect extends React.Component<IProp> {
    render(): JSX.Element {
        return <select className="custom-select"
            value={this.props.value}
            onChange={(event) => {
                const spin = event.target.value
                this.props.onChange(spin)
            }}
        >
            <option value=''>None</option>
            {this.props.spins.map(spin => 
                <option
                    key={spin.name}
                    value={spin.name}
                >{spin.name}</option>
            )}
        </select>
    }
}


export default connector(SpinSelect)
