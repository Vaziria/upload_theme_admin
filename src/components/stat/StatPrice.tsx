import React from "react"
import { deleteProducts } from "../../api/product"
import { emitEvent } from "../../event"
import { MarketList } from "../../model/Common"
import toCurrency, { IPriceStat } from "../../model/product"

interface IProps {
  stats: IPriceStat[]
  namespace: string
  marketplace: MarketList
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeList: (stats: IPriceStat[]) => any
}

export default class StatPrice extends React.Component<IProps> {

  async delete(stat: IPriceStat): Promise<void> {
    const { namespace, marketplace } = this.props
    await deleteProducts({
      namespace,
      marketplace,
      pmin: stat._id[0],
      pmax: stat._id[1]
    })

    const stats = this.props.stats.filter((item)=>item._id != stat._id)
    this.props.changeList(stats)

    emitEvent('show_msg', {
      msg: "delete range berhasil....."
    })

  }

  render(): JSX.Element {
    const { stats } = this.props
    return (
      <ul className="list-group">
        {stats.map((stat, index) => {
          return (
            <li className="list-group-item" key={index}>
              <p>Range Harga : { toCurrency(stat._id[0]) } - { toCurrency(stat._id[1]) } </p>
              <p>Jumlah : <strong> { stat.count } </strong></p>
              <span>
                <button className="btn btn-sm btn-danger" onClick={() => this.delete(stat)}>Delete</button>
              </span>
            </li>
          )
        })}
      </ul>
    )
  }
}