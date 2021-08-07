import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { setConfigDeleteProduct } from "../../api/tool"
import { emitEvent } from "../../event"
import { RootState, store } from "../../features"
import { CategIds } from "../../model/shopee/category"
import Checkbox from "../common/Checkbox"
import RangeHarga from "../common/RangeHarga"
import ShopeeCategSelect from "../shopee/ShopeeCategSelect"

function mapState(state: RootState){
  return {
    delfilter: state.DeleterReducer.delfilter
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

class FilterDelete extends React.Component<PropsFromRedux> {

  async save(): Promise<void> {
    await setConfigDeleteProduct(this.props.delfilter)
    emitEvent('show_msg', {
      msg: 'save filter data berhasil...'
    })
  }

  renderCategory(categids: CategIds, index: number): JSX.Element {
    return (
      <div key={index}>
        <ShopeeCategSelect
          value={categids}
          selected={categ => store.dispatch({ type: 'deleter/category/up', payload: {index, data: categ }})}
        ></ShopeeCategSelect>
        <button 
          onClick={() => store.dispatch({ type: 'deleter/category/add', payload: categids })}
          className="btn btn-primary btn-sm mt-2">Copy</button>
        <button
          onClick={() => store.dispatch({ type: 'deleter/category/remove', payload: index })}
          className="btn btn-danger btn-sm mt-2 mb-2">Delete</button>
      </div>
    )
  }

  render(): JSX.Element {

    const categories: CategIds[] = this.props.delfilter.category
    const { harga } = this.props.delfilter
    const { delfilter } = this.props

    return (
      <>
        <h4 style={{
          paddingTop: '24px',
          fontWeight: 'bold',
          fontSize: '1.3em',
          marginBottom: '20px'
        }}>Filter Delete:</h4>

        <div>
          <form>
            <Checkbox
              checked={delfilter.fil_keyword}
              onChange={value => store.dispatch({ type: 'deleter/filter', payload: { fil_keyword: value }})}
              className="mb-2 mt-2" /> Delete by Keyword

            { delfilter.fil_keyword &&
              <textarea
                value={delfilter.keyword}
                onChange={event => store.dispatch({ type: 'deleter/filter', payload: { keyword: event.target.value}})}
                className="form-control"></textarea>
            }              
            
          </form>
        </div>
        <div className="mt-3">
          <Checkbox
            checked={delfilter.fil_category}
            onChange={value => store.dispatch({ type: 'deleter/filter', payload: { fil_category: value }})}
          /> Delete by Category<br/>
          { delfilter.fil_category && 
          
            categories.map(this.renderCategory.bind(this))
          }

          { delfilter.fil_category &&
            <button
              onClick={() => store.dispatch({
                type: 'deleter/category/add',
                payload: [0, 0, 0, 0]
              })}
              className="btn btn-primary btn-sm mt-2">Add Category</button>
          }
        </div>

        <div className="mt-3">
          <form>
            <Checkbox
              checked={delfilter.fil_harga}
              onChange={value => store.dispatch({ type: 'deleter/filter', payload: { fil_harga: value }})}
              className="mb-2" /> Delete range harga
            { delfilter.fil_harga &&
              <RangeHarga
                harga={harga}
                onChange={value => store.dispatch({ type: 'deleter/filter', payload: { harga: value }})}
              ></RangeHarga>
            }
            
          </form>
        </div>

        <button
          onClick={()=>this.save()}
          className="btn btn-success btn-sm mt-2">Save Setting</button>
      </>
    )
  }
}

export default connector(FilterDelete)
