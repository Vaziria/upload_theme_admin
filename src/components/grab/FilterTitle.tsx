import React from "react"
import { getFilterTitle, updateFilterTitle } from "../../api/grab/blacklist_api"
import { emitEvent } from "../../event"
import LineTextarea from "../common/LineTextarea"

interface Istate {
    filterdata: string[]
}

export default class FilterTitle extends React.Component<unknown, Istate> {
    state: Istate = {
        filterdata: []
    }

    async componentDidMount(): Promise<void> {
        await this.get()
    }

    async get(): Promise<void> {
        const data = await getFilterTitle()
        this.setState({ filterdata: data.data })
    }
    async save(): Promise<void> {

        await updateFilterTitle(this.state.filterdata)
        emitEvent('show_msg', {
            msg: 'save berhasil...'
        })

        await this.get()
    }

    render(): JSX.Element {
        return <div className="form-group">
            <label><strong>FILTER TITLE (Melewati postingan yang mengandung kata di bawah ini):</strong></label>
            <LineTextarea
                rows={5}
                placeholder="Ketikkan kata yang akan di filter"
                line={this.state.filterdata}
                update={(data: string[]) => this.setState({ filterdata: data })}
            ></LineTextarea>
            <br/>
            <button className="btn btn-primary btn-sm" type="submit" onClick={() => this.save()}>SAVE</button>
        </div>
    }
}