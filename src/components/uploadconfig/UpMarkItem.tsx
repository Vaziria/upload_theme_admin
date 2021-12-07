import React from "react"
import { Mark, MarkupItem } from "../../model/markup"
import { InputNumber } from "../common/InputNumber"

interface IProp {
    value: MarkupItem
    deleted: () => unknown
    change: (data: MarkupItem) => unknown
}

interface ListItem {
    name: string
    value: Mark
}

const lists: ListItem[] = [
    { name: "kurang", value: '<' },
    { name: "kurangsama", value: '<=' },
    { name: "lebih", value: '>' },
    { name: "lebihsama", value: '>=' },
    { name: "range", value: 'range' }
]

export default class UpMarkItem extends React.Component<IProp> {
    updateMark(data: Partial<MarkupItem>): void {
        const markup = this.props.value
        this.props.change({
            ...markup,
            ...data
        })
    }

    updateMarkType(e: React.ChangeEvent<HTMLSelectElement>): void {
        const mark = e.target.value as Mark
        let range: string | [string, string] = '0'
        if(mark === 'range') {
            range = ['0', '0']
        } else {
            range = '0'
        }

        this.updateMark({
            mark,
            range
        })
    }

    updateUp(index: number, val: string): void {
        const up = this.props.value.up
        up[index] = val

        this.setState({
            up
        })
    }

    render(): JSX.Element {
        const markup = this.props.value
        let single = 0
        let rangenum: [ number, number ] = [0, 0]
        if(markup.mark !== 'range') {
            single = parseInt(markup.range as string)
        } else {
            rangenum = (markup.range as [string, string]).map(val => parseInt(val)) as [ number, number ]
        }

        
        return <div>  
            <div className="input-group input-group-sm">
                <div className="input-group-prepend">
                <select
                    className="custom-select custom-select-sm"
                    value={markup.mark}
                    onChange={(e) => this.updateMarkType(e)}
                >
                    {
                        lists.map(item => <option key={item.value} value={item.value}>{item.name}</option>)
                    }

                </select>
                </div>
                    { markup.mark !== 'range' &&
                        <InputNumber className="form-control"
                            value={single}
                            changeVal={(value) => this.updateMark({ range: value.toString() })}
                            placeholder="value"
                        />
                    }
                    { markup.mark === 'range' &&
                        <InputNumber className="form-control"
                            value={rangenum[0]}
                            changeVal={(value) => {
                                rangenum[0] = value
                                
                                const rr = rangenum.map(val => val.toString()) as [ string, string ]
                                console.log(rr, 'asdasd')
                                this.updateMark({ range: rr })
                            }}
                            placeholder="value"
                        />
                    }

                    { markup.mark === 'range' &&
                        <InputNumber className="form-control"
                            value={rangenum[1]}
                            changeVal={(value) => {
                                rangenum[1] = value
                                const rr = rangenum.map(val => val.toString()) as [ string, string ]
                                this.updateMark({ range: rr })
                            }}
                            placeholder="value"
                        />
                    }

                <button className="btn btn-danger btn-sm inp-group" type="button" onClick={() => this.props.deleted()}>DELETE</button>
            </div>
            
            <div className="row mb-2">
                <div className="col">
                    <input type="text"
                        className="form-control form-control-sm"
                        value={markup.up[0]}
                        onChange={(e) => this.updateUp(0, e.target.value)}    
                    />
                </div>
                <div className="col">
                    <input type="text"
                        className="form-control form-control-sm"
                        value={markup.up[1]}
                        onChange={(e) => this.updateUp(1, e.target.value)}    
                    />
                </div>
            </div>
            <hr/>
        </div>
    }
}