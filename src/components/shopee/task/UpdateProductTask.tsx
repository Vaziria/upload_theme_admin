import React from "react"
import { IUpdateProductTask, ITask } from "../../../model/shopee/TaskSetup"
import AkunTextarea from "../../common/AkunTextarea"
import { InputNumber } from "../../common/InputNumber"

interface IProp {
    item: IUpdateProductTask
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    update: (id: string, task: Partial<ITask>) => any
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    delete: (id: string) => any

}

type PriceChangeType = IUpdateProductTask['config']['price_change_type']
type ListTypeTitle = {
    [k in PriceChangeType]: string
}

const listType: PriceChangeType[] = ['percent', 'price_val']
const listTypeTitle: ListTypeTitle = {
    percent: "persen harga",
    price_val: "harga"
}

export default class UpdatedProductTask extends React.Component<IProp> {
    
    updateConfig(data: Partial<IUpdateProductTask['config']>): void {
        const oldconfig = this.props.item.config
    
        const config: IUpdateProductTask['config'] = {
          ...oldconfig,
          ...data
        }
    
        this.props.update(this.props.item.id, {
          config
        })
    
    }

    render(): JSX.Element {

        const item = this.props.item
        const { config } = item
        const { price_change_type } = config

        return (
            <div className="row">
                <div className="col">
                    <div>
                        <span> Taskid : <br/><strong>{item.id}</strong></span>
                    </div>

                    <AkunTextarea
                    akuns={item.akuns}
                    update={akuns => this.props.update(item.id, { akuns })}
                    ></AkunTextarea>
                </div>

                <div className="col">
                    <div className="row">
                        <div className="col">
                            Up Price { price_change_type === 'percent' && '( % )' } : <InputNumber
                                value={config.price}
                                changeVal={price => this.updateConfig({price})}
                                className="form-control form-control-sm"
                            />
                        </div>

                        <div className="col">
                            Markup Type : <select
                                className="form-control form-control-sm"
                                style={{
                                    width: "150px",
                                    display: "inline"
                                }}
                                
                                value={config.price_change_type}
                                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                                onChange={(event) => this.updateConfig({ price_change_type: event.target.value as any})}
                                >
                                {
                                    listType.map(tipe => {
                                    return <option
                                        key={tipe}
                                        value={tipe}
                                    >{ listTypeTitle[tipe] }</option>
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    
                    
                    <button className="btn btn-sm btn-danger"
                        onClick={() => this.props.delete(item.id)}
                    >delete</button>
                </div>
            </div>
        )
    }
}