import React, { FormEvent } from "react"

import { getAccount, IAddAccount, updateAccount } from "../../api/grab/add_account"
import InputText from "../common/InputText"

interface IProps {
    onSubmit?: (account: IAddAccount) => void
}

function AddAccount(props: IProps): JSX.Element {

    const [username, setUsername] = React.useState("")
    const [akunPayload, setAkunPayload] = React.useState<IAddAccount>({
        username: "",
        password: "",
        email: "",
        email_password: ""
    })

    const text = username ? "CHANGE ACCOUNT" : "ADD ACCOUNT"
    function closeModal(): void {
        const closeBtn = document.getElementById("modalAddUser")
        closeBtn?.click()
    }

    async function onSubmit(ev: FormEvent): Promise<void> {
        ev.preventDefault();
        const account = await updateAccount(akunPayload)
        setAkunPayload(account)
        setUsername(account.username)
        closeModal()
        props.onSubmit?.(account)
    }

    React.useEffect(() => {
        getAccount().then(account => {
            setAkunPayload(account)
            setUsername(account.username)
        })
    }, [])
    
    return (
        <div>
            <button
                className="btn btn-sm btn-primary"
                data-toggle="modal"
                data-target="#modalAddUser"
            >{text}</button>

            <div
                className="modal fade"
                id="modalAddUser"
                tabIndex={-1}
                role="dialog"
                aria-labelledby="modalAddUser"
                aria-hidden="true"
            >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-body">
                    <button type="button" id="modalAddUserClose" className="close d-none" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                    </button>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="username">Username</label>
                        <InputText
                            id="username"
                            required
                            value={akunPayload.username}
                            changeVal={username => setAkunPayload(state => ({ ...state, username }))}
                        />
                        <br />
                        <label htmlFor="password">Password</label>
                        <InputText
                            id="password"
                            required
                            value={akunPayload.password}
                            type="password"
                            changeVal={password => setAkunPayload(state => ({ ...state, password }))}
                        />
                        <br />
                        <label htmlFor="email">Email (Opsional)</label>
                        <InputText
                            id="email"
                            value={akunPayload.email}
                            changeVal={email => setAkunPayload(state => ({ ...state, email }))}
                        />
                        <br />
                        <label htmlFor="email_password">Email Password (Opsional)</label>
                        <InputText
                            id="email_password"
                            value={akunPayload.email_password}
                            type="password"
                            changeVal={email_password => setAkunPayload(state => ({ ...state, email_password }))}
                        />
                        <br />
                        <button type="submit" className="btn btn-sm btn-primary">Add Account</button>
                    </form>
                </div>
              </div>
            </div>
          </div>
          {username && <strong>username: {username}</strong>}
        </div>
    )
}

export default AddAccount