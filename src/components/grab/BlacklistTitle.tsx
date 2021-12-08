import React from "react"
import { getBlacklistTitle, updateBlacklistTitle } from "../../api/grab/blacklist_api"
import { emitEvent } from "../../event"
import LineTextarea from "../common/LineTextarea"

interface IState {
    blacklists: string[]
}

export default class BlacklistTittle extends React.Component<unknown, IState> {
    state: IState = {
        blacklists: [],
    }
    async get(): Promise<void> {
        const data = await getBlacklistTitle()
        if(data.errcode === 0) {
            this.setState({ blacklists: data.data })
        }
        
    }

    async save(): Promise<void> {
        await updateBlacklistTitle(this.state.blacklists)
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
            <label><strong>BLACKLIST TITLE (Menghapus kata dari judul) :</strong></label>
            <LineTextarea
                placeholder="Masukkan kata yang ingin dihapus dari judul"
                rows={5}
                line={this.state.blacklists}
                update={(blacklists: string[]) => this.setState({ blacklists })}
            ></LineTextarea>
            <br/>
            <button className="btn btn-primary btn-sm" type="submit" onClick={() => this.save()}>SAVE</button>
      </div>
    }
}