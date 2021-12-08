import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"

function mapState(state: RootState){
    return {
      namespaces: state.CollectionReducer.namespaces
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
    value: string
    onChange: (value: string) => unknown
}

class NamespaceSelect extends React.Component<IProp> {
    render(): JSX.Element {
        return <select className="custom-select"
            value={this.props.value}
            onChange={(event) => {
                const namespace = event.target.value
                this.props.onChange(namespace)
              }}
        >
            {!this.props.value && <option value=''></option>}
            {this.props.namespaces.map(namespace => 
                <option
                    key={namespace.name}
                    value={namespace.name}
                >{namespace.name}</option>
            )}
        </select>
    }
}


export default connector(NamespaceSelect)
