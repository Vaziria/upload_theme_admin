import React from "react"
import { IMainPublicCateg } from "../../model/shopee/public_category"

interface IItemProp {
    value?: number
    items: IMainPublicCateg[]
    shownone?: boolean
    selected?: (value: IMainPublicCateg) => void
    noneSelected?: () => void
  }
  
  export class CategSelectItem extends React.Component<IItemProp> {
  
    renderOption(item: IMainPublicCateg): JSX.Element {
      return <option
        key={ item.catid }
        value={ item.catid }
      >{ item.display_name }</option>
    }
  
    onChange(event: React.ChangeEvent<HTMLSelectElement>): void {
      const value: number = parseInt(event.target.value)
        if(value === 0){
          if(this.props.noneSelected){
            this.props.noneSelected()
          }
        }
        this.props.items.forEach((categ) => {
          if(categ.catid === value){
            if(this.props.selected){
              this.props.selected(categ)
            }
          }
        })
    }
  
    render(): JSX.Element {
      const items: IMainPublicCateg[] = this.props.items
      return (
        // not implemented
        <select className="form-control bot" 
          onChange={(event) => this.onChange(event)}
          value={this.props.value}
        >
          
          { this.props.shownone && <option value={0}></option> }
          
          { items.map(this.renderOption) }
        </select>
      )
    }
  
  }
  