import React from "react"
import { generateCategoryCsv } from "../../api/task"
import { toPublicCategCsv } from "../../model/shopee/public_category"
import { createTaskId, ITask } from "../../model/Task"
import ModeSelect from "../common/ModeSelect"
import MpSelect from "../common/MpSelect"
import PublicCategSelect from "../shopee/PublicCategSelect"
import TokopediaCategorySelect from "../tokopedia/TokopediaCategorySelect"


interface IProp {
  task: ITask
  update: (id: string, data: Partial<ITask>) => void
  delete: (task: ITask) => void
  copy: (task: ITask) => void
}

export default class TaskItem extends React.Component<IProp> {
  
  updateData(data: Partial<ITask>): void {
    this.props.update(this.props.task._id, data)
  }

  async genCategory(): Promise<void> {
    await generateCategoryCsv(this.props.task.marketplace)
  }

  renderCategoryMode(): JSX.Element {
    let categorySelect: JSX.Element | null = null
    const marketplace = this.props.task.marketplace

    if(marketplace === 'shopee'){
      let categid = 0
      if(this.props.task.shopee_categ?.catid){
        categid = this.props.task.shopee_categ.catid
      } 

      categorySelect = <div>
        <PublicCategSelect
          showLabel={true}
          value={ categid }
          onSelected={(categ) => {
            this.updateData({
              shopee_categ: toPublicCategCsv(categ)
            })
          }}
        
        ></PublicCategSelect>
      </div>
    }

    if(marketplace === 'tokopedia'){
      const task = this.props.task
      let categs: [string, string, string] = ["0", "0", "0"]
      if(task.tokped_categ){
        categs = task.tokped_categ
      }

      categorySelect = (
        <div>
          <TokopediaCategorySelect
            value={categs}
            showLabel={true}
            selected={(categs) => {
              this.updateData({
                tokped_categ: categs
              })
            }}
          ></TokopediaCategorySelect>
        </div>
      )
    }

    return (
      <div className="mb-3">
        { categorySelect }
      </div>
    )
  }
  
  renderDumpCategoryMode(): JSX.Element {
    const task = this.props.task
    return (
      <div>
        <p>Silahkan edit di <strong>{ task.marketplace }_list_category.csv</strong> atau </p>
        <button className="btn btn-sm btn-info mb-2"
          onClick={()=>this.genCategory()}
          style={{
            width: "55%"
          }}>

          GENERATE CATEGORY
        </button>
      </div>
    )
  }

  renderProductUrl(): JSX.Element {
    const task = this.props.task
    return (
      <div>
        <div>
          <input
            value={ task.product_url }
            onChange={(event) => {
              this.updateData({
                product_url: event.target.value
              })
            }}
            className="form-control" 
            type="text" 
            placeholder="example : list_product.txt" />
        </div>
      </div>
    )
  }

  renderTokoUsername(): JSX.Element {
    const task = this.props.task

    return (
      <div>
        <div>
          <input
            defaultChecked={task.use_filter}
            onChange={() => {
              const use_filter = !this.props.task.use_filter
              this.updateData({
                use_filter
              })
            }}
            type="checkbox"/> use filter
          <input
            value={task.toko_username}
            onChange={(event) => {
              this.updateData({
                toko_username: event.target.value
              })
            }}
            className="form-control"
            type="text"
            placeholder="example : list_username_toko.txt" />
        </div>
      </div>
    )
  }

  renderKeyword(): JSX.Element {
    const task = this.props.task

    const { marketplace } = task
    if(marketplace === 'tokopedia'){
      return <div>
        <h3>not supported....</h3>
      </div>
    }
    
    return (
      <div>
        <div>
          <input
            defaultChecked={task.use_filter}
            onChange={() => {
              const use_filter = !this.props.task.use_filter
              this.updateData({
                use_filter
              })
            }}
            type="checkbox"/> use filter
          <input
            value={task.keyword}
            onChange={(event) => {
              this.updateData({
                keyword: event.target.value
              })
            }}
            className="form-control"
            type="text"
            placeholder="example : list_keyword.txt" />
        </div>
      </div>
    )
  }

  renderUrlMode(): JSX.Element {
    let url = this.props.task.url
    if(!url){
      url = {
        raw: ""
      }
    }
    
    return (
      <div className="col-6">
        <div className="mb-3">
          <label>Url Keyword:</label>
          <input
            value={url.raw}
            onChange={(event) => {
              if(url){
                url.raw = event.target.value
                this.updateData({
                  url
                })
              }

            }}
            className="form-control"
            type="text" />
        </div>
      </div>
    )
  }
  
  render(): JSX.Element {

    const mode = this.props.task.mode
    const task = this.props.task

    return (
      <div className="row mt-4" ng-repeat="task in taskers">
        <div className="col-4">
          <div className="form-group">
            <label>Mode Grab:</label>
              <ModeSelect
              value={task.mode}
                onChange={(mode) => {
                  this.updateData({
                    mode
                  })
                }}
              ></ModeSelect>
          </div>
          
          
          { mode === 'category' && this.renderCategoryMode() }
          { mode === 'dump_category' && this.renderDumpCategoryMode() }
          { mode === 'product_url' && this.renderProductUrl() }
          { mode === 'toko_username' && this.renderTokoUsername() }
          { mode === 'keyword' && this.renderKeyword() }
          
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Marketplace :</label>
              <MpSelect
                value={task.marketplace}
                onChange={(marketplace) => {
                  this.updateData({
                    marketplace
                  })
                }}
              ></MpSelect>
          </div>
        </div>
        <div className="col-4">
          <div className="form-group">
            <label>Collection :</label>
            <input 
              value={task.namespace}
              onChange={(event) => {
                this.updateData({
                  namespace: event.target.value
                })
              }}
              className="form-control" type="text" />
            
          </div>
        </div>
        
        { mode === 'url' && this.renderUrlMode() }

        <div className="col-12">
          <button
            onClick={() => this.props.delete(task) }
            className="btn btn-sm btn-danger">DELETE</button>
          <button
            onClick={() => {
              const task: ITask = { ...this.props.task}
              task._id = createTaskId()
              this.props.copy(task)
            } }
            className="btn btn-sm btn-secondary">COPY</button>
        </div>
      </div>
    )
  }
}