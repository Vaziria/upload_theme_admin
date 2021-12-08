import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"

function mapState(state: RootState){
    return {
        hastags: state.HastagReducer.hastags
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
    value: string
    onChange: (value: string) => unknown
}

class HastagSelect extends React.Component<IProp> {
    render(): JSX.Element {
        return <select className="custom-select"
            value={this.props.value}
            onChange={(event) => {
                const hastag = event.target.value
                this.props.onChange(hastag)
              }}
        >
            {!this.props.value && <option value=''></option>}
            {this.props.hastags.map(hastag => 
                <option
                    key={hastag}
                    value={hastag}
                >{hastag}</option>
            )}
        </select>
    }
}


export default connector(HastagSelect)
