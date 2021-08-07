import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { IShopeeCateg } from "../../model/shopee/category"

function mapState(state: RootState){
  return {
    category: state.ShopeeManifestReducer.category
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IItemProp extends PropsFromRedux {
  value?: number
  level: number
  parentid: number
  shownone?: boolean
  selected?: (index: number, value: IShopeeCateg) => void
  noneSelected?: (index: number) => void
}

class SelectItem extends React.Component<IItemProp> {

  sortScope(categ: IShopeeCateg, categ1: IShopeeCateg): number {
    if(categ.display_name > categ1.display_name){
      return 1
    }
    return -1
  }

  filterScope(categ: IShopeeCateg): boolean {
    const parentid = this.props.parentid

    if(categ.parent_id === parentid){
      return true
    }

    return false
  }
  
  dataScope(): IShopeeCateg[] {
    const category = this.props.category
    return category.filter((categ) => this.filterScope(categ)).sort(this.sortScope)
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    
    const value: string = event.target.value
    const categories = this.props.category.filter(categ => categ.id === parseInt(value))
    const level = this.props.level

    if(value === '0'){
      if(this.props.noneSelected){
        this.props.noneSelected(this.props.level - 1)
      }
    }

    if(categories.length > 0){
      if(this.props.selected){
        this.props.selected(level - 1, categories[0])
      }
    }
  }

  renderOption(categ: IShopeeCateg): JSX.Element {
    return <option value={ categ.id } key={ categ.id }>{ categ.display_name }</option>
  }

  render(): JSX.Element {

    const categories = this.dataScope()

    return (
      <select className="form-control bot"
        value={this.props.value}
        onChange={(event) => this.onChange(event)}
      >
        { this.props.shownone && <option value="0"></option> }
        { categories.map((categ) => this.renderOption(categ))}
      </select>
    )
  }
}

export default connector(SelectItem)