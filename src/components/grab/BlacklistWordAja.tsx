import React from "react"
import { getFilterWord, updateFilterWord } from "../../api/grab/blacklist_api"
import { emitEvent } from "../../event"
import LineTextarea from "../common/LineTextarea"

interface IState {
    blacklists: string[]
}

export default class BlacklistWordAja extends React.Component<unknown, IState> {
    state: IState = {
        blacklists: [],
    }
    async get(): Promise<void> {
        const res = await getFilterWord('blacklistWordAja')
        this.setState({ blacklists: res.data })
    }

    async save(): Promise<void> {
        await updateFilterWord('blacklistWordAja', this.state.blacklists)
        emitEvent('show_msg', {
            msg: 'Saving berhasil....'
        })
        await this.get()
    }

    async componentDidMount(): Promise<void> {
        await this.get()
    }

    render(): JSX.Element {
        return <div className="form-group">
        <label><strong>BLACKLIST Word or Regex (DELETE KATA):</strong></label>
        <LineTextarea
            placeholder="Masukkan kata yang ingin dihapus"
            rows={10}
            line={this.state.blacklists}
            update={(blacklists: string[]) => this.setState({ blacklists })}
        ></LineTextarea>
        <br/>
        <button className="btn btn-primary btn-sm" type="submit" onClick={() => this.save()}>SAVE</button>
      </div>
    }
}