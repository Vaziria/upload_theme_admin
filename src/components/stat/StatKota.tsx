import React from "react"
import { deleteProducts } from "../../api/product"
import { emitEvent } from "../../event"
import { MarketList } from "../../model/Common"
import toCurrency, { IKotaStat } from "../../model/product"

interface IProp {
  namespace: string
  marketplace: MarketList
  stats: IKotaStat[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeList: (stats: IKotaStat[]) => any
}

export default class StatKota extends React.Component<IProp> {

  async deleteKota(stat: IKotaStat): Promise<void> {
    const { namespace, marketplace } = this.props
    await deleteProducts({
      marketplace,
      namespace,
      kota: stat._id
    })

    emitEvent('show_msg', {
      msg: `delete kota ${stat._id}`
    })

    const stats = this.props.stats.filter(item => item._id !== stat._id)
    this.props.changeList(stats)
    
  }

  renderList(stat: IKotaStat): JSX.Element {
    return (
      <tr key={stat._id}>
        <td>{stat._id}</td>
        <td scope="row">{ toCurrency(stat.price_min) } - { toCurrency(stat.price_max)}</td>
        <td scope="row">{ stat.count }</td>
        <td scope="row">
          <button className="btn btn-sm btn-danger" type="button" onClick={()=> this.deleteKota(stat)}>
            DELETE
          </button>
        </td>
      </tr>
    )
  }

  render(): JSX.Element {
    
    const { stats } = this.props

    return (
      <table id="example" className="table table-striped table-bordered">
        <thead>
          <tr>
            <th scope="col">Kota</th>
            <th scope="col">Price</th>
            <th scope="col">Jumlah</th>
            <th scope="col">action</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat=>this.renderList(stat))}
        </tbody>
      </table>
    )
  }
}