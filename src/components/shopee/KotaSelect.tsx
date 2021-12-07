import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"

function mapState(state: RootState){
    return {
      cities: state.ShopeeManifestReducer.cities
    }
  }
  
const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>


interface IProp extends PropsFromRedux {
    value: string[]
    onChange: (value: string[]) => unknown
}

interface IState {
    search: string
}

class KotaSelect extends React.Component<IProp, IState> {
    state: IState = {
        search: ""
    }
    getCities(): string[] {
        const cities = this.props.cities
        return cities
    }

    addCity(): void {
        const { value } = this.props
        this.props.onChange([...value, this.state.search])
    }

    render(): JSX.Element {
        const { value } = this.props
        const cities = this.getCities()

        return (
            <>
                <div className="input-group mb-3 input-group-sm">
                    <div className="input-group-prepend">
                        <label className="input-group-text kota">Kota</label>
                    </div>
                    <input list="scity" className="form-control form-control-sm"
                        value={this.state.search}
                        onChange={(e) => this.setState({ search: e.target.value })}
                    />
                    <datalist id="scity">
                        {cities.map((city) => <option key={city} value={city}>{city}</option>) }
                    </datalist>
                    <div className="input-group-append">
                        <button className="btn btn-primary inp-group" type="button" onClick={() => this.addCity()}>add</button>
                    </div>
                </div>
                
                <div className="row">
                    <div className="col">
                        <ul>
                            {value.map((item) => {
                                return <li key={item}><span>{item}</span>    
                                <button type="button" className="close" onClick={() => {
                                    const newval = value.filter((val) => val !== item)
                                    this.props.onChange(newval)
                                }}>
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                </li>
                            })}
                            
                        </ul>
                    </div>
                </div>
            </>
        )
    }
}


export default connector(KotaSelect)