import React from "react"
import { createMarkup, deleteMarkup, getMarkupData, updateMarkup } from "../../api/markup"
import { emitEvent } from "../../event"
import { store } from "../../features"
import { MarkupItem } from "../../model/markup"
import { InputNumber } from "../common/InputNumber"
import MarkupSelect from "../common/MarkupSelect"
import UpMarkItem from "./UpMarkItem"

interface IState {
    markup: string
    markups: MarkupItem[]
    createMark: string
    fix_mark: number
}

export default class SettingMarkup extends React.Component<unknown, IState> {

    state: IState = {
        markup: "",
        markups: [],
        createMark: '',
        fix_mark: 0
    }

    async create(): Promise<void> {
        await createMarkup({
            data: [],
            name: this.state.createMark,
            fix_mark: 0
        })

        store.dispatch({
            type: "markup/add",
            payload: this.state.createMark,
        })

        this.setState({
            createMark: '',
            markup: this.state.createMark
        })
        
        await this.loadMarkItem(this.state.markup)


        emitEvent("show_msg", {
            msg: "Markup created",
        })
    }
    
    async delete(): Promise<void> {
        await deleteMarkup(this.state.markup)
        store.dispatch({
            type: "markup/delete",
            payload: this.state.markup,
        })

        this.setState({
            markup: "",
            markups: []
        })

        emitEvent("show_msg", {
            msg: "Markup deleted",
        })
    }

    async loadMarkItem(markup: string): Promise<void> {
        const data = await getMarkupData(markup)
        this.setState({
            markups: data.data,
            fix_mark: data.fix_mark,
        })
    }

    addMark(): void {
        const mark: MarkupItem = {
            up: ['', ''],
            mark: '>=',
            range: "0",
        }

        this.setState({
            markups: [...this.state.markups, mark]
        })
    }

    async save(): Promise<void> {
        await updateMarkup(this.state.markup, {
            data: this.state.markups,
            fix_mark: this.state.fix_mark
        })

        emitEvent("show_msg", {
            msg: "Markup saved",
        })
    }

    async componentDidMount(): Promise<void> {
        await this.loadMarkItem(this.state.markup)
    }
    async setMarkup(markup: string): Promise<void> {
        this.setState({ markup })
        await this.loadMarkItem(markup)
    }

    render(): JSX.Element {
        return <div className="colss">
            <label>MARKUP :</label>
            <div className="row">
                <div className="col-lg-6">
                    <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-danger inp-group" type="button" onClick={() => this.delete()}>Delete</button>
                    </div>
                    <MarkupSelect
                        value={this.state.markup}
                        onChange={(markup) => this.setMarkup(markup)}
                    ></MarkupSelect>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="input-group input-group-sm mb-3">
                    <div className="input-group-prepend">
                        <button className="btn btn-primary inp-group" type="button" onClick={() => this.create()}>New</button>
                    </div>
                    <input type="text" className="form-control" placeholder="" aria-label="" aria-describedby="basic-addon1"
                        value={this.state.createMark}
                        onChange={(e) => this.setState({ createMark: e.target.value })}
                    />
                    </div>
                </div>
            </div>
            <div className="colss">
                <div className="input-group input-group-sm">
                    <div className="input-group-prepend">
                        <span className="input-group-text" id="basic-addon1">Biaya Tambahan : </span>
                    </div>
                    <InputNumber
                        className="form-control"
                        value={this.state.fix_mark}
                        changeVal={val => this.setState({ fix_mark: val })}
                    ></InputNumber>
                </div>
            </div>
            
            { this.state.markups.map((markup, index) => {
                return <UpMarkItem
                    key={index}
                    value={markup}
                    deleted={() => {
                        const marks = this.state.markups.filter((mark, i) => i !== index)
                        this.setState({
                            markups: marks
                        })
                    } }

                    change={(newmark) => {
                        const marks = this.state.markups.map((mark, i) => {
                            if (i === index) {
                                return newmark
                            }

                            return mark
                        })
                        
                        this.setState({
                            markups: marks
                        })
                    }}
                ></UpMarkItem> 
            })}

            <button className="btn btn-secondary btn-sm" type="button" onClick={() => this.addMark() }>ADD</button>
            <button className="btn btn-primary btn-sm" type="button" onClick={() => this.save()} data-toggle="modal" data-target="#myModal">SAVE</button>
            
        </div>
    }
}