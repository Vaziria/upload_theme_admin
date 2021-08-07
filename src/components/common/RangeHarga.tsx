import React from "react"
import { InputNumber } from "./InputNumber"

interface Harga {
  min: number
  max: number
}

interface IProp {
  harga: Harga
  onChange: (harga: Harga) => void
}

interface IState {
  notvalid: boolean
}

export default class RangeHarga extends React.Component<IProp, IState> {
  state: IState = {
    notvalid: false
  }

  invalid(): void {
    this.setState({
      notvalid: true
    })
  }

  onChange(key: keyof Harga, value: number): void {

    const harga = { ...this.props.harga }
    harga[key] = value

    if(harga.max < harga.min){
      this.setState({
        notvalid: true
      })
    } else {
      this.setState({
        notvalid: false
      })
    }

    this.props.onChange(harga)
  }

  render(): JSX.Element {

    const { min, max } = this.props.harga
    const { notvalid } = this.state

    return (
      <div>
        { notvalid && 
          <span 
            style={{
              color: 'red'
            }}>range harga tidak valid.... </span>
        }
        
        <div className="row">
          <div className="col-6">
            <InputNumber
              value={min}
              changeVal={min => this.onChange('min', min)}
              onInvalid={()=>this.invalid()}
              className="form-control"></InputNumber>
          </div>

          <div className="col-6">
            <InputNumber
              value={max}
              changeVal={max => this.onChange('max', max)}
              onInvalid={()=>this.invalid()}
              className="form-control"></InputNumber>
          </div>
        </div>
      </div>
    )
  }
}