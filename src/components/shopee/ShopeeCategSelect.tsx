import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { CategIds, IShopeeCateg } from "../../model/shopee/category"
import SelectItem from "./SelectItem"

function mapState(state: RootState){
  return {
    category: state.ShopeeManifestReducer.category
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
  showLabel?: boolean
  value: CategIds
  selected: (categs: CategIds) => void
}

class ShopeeCategorySelect extends React.Component<IProp> {

  onChange(index: number, categ?: IShopeeCateg):void {
    const value: CategIds = [...this.props.value]
    if(categ){
      value[index] = categ.id

      for(let i=index + 1; i<3; i++){
        value[i] = 0
      }

    } else {
      for(let i=index; i<3; i++){
        value[i] = 0
      }
      
    }
    this.props.selected(value)
  }



  render(): JSX.Element {
    const showLabel = this.props.showLabel
    const value = this.props.value

    return (
      <div className="form-group">
        { showLabel && <label>Shopee :</label> }
        <SelectItem
          value={value[0]}
          level={1}
          parentid={0}
          shownone={ true }
          selected={(index, categ) => this.onChange(index, categ)}
          noneSelected={(index) => this.onChange(index)}
        ></SelectItem>

        { value[0] !== 0 &&
          <SelectItem
          value={value[1]}
            level={2}
            parentid={value[0]}
            shownone={ true }
            selected={(index, categ) => this.onChange(index, categ)}
            noneSelected={(index) => this.onChange(index)}
          ></SelectItem>
        }

        { value[1] !== 0 &&
          <SelectItem
          value={value[2]}
            level={3}
            parentid={value[1]}
            shownone={ true }
            selected={(index, categ) => this.onChange(index, categ)}
            noneSelected={(index) => this.onChange(index)}
          ></SelectItem>
        }

        { value[2] !== 0 &&
          <SelectItem
            value={value[3]}
              level={4}
              parentid={value[2]}
              shownone={ true }
              selected={(index, categ) => this.onChange(index, categ)}
              noneSelected={(index) => this.onChange(index)}
            ></SelectItem>
        }
      </div>

    )
  }
}

export default connector(ShopeeCategorySelect)
