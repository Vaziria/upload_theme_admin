import React, { useState } from "react"
import { ExportOutlined } from "@ant-design/icons"
import { aggsCategToCsv, deleteNamespace, exportDataSupplier, exportDataUrl, getNamespaces, shopeeResyncCateg, statCategory, statKota, statPrice, renameNamespace } from "../../api/product"
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


import { Button, Dropdown, Input, MenuProps, Space } from "antd"




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

interface Rename {
  active: boolean
  value: string
  loading: boolean
}

interface RenameProductNamespace extends ProductNamespace {
  rename: Rename
}


interface IState {
  mpmode: MarketList,
  namespaces: RenameProductNamespace[]
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
    is_public: true,
  }

  async componentDidMount(): Promise<void> {
    await this.getNamespaces(this.state.mpmode)
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

    await this.getNamespaces(mode)
  }

  async getNamespaces(mp: MarketList): Promise<void> {
    const namespaces = await getNamespaces(mp)
    this.setState({
      namespaces: namespaces.map((namespace) => ({
        ...namespace,
        rename: {
          active: false,
          value: namespace.name,
          loading: false,
        },
      }))
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

    await this.getNamespaces(this.state.mpmode)
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

  async renameProductNamespace(index: number, namespace: RenameProductNamespace): Promise<void> {
    this.updateNamespaceRename(index, { loading: true })
    try {
      await renameNamespace({
        marketplace: this.state.mpmode,
        namespace: namespace.name,
        update_namespace: namespace.rename.value,
      })
      await this.getNamespaces(this.state.mpmode)
    } catch {
      this.updateNamespaceRename(index, { loading: false, active: false })
    }
  }

  updateNamespaceRename(index: number, rename: Partial<Rename>): void {
    const namespaces = this.state.namespaces
    const namespace = namespaces[index]
    
    namespace.rename = {...namespace.rename, ...rename}
    namespaces[index] = namespace

    this.setState({ namespaces: namespaces })
  }

  renderNamespaceTitle(index: number, namespace: RenameProductNamespace): JSX.Element {

    if (namespace.rename.active) {
      return <div className="mb-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>

        <Input
          value={namespace.rename.value}
          className="mr-2"
          style={{ minWidth: "150px" }}
          onChange={(e) => this.updateNamespaceRename(index, { value: e.target.value })}
        ></Input>

        <Space>
          <Button
            disabled={namespace.rename.loading}
            onClick={() => this.updateNamespaceRename(index, { active: false })}
          >cancel</Button>
          <Button
            loading={namespace.rename.loading}
            disabled={namespace.rename.loading}
            onClick={() => this.renameProductNamespace(index, namespace)}
          >rename</Button>
        </Space>
      </div>
    }

    return <div className="mb-2" style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <strong>{ namespace.name } [ {namespace.count} ]</strong>
      <Button
        onClick={() => this.updateNamespaceRename(index, { active: true })}
      >rename</Button>
    </div>
  }

  renderNamespace(index: number, namespace: RenameProductNamespace): JSX.Element {
    
    return (
      <div key={index}>
        <li className="list-group-item">
          {this.renderNamespaceTitle(index, namespace)}
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
      <div className="">
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
              { namespaces
                .sort((a, b) => a.name > b.name ? 1 : -1)
                .map((namespace, index)=> this.renderNamespace(index, namespace))
              }
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