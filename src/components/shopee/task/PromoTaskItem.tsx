import React from "react"
import { getChainByid } from "../../../features/shopee/manifest"
import { IProductPageQuery, IPromoConfig, IPromosiTask } from "../../../model/shopee/PromosiSetup"
import AkunTextarea from "../../common/AkunTextarea"
import EPDateSelect from "../../common/EPDateSelect"
import { InputNumber } from "../../common/InputNumber"
import ShopeeCategSelect from "../ShopeeCategSelect"

interface IProp {
  item: IPromosiTask
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  update: (id: string, task: Partial<IPromosiTask>) => any
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  delete: (id: string) => any
  
}

export default class PromoTaskItem extends React.Component<IProp> {
  
  updateConfig(data: Partial<IPromoConfig>): void {
    const oldconfig = this.props.item.config

    const config: IPromoConfig = {
      ...oldconfig,
      ...data
    }

    this.props.update(this.props.item.id, {
      config
    })

  }

  updateQuery(data: Partial<IProductPageQuery>): void {
    const oldconfig = this.props.item.config.query

    const query: Partial<IProductPageQuery> = {
      ...oldconfig,
      ...data
    }

    this.updateConfig({
      query
    })
  }

  render(): JSX.Element {
    const { item } = this.props
    const { config } = item
    const { query } = config
    const category_id = getChainByid(query.category_id || 0)

    return (
      <div className="row">
        <div className="col">
          <div className="row">
            <div className="col">
              <span> Taskid : <br/><strong>{item.id}</strong></span>
            </div>
            <div className="col">
              name: <input type="text" className="form-control inline"
                value={ item.config.name }
                onChange={(e) => this.updateConfig({ name: e.target.value })}
              />
            </div>
          </div>
          
          

          <AkunTextarea
            akuns={item.akuns}
            update={akuns => this.props.update(item.id, { akuns })}
          ></AkunTextarea>
        </div>
        <div className="col">

          {/* tanggal promo */}

          <div className="row">
            <div className="col">
              Start Promo: <EPDateSelect
                onChange={tanggal => this.updateConfig({ start_time: tanggal })}
                value={config.start_time}

                type="text" className="form-control"
              />
            </div>

            <div className="col">
              End Promo: <EPDateSelect
                onChange={tanggal => this.updateConfig({ end_time: tanggal })}
                value={config.end_time}

                type="text" className="form-control"
              />
            </div>
          </div>
          
          {/* diskon dan jumlah produk */}
          
          <div className="row">
            <div className="col">
              Discount(%): <InputNumber
                value={config.discount}
                changeVal={value => this.updateConfig({ discount: value })}
                className="form-control"
              />
            </div>

            <div className="col">
              Jumlah Product: <InputNumber
                value={config.count_product}
                changeVal={value => this.updateConfig({ count_product: value })}
                className="form-control"
              />
            </div>
          </div>

          {/* product created filtering */}

          <div className="row">
            <div className="col">
              product created min: <EPDateSelect
                value={config.ctime_min || 0}
                onChange={value => this.updateConfig({ ctime_min: value })}
                className="form-control"
              />
            </div>

            <div className="col">
              product created max: <EPDateSelect
                value={config.ctime_max || 0}
                onChange={value => this.updateConfig({ ctime_max: value })}
                className="form-control"
              />
            </div>
          </div>

          <div>
            Category: <ShopeeCategSelect
              value={category_id}
              selected={categ => {
                const ids = categ.filter(x => x !== 0)
                this.updateQuery({
                  category_id: ids[ids.length - 1]
                })
              }}
            />
          </div>




          

          <button className="btn btn-sm btn-danger"
            onClick={() => this.props.delete(item.id)}
          >delete</button>

        </div>
      </div>
    )
  }
}