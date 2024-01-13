import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { ITokpedCateg } from "../../model/tokopedia/category"
import SelectItem from "./SelectItem"

export type FixedSizeArray<N extends number, T> = N extends 0 ? never[] : {
  0: T;
  length: N;
} & Array<T>;

export function toFixArray<M>(data: M[], fil: M): FixedSizeArray<3, M> {
  const hasil = [...data]
  for(let i=data.length + 1; i<3; i++){
    hasil[i] = fil
  }
  return hasil as FixedSizeArray<3, M>
} 

function mapState(state: RootState){
  return {
    category: state.TokopediaManifestReducer.category
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
  showLabel?: boolean
  disabled?: boolean
  value: string[]
  selected: (categs: string[]) => void
}

class TokopediaCategorySelect extends React.Component<IProp> {

  onChange(index: number, categ?: ITokpedCateg):void {
    const value: string[] = [...this.props.value]
    if(categ){
      value[index] = categ.id.toString()

      for(let i=index + 1; i<3; i++){
        value[i] = "0"
      }

    } else {
      for(let i=index; i<3; i++){
        value[i] = "0"
      }
      
    }
    this.props.selected(value)
  }



  render(): JSX.Element {
    const showLabel = this.props.showLabel
    const value = this.props.value

    return (
      <div className="form-group">
        { showLabel && <label>Tokopedia :</label> }

        
        <SelectItem
          value={value[0]}
          level={1}
          parentid="0"
          shownone={ true }
          selected={(index, categ) => this.onChange(index, categ)}
          noneSelected={(index) => this.onChange(index)}
          disabled={this.props.disabled}
        ></SelectItem>

        <SelectItem
        value={value[1]}
          level={2}
          parentid={value[0]}
          shownone={ true }
          selected={(index, categ) => this.onChange(index, categ)}
          noneSelected={(index) => this.onChange(index)}
          disabled={this.props.disabled}
        ></SelectItem>

        <SelectItem
        value={value[2]}
          level={3}
          parentid={value[1]}
          shownone={ true }
          selected={(index, categ) => this.onChange(index, categ)}
          noneSelected={(index) => this.onChange(index)}
          disabled={this.props.disabled}
        ></SelectItem>

        {/* <select className="form-control bot" ng-model="data[0]">
          <option ng-repeat="category in categories | filter:tokpedFilter(0) | orderBy:'category[0]'" value="{{category.id}}"> {{ category.category[0] }} </option>
        </select>
        <select className="form-control bot" ng-model="data[1]">
          <option ng-repeat="category in categories | filter:tokpedFilter(1) | orderBy:'category[1]'" value="{{category.id}}"> {{ category.category[1] }} </option>
        </select>
        <select className="form-control bot" ng-model="data[2]">
          <option ng-repeat="category in categories | filter:tokpedFilter(2) | orderBy:'category[2]'" value="{{category.id}}"> {{ category.category[2] }} </option>
        </select> */}
      </div>

    )
  }
}

export default connector(TokopediaCategorySelect)
