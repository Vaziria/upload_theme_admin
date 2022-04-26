import React from "react"
import { IAssistenChatTask } from "../../../model/shopee/TaskSetup"
import Checkbox from "../../common/Checkbox"
import SelectedJamOperational from "../../common/SelectedJamOperational"

type IOfflineReply = IAssistenChatTask['offline_reply']

interface IProp {
    value: IOfflineReply
    onChange: (value: IOfflineReply) => unknown
}

export default function AutoReplyOffline(props: IProp): JSX.Element {
    const { value, onChange } = props

    return (
        <div>
            <h4>auto reply Offline</h4>
            <Checkbox
                checked={value.status == 'enabled'}
                onChange={status => onChange({ ...value, status: status ? 'enabled' : 'disabled' })}
            ></Checkbox> Active

            <textarea
                defaultValue={value.content}
                onChange={event => onChange({ ...value, content: event.target.value })}
                rows={3}
                className="form-control"
                placeholder="pesan chat.."
            ></textarea>
            
            <div style={{
                marginTop: '10px',
                marginBottom: '10px'
            }}>
                <SelectedJamOperational
                    value={value.working_days}
                    onChange={jadwal => onChange({ ...value, working_days: jadwal })}
                />
            </div>
            

        </div>
    )
}