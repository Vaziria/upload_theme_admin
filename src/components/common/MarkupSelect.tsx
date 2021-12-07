import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"

function mapState(state: RootState){
    return {
      markups: state.MarkupReducer.markups
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
    value: string
    onChange: (value: string) => unknown
}

class MarkupSelect extends React.Component<IProp> {
    render(): JSX.Element {
        return <select className="custom-select"
            value={this.props.value}
            onChange={(event) => {
                // eslint-disable-next-line
                const value = event.target.value as any
                this.props.onChange(value)
              }}
        >
        { this.props.markups.map(markup => <option key={markup} value={markup}>{markup}</option>) }
    </select>
    }
}


export default connector(MarkupSelect)