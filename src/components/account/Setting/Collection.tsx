import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../../features"

function mapState(state: RootState){
    return {
        namespaces: state.CollectionReducer.namespaces
    }
}
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
interface IProps extends PropsFromRedux {
    value?: string
    update (collection: string): void
}

class Collection extends React.Component<IProps> {
    render (): JSX.Element {

        const { value, update } = this.props

        return <div className="input-group mb-3 input-group-sm">
            <div className="input-group-prepend">
                <span className="input-group-text" id="basic-addon3">Collection</span>
            </div>
            <select
                value={value}
                className="custom-select ng-valid ng-touched ng-dirty ng-valid-parse ng-empty"
                onChange={select => update(select.target.value)}
            >
                <option value="">None</option>
                {this.props.namespaces.map(namespace => 
                    <option
                        key={namespace.name}
                        value={namespace.name}
                    >{namespace.name} ( {namespace.count} )</option>
                )}
                <option value="all">all</option>
            </select>
        </div>
    }
}

export default connector(Collection)
