import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RouteComponentProps, withRouter } from "react-router-dom"
import { autoSuggest, getCategmapper, ICategMapper, MapItem, saveCategmapper } from "../api/categ_mapper"
import ShopeeCategSelect from "../components/shopee/ShopeeCategSelect"
import { emitEvent } from "../event"
import { RootState } from "../features"
import { CategIds } from "../model/shopee/category"
import { ITokpedCateg } from "../model/tokopedia/category"

function mapState(state: RootState){
  return {
    category: state.TokopediaManifestReducer.category
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>
type IProp = RouteComponentProps & PropsFromRedux

interface IState {
  mapper: ICategMapper
  nav: {
    start: number,
    limit: number
  }
}

class CategMap extends React.Component<IProp, IState> {
  state: IState = {
    mapper: {},
    nav: {
      start: 0,
      limit: 20
    }
  }

  async componentDidMount(): Promise<void> {

    const query = new URLSearchParams(this.props.location.search)
    const nav: {
      start: number,
      limit: number
    } = {
      start: parseInt(query.get('start')||"0"),
      limit: parseInt(query.get('limit')||"20")
    }

    this.setState({
      nav
    })

    const mapper = await getCategmapper()
    this.setState({
      mapper
    })
  }

  async autoSuggest(): Promise<void> {
    emitEvent('show_msg', {
      msg: 'Auto Suggest is runnning....'
    })
    await autoSuggest()
  }

  next(): void {
    const nav = this.state.nav
    const start = nav.start + nav.limit

    if(start >= this.props.category.length){
      return
    }

    this.setState({
      nav: { ...nav, start }
    })

    this.props.history.push({
      search: "?" + new URLSearchParams({
        start: start.toString(),
        limit: nav.limit.toString()
      }).toString()
    })
  }

  back(): void {
    const nav = this.state.nav
    const start = nav.start - nav.limit

    if(start < 0){
      return
    }

    this.setState({
      nav: { ...nav, start }
    })

    this.props.history.push({
      search: "?" + new URLSearchParams({
        start: start.toString(),
        limit: nav.limit.toString()
      }).toString()
    })
  }

  shopeeCateg(tokpedid: string): CategIds {
    const idnya = parseInt(tokpedid)
    const mapper = this.state.mapper[idnya]

    if(mapper){
      const categval: CategIds = [0, 0, 0, 0]

      return categval.map((val, index) => {
        const newval = mapper.shopee_categ[index]
        if(newval){
          return parseInt(newval)
        }
        return val
      }) as CategIds
    }

    return [0, 0, 0, 0]
  }

  async changeShopeeCateg(tcateg: ITokpedCateg, value: CategIds): Promise<void> {
    const idnya = parseInt(tcateg.id)
    const shopee_categ = value.map(val => val.toString())
    const mapItem: MapItem = {
      shopee_categ
    }

    const mapper = { ...this.state.mapper}
    mapper[idnya] = mapItem

    this.setState({
      mapper
    })
    
    await saveCategmapper({
      key: tcateg.id,
      data: {
        shopee_categ
      }
    })

    emitEvent('show_msg', {
      msg: `saving ${ tcateg.name }....`
    })

  }

  renderScope(): ITokpedCateg[] {
    const { start, limit } = this.state.nav
    const batas = start + limit
    return this.props.category.sort(this.sortScope).filter((value, index) => {
      if((index >= start) && (index <= batas)){
        return true
      }

      return false
    })
  }

  sortScope(categ: ITokpedCateg, categ1: ITokpedCateg): number {
    if(categ.name > categ1.name){
      return 1
    }
    return -1
  }

  renderCategories(categ: ITokpedCateg, index: number): JSX.Element {
    const shopeeCateg = this.shopeeCateg(categ.id)
    return (
      <div key={index} className="row borders mt-2">
        <div className="col">
          <div className="form-group">
            { categ.category.map((catname, index) => {
              return <strong key={catname}>{ catname }
              { index !== categ.category.length - 1 ? ' > ':'' }
              </strong>  
            })}

          </div>
          
          <div className="col">
            <ShopeeCategSelect
              value={shopeeCateg}
              selected={(shopeecat)=>this.changeShopeeCateg(categ, shopeecat)}
            ></ShopeeCategSelect>

          
          </div>
        </div>
      </div>
    )
  }


  render(): JSX.Element {

    const categories = this.renderScope()

    return (
      <div>
        <div className="row" style={{
          marginTop: '20px'
        }}>
          <div className="col">
            <div className="mt-4" ng-controller="pagingCategmapController">
              
              <button onClick={()=>this.back()} className="btn btn-sm btn-success">BACK</button>
              <button onClick={()=>this.next()} className="btn btn-sm btn-success">NEXT</button>
            </div>
          </div>
          <div className="col">
          <button onClick={() => this.autoSuggest()} className="btn btn-sm btn-primary mt-4">AUTO SUGGEST</button>
          </div>
        </div>
        <hr/>
        { categories.map(this.renderCategories.bind(this))}
        <hr/>
      </div>
    )
  }
}

const RenderCategMap = withRouter(connector(CategMap))

export default class CategMapPage extends React.Component {
  render(): JSX.Element {
    return (
      <RenderCategMap></RenderCategMap>
    )
  }
}