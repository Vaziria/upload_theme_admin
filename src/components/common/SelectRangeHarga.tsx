import React from "react"

interface IProps {
  value: number
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  selected: (value: number) => any
}

export default class SelectRangeHarga extends React.Component<IProps> {
    render(): JSX.Element {

      const { selected, value } = this.props

      return (
          <select className="form-control"
            value={value.toString()}
            onChange={(event)=>selected(parseInt(event.target.value))}
          >
            <option value="10000">10.000</option>
            <option value="20000">20.000</option>
            <option value="30000">30.000</option>
            <option value="40000">40.000</option>
            <option value="50000">50.000</option>
            <option value="100000">100.000</option>
            <option value="200000">200.000</option>
            <option value="300000">300.000</option>
            <option value="400000">400.000</option>
            <option value="500000">500.000</option>
          </select>
      )
    
    }
}