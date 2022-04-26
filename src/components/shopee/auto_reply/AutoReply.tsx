import React from "react"
import { IAssistenChatTask } from "../../../model/shopee/TaskSetup"
import Checkbox from "../../common/Checkbox"

type IAutoReply = IAssistenChatTask['chat_setting']

interface IProp {
    value: IAutoReply
    onChange: (value: IAutoReply) => unknown
}

export function AutoReply(props: IProp): JSX.Element {
    const { value, onChange } = props

    return (
        <div>
            <h4>auto reply</h4>
            <Checkbox
                checked={value.auto_reply_status == 'enabled'}
                onChange={auto_reply_status => onChange({ ...value, auto_reply_status: auto_reply_status ? 'enabled' : 'disabled' })}
            ></Checkbox> Active

        <textarea
            defaultValue={value.auto_reply_content}
            onChange={event => onChange({ ...value, auto_reply_content: event.target.value })}
            rows={3}
            className="form-control"
            placeholder="pesan chat.."
        ></textarea>

        </div>
    )
}