import React from "react"
import { deleteNamespace, getNamespaces, statCategory, statKota, statPrice } from "../api/product"
import MpSelect from "../components/common/MpSelect"
import SelectRangeHarga from "../components/common/SelectRangeHarga"
import StatCategory from "../components/stat/StatCategory"
import StatKota from "../components/stat/StatKota"
import StatPrice from "../components/stat/StatPrice"
import { emitEvent } from "../event"
import { MarketList } from "../model/Common"
import toCurrency, { ICategoryStat, IKotaStat, IPriceStat, ProductNamespace } from "../model/product"

interface IState {
  mpmode: MarketList,
  namespaces: ProductNamespace[]
  kotastats: IKotaStat[]
  categstats: ICategoryStat[]
  pricestats: IPriceStat[]
  rprice: number,
  namespace: string,
  is_public: boolean

}

export default class DetailProduct extends React.Component<unknown, IState> {
  state: IState = {
    mpmode: 'shopee',
    namespaces: [],
    pricestats: [],
    categstats: [],
    kotastats: [],
    rprice: 100000,
    namespace: '',
    is_public: true
  }

  async componentDidMount(): Promise<void> {
    const namespaces = await getNamespaces(this.state.mpmode)
    this.setState({
      namespaces
    })
  }

  async changeRangeHarga(rprice: number): Promise<void> {

    const mode = this.state.mpmode
    const namespace = this.state.namespace

    this.setState({
      rprice
    })

    const pricestats = await statPrice(mode, namespace, rprice)

    this.setState({
      pricestats
    })

  }

  async changeMode(mode: MarketList): Promise<void> {

    this.setState({
      mpmode: mode,
      namespaces: [],
      pricestats: [],
      categstats: [],
      kotastats: []
      
    })

    const namespaces = await getNamespaces(mode)
    this.setState({
      namespaces
    })
  }

  async showPublicCateg(): Promise<void>{
    const { is_public, namespace, mpmode } = this.state

    this.setState({
      categstats: [],
      is_public: !is_public
    })

    const categstats = await statCategory({
      marketplace: mpmode,
      namespace,
      is_public: !is_public,
    })

    this.setState({
      categstats
    })

  }

  async openNamespace(namespace: string): Promise<void> {

    const mode = this.state.mpmode
    const rprice = this.state.rprice
    const { is_public } = this.state

    this.setState({
      namespace
    })

    const [
      pricestats,
      categstats,
      kotastats
    ] = await Promise.all([
      statPrice(mode, namespace, rprice),
      statCategory({
        marketplace: mode,
        namespace,
        is_public,
      }),
      statKota(mode, namespace)
    ])

    this.setState({
      pricestats,
      categstats,
      kotastats
    })
  }

  async deleteNamespace(namespace: string): Promise<void> {
    await deleteNamespace(this.state.mpmode, namespace)
    emitEvent('show_msg', {
      msg: `Delete namespace ${namespace}`
    })

    this.setState({
      pricestats: [],
      categstats: [],
      kotastats: []
    })

  }

  renderNamespace(index: number, namespace: ProductNamespace): JSX.Element {
    return (
      <div key={index}>
        <li className="list-group-item">
          <p
            style={{
              marginBottom: '0.5rem'
            }}
          >{ namespace.name } [ {namespace.count} ]</p>
          <p
            style={{
              marginBottom: '0.5rem'
            }}
          >
            Harga : { toCurrency(namespace.price_min) } - { toCurrency(namespace.price_max) }
          </p>
          <button className="btn btn-sm btn-info mt-1" onClick={()=>this.openNamespace(namespace.name)}>OPEN</button>
          <button className="btn btn-sm btn-danger mt-1" onClick={()=>this.deleteNamespace(namespace.name)}>DELETE</button>
        </li>
      </div>
    )
  }

  render(): JSX.Element {

    const { 
      namespaces, 
      namespace, 
      mpmode,
      pricestats,
      categstats,
      kotastats,
      rprice,
      is_public
    } = this.state

    return (
      <div className="mt-custom">
        <div className="row mt-3">
          <div className="col-3">
            <form>
              <MpSelect
                onChange={(mode)=> this.changeMode(mode)}
              ></MpSelect>
            </form>

            <ul
              className="list-group"
              style={{
                marginTop: '10px'
              }}
            >
              { namespaces.map((namespace, index)=> this.renderNamespace(index, namespace)) }
            </ul>
            
            <div className="row">
              <div className="col">
                <div className="form-horizontal">
                  <div className="form-group">

                    <label className="mt-2"><b>RANGE HARGA :</b></label>
                    
                    <SelectRangeHarga
                      value={rprice}
                      selected={harga => this.changeRangeHarga(harga)}
                    ></SelectRangeHarga>
                    
                    <div
                      style={{
                        marginTop: '10px'
                      }}
                    ></div>


                    <StatPrice
                      marketplace={mpmode}
                      namespace={namespace}
                      stats={pricestats}
                      changeList={pricestats => this.setState({ pricestats })}
                    ></StatPrice>
                  </div>
                </div>
              </div>
            </div>

          </div>

          <div className="col-5">
            <div className="form-check form-check-inline">
              <input
                disabled={mpmode !== 'shopee'}
                checked={is_public}
                className="form-check-input"
                type="checkbox"
                onChange={() => this.showPublicCateg()}
              />
              <label className="form-check-label">Public Category</label>
            </div>

            <StatCategory
              is_public={is_public}
              marketplace={mpmode}
              namespace={namespace}
              stats={categstats}
              changeList={(categstats) => this.setState({categstats})}
            ></StatCategory>
          </div>

          <div className="col-4">
            <StatKota
              marketplace={mpmode}
              namespace={namespace}
              stats={kotastats}
              changeList={(kotastats) => this.setState({kotastats})}
            ></StatKota>
          </div>

        </div>
      </div>
    )
  }
}