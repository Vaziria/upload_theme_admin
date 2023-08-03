import React from "react"
import { connect, ConnectedProps } from "react-redux"
import { cekBot, cekOrder, getDeleteConfig, runDelete, uploadAkun } from "../api/tool"
import Checkbox from "../components/common/Checkbox"
import DateSelect from "../components/common/DateSelect"
import { InputNumber } from "../components/common/InputNumber"
import FilterDelete from "../components/tool/FilterDelete"
import { emitEvent } from "../event"
import { RootState, store } from "../features"
import { getConfig } from "../features/deleter"

function mapState(state: RootState){
  return {
    deletequery: state.DeleterReducer.delquery
  }
}

const connector = connect(mapState, {})
type PropsFromRedux = ConnectedProps<typeof connector>

interface IState {
  data: string
}

class Tool extends React.Component<PropsFromRedux, IState> {
  state: IState = {
    data: ''
  }

  async componentDidMount(): Promise<void> {
    await getConfig()
    this.getConfig()
  }

  async getConfig(): Promise<void> {
    const deleteConfig = await getDeleteConfig()
    
    // deleteConfig.tanggal = new Date().toISOString()
    if (!deleteConfig.awaltanggal) {
      deleteConfig.awaltanggal = ''
    }

    store.dispatch({ type: 'deleter/query', payload: { ...deleteConfig } })
  }

  async cek(): Promise<void> {
    await uploadAkun({data: this.state.data })
    await cekBot()
  }

  async getOrder(): Promise<void> {
    await uploadAkun({data: this.state.data })
    await cekOrder()
  }

  async deleteProduct(): Promise<void> {
    await uploadAkun({
      data: this.state.data
    })
    await runDelete(this.props.deletequery)

    emitEvent('show_msg', {
      msg: 'run Deleter Berhasil......'
    })
  }

  render(): JSX.Element {
    const delquery = this.props.deletequery

    return (
      <div>
        
        <h4 style={{
          paddingTop: '24px',
          marginBottom: '-6px',
          fontWeight: 'bold',
          fontSize: '1.3em'}}
        >Tools Delete & Cek Product:</h4>

        <div className="row" style={{
          padding: '20px 0px 20px 0px'
        }}>
          <div className="col-lg-8">
            
              <textarea
                value={ this.state.data }
                onChange={ event => this.setState({ data: event.target.value }) }
                rows={20}
                className="form-control"
                placeholder="Masukkan Akun Yang akan di Delete"></textarea>
              <button className="btn btn-primary btn-sm" onClick={()=>this.cek()} style={{ marginTop: '10px' }}>REPORT CEK BOT</button>
              <button className="btn btn-success btn-sm" onClick={()=>this.getOrder()} style={{ marginTop:'10px'}}>REPORT CEK ORDER</button>
            
            
            <FilterDelete></FilterDelete>
            
          </div>

          <div className="col-lg-4">
            
            <div className="form-group">
              <label>Limit Delete:</label>
              <InputNumber
                value={delquery.delete}
                changeVal={value => store.dispatch({ type: 'deleter/query', payload: {delete: value}})}
                type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>View:</label>
              <InputNumber
                value={delquery.view}
                changeVal={value => store.dispatch({ type: 'deleter/query', payload: {view: value}})}
                type="text" className="form-control" />
            </div>
            <div className="form-group">
              <label>Sold:</label>
              <InputNumber
                value={delquery.sold}
                changeVal={value => store.dispatch({ type: 'deleter/query', payload: {sold: value}})}
                type="text" className="form-control" />
            </div>
            
            <div className="form-group">
              <label>Tanggal Awal:</label>
              <DateSelect
                value={delquery.awaltanggal}
                onChange={awaltanggal => store.dispatch({ type: 'deleter/query', payload: {awaltanggal}})}

                className="form-control"
              ></DateSelect>
            </div>
            <div className="form-group">
              <label>Tanggal Akhir:</label>
              <DateSelect
                value={delquery.tanggal}
                onChange={ tanggal => store.dispatch({ type: 'deleter/query', payload: { tanggal }})}
                className="form-control" />
            </div>

            <div className="checkbox" id="blokir">
              <label>
                <Checkbox
                  checked={delquery.blokir}
                  onChange={value => store.dispatch({ type: 'deleter/query', payload: { blokir: value }})}
                /> <strong>Hanya yg diblokir</strong></label>
            </div>
            <div className="checkbox" id="diperiksa">
              <label>
                <Checkbox
                  checked={delquery.diperiksa}
                  onChange={value => store.dispatch({ type: 'deleter/query', payload: { diperiksa: value }})}
                /> <strong>Yang Diperiksa</strong></label>
            </div>

            <div className="checkbox" id="diarsipkan">
              <label>
                <Checkbox
                  checked={delquery.diarsipkan}
                  onChange={value => store.dispatch({ type: 'deleter/query', payload: { diarsipkan: value }})}
                /> <strong>Diarsipkan</strong></label>
            </div>
            
            <button
              onClick={() => this.deleteProduct()}
              className="btn btn-danger btn-sm"
              style={{marginTop: '10px'}}>DELETE PRODUK</button>
          
            
          </div>
        </div>
      </div>
    )
  }
}

const ToolElement = connector(Tool)

export default class ToolPage extends React.Component {
  render(): JSX.Element {
    return (
      <ToolElement></ToolElement>
    )
  }
}
