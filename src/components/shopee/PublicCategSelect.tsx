import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { RootState } from "../../features"
import { IMainPublicCateg } from "../../model/shopee/public_category"
import { CategSelectItem } from "./CategSelectItem"

function mapState(state: RootState){
  return {
    public_category: state.ShopeeManifestReducer.publicCategory
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IProp extends PropsFromRedux {
  showLabel?: boolean
  value?: number
  onSelected?: (categ: IMainPublicCateg) => void
}

interface IState {
  sub: IMainPublicCateg[]
  parent?: IMainPublicCateg
  value?: IMainPublicCateg
}

class PublicCategSelect extends React.Component<IProp, IState> {

  state: IState = {
    parent: undefined,
    sub: [],
    value: undefined
  }

  componentDidMount(){
    const value = this.props.value
    
    if(value){
      this.getCateg(value)
    }
    
  }

  getCateg(value: number): null | IMainPublicCateg {

    let hasil: null | IMainPublicCateg = null

    this.props.public_category.forEach((pubcateg) => {
      const main = pubcateg.main
      const sub = pubcateg.sub
      if(value === main.catid) {
        this.setState({
          parent: main,
          value: main
        })

        hasil = main
      }

      sub.forEach((subcateg)=>{
        
        if(value === subcateg.catid){
          this.setState({
            sub,
            value: subcateg
          })
          hasil = subcateg
        }
      })


    })

    return hasil

  }

  parentChange(value: IMainPublicCateg): void {
    this.setState({
      parent: value,
      value
    })

    this.props.public_category.forEach((categ) => {
      if(categ.main.catid === value.catid){
        const sub: IMainPublicCateg[] = categ.sub
        
        this.setState({
          sub
        })

        if(this.props.onSelected){
          this.props.onSelected(value)
        }

      }
    })
  }


  render(){

    const showLabel = this.props.showLabel
    const sub = this.state.sub
    const pubcategory: IMainPublicCateg[] = this.props.public_category.map((categ) => {
      return categ.main
    })

    const value = this.props.value
    let parent_id = 0
    let cat_id = 0
    if(value){
      const categ = this.state.value
      if(categ){
        if(categ.parent_category === 0){
          parent_id = categ.catid
        } else {
          parent_id = categ.parent_category
          cat_id = categ.catid
        }
      }
    }
    

    return (
      <div className="form-group">
      { showLabel && <label>Shopee :</label> }
        
        <CategSelectItem
          value={parent_id}
          items={pubcategory}
          selected={(value) => this.parentChange(value)}
        ></CategSelectItem>

        { this.state.sub.length > 0 &&
          <CategSelectItem
            value={cat_id}
            shownone={true}
            items={sub}
            selected={(categ) => {
              if(this.props.onSelected){
                this.setState({
                  value: categ
                })
                this.props.onSelected(categ)
              }
            }}
            noneSelected={() => {
              if(this.props.onSelected){
                const parent = this.state.parent
                if(parent){
                  this.props.onSelected(parent)
                } 
              }
            }}
          ></CategSelectItem>
        }
    </div>
    )
  }
}

export default connector(PublicCategSelect)
