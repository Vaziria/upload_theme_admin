import React from "react"
import { MarketList, marketList } from "../../model/Common"

interface IProp {
  onChange: (mode: MarketList) => void
  value?: MarketList
}

export default class MpSelect extends React.Component<IProp> {
  renderOption(market: MarketList): JSX.Element {
    return <option value={market} key={market}>{ market }</option>
  }

  render(): JSX.Element {
    return (
      <select className="form-control"
        value={this.props.value}
        onChange={(event) => {
          // eslint-disable-next-line
          const value = event.target.value as any
          this.props.onChange(value)
        }}
      >
        { marketList.map(this.renderOption) }
      </select>
    )
  }
}