import React, { useState } from "react"
import { ExportOutlined } from "@ant-design/icons"
import { aggsCategToCsv, deleteNamespace, exportDataSupplier, exportDataUrl, getNamespaces, shopeeResyncCateg, statCategory, statKota, statPrice } from "../../api/product"
import MpSelect from "../../components/common/MpSelect"
import SelectRangeHarga from "../../components/common/SelectRangeHarga"
import StatCategory from "../../components/stat/StatCategory"
import StatKota from "../../components/stat/StatKota"
import StatPrice from "../../components/stat/StatPrice"
import { emitEvent } from "../../event"
import { publicChainCsvFormat } from "../../features/shopee/manifest"
import { MarketList } from "../../model/Common"
import toCurrency, { ICategoryStat, IKotaStat, IPriceStat, ProductNamespace } from "../../model/product"
import { ICategItem } from "../../model/shopee/public_category"


import { Button, Dropdown, MenuProps } from "antd"




function ExportSupplier({ namespace }:{ namespace: string } ){
  const [loading, setLoading] = useState<boolean>(false)

  const exportSupplier = () => {
    setLoading(true)
    exportDataSupplier("shopee", namespace).then(() => setLoading(false))
  }

  const exportUrl = () => {
    setLoading(true)
    exportDataUrl("shopee", namespace).then(() => setLoading(false))
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: <Button type="link" onClick={exportUrl}>Export Url</Button>,
    },
    {
      key: '2',
      label: <Button type="link" onClick={exportSupplier}>Export Supplier</Button>
    }
  ];

  
  return <Dropdown menu={{ items }} placement="bottomLeft" arrow>
    <Button type="link" icon={<ExportOutlined rev={undefined} />} loading={loading}>export</Button>
  </Dropdown>
  
  // <Button type="link"  >
  //   Export Suplier
  // </Button>
}


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

    const namespaces = await getNamespaces(this.state.mpmode)
    this.setState({
      pricestats: [],
      categstats: [],
      kotastats: [],
      namespaces
    })

  }

  async saveCsv(): Promise<void> {

    const { categstats } = this.state
    const categpayload = categstats.map(categstat => {
      const categ = publicChainCsvFormat(categstat._id)
      return categ
    }).filter(categs => categs !== false)

    await aggsCategToCsv(categpayload as ICategItem[])

    emitEvent('show_msg', {
      msg: "save to category csv"
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
          { this.state.mpmode == "shopee" &&

            <ExportSupplier namespace={namespace.name} />
          }
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
            
            { is_public && mpmode == 'shopee' &&
            
            <span
              style={{
                float: "right"
              }}
            >
              <a
                style={{
                  color: 'blue'
                }}
                onClick={()=>this.saveCsv()}
              >save to csv</a>
              <span>  |   </span>

              <a
                style={{
                  color: 'blue'
                }}
                onClick={()=>{
                  shopeeResyncCateg({
                    marketplace: mpmode
                  })

                  emitEvent('show_msg', {
                    msg: "menjalankan resync, lihat di cmd"
                  })

                }}
              >resync category</a>
            </span>

            }
            

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