import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { deleteStatCateg } from "../../api/product"
import { emitEvent } from "../../event"
import { RootState } from "../../features"
import { publicChainName } from "../../features/shopee/manifest"
import { getChainName } from "../../features/tokopedia/manifest"
import { MarketList } from "../../model/Common"
import toCurrency, { ICategoryStat } from "../../model/product"

function mapState(state: RootState){
  return {
    publicCateg: state.ShopeeManifestReducer.publicCategory
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>


interface IProps extends PropsFromRedux {
  is_public: boolean
  namespace: string
  marketplace: MarketList
  stats: ICategoryStat[],
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  changeList: (stats: ICategoryStat[]) => any
}

class StatCategory extends React.Component<IProps> {

  async deleteCateg(categ: ICategoryStat): Promise<void> {
    await deleteStatCateg(categ._id, this.props.is_public)

    const name = categ.name.join(' > ')

    emitEvent('show_msg', {
      msg: `delete category ${name}`
    })

    const categs = this.props.stats.filter(item => item._id !== categ._id)
    this.props.changeList(categs)
    
  }

  getChainName(stat: ICategoryStat): string {
    const { is_public, marketplace } = this.props
    
    if(marketplace === 'tokopedia'){
      const name = getChainName(stat._id)
      return name.join(' > ')
    }

    if(is_public){

      const { chain } = publicChainName(stat._id)

      if(chain.length > 0){
        return chain.join(' > ')
      } else {
        return 'Undefined'
      }
    }

    return stat.name.join(' > ')
  }

  renderList(stat: ICategoryStat): JSX.Element {

    const name = this.getChainName(stat)

    return (
      <tr key={stat._id}>
        <td>{name}</td>
        <td scope="row">{ toCurrency(stat.price_min) } - { toCurrency(stat.price_max)}</td>
        <td scope="row">{stat.count}</td>
        <td scope="row">
          <button className="btn btn-sm btn-danger" type="button" onClick={()=> this.deleteCateg(stat)}>
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
            <th scope="col">Category</th>
			<th scope="col">Price</th>
			<th scope="col">Jumlah</th>
			<th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {stats.map(stat=>this.renderList(stat))}
        </tbody>
      </table>
    )
  }
}

export default connector(StatCategory)