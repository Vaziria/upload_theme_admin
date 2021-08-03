import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { ITokpedCateg } from "../../model/tokopedia/category"

function mapState(state: RootState){
  return {
    category: state.TokopediaManifestReducer.category
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IItemProp extends PropsFromRedux {
  value?: string
  level: number
  parentid: string
  shownone?: boolean
  selected?: (index: number, value: ITokpedCateg) => void
  noneSelected?: (index: number) => void
}

class SelectItem extends React.Component<IItemProp> {

  sortScope(categ: ITokpedCateg, categ1: ITokpedCateg): number {
    if(categ.name > categ1.name){
      return 1
    }
    return -1
  }

  filterScope(categ: ITokpedCateg): boolean {
    const level = this.props.level
    const parentid = this.props.parentid

    if(categ.category.length === level){
      if(categ.parentid === parentid){
        return true
      }

      return false
    }

    return false
  }
  
  dataScope(): ITokpedCateg[] {
    const category = this.props.category
    return category.filter((categ) => this.filterScope(categ)).sort(this.sortScope)
  }

  onChange(event: React.ChangeEvent<HTMLSelectElement>): void {
    
    const value: string = event.target.value
    const categories = this.props.category.filter(categ => categ.id === value)
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

  renderOption(categ: ITokpedCateg): JSX.Element {
    return <option value={ categ.id } key={ categ.id }>{ categ.name }</option>
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