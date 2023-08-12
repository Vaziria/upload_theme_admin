import React from "react"

import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskTokoUsernameOrUrl extends React.Component<PropGrabTask> {

    render(): JSX.Element {
        const { task, updateData } = this.props

        const checkboxProps: JSX.IntrinsicElements["input"] = {}
        checkboxProps.type = "checkbox"
        checkboxProps.defaultChecked = task.use_filter
        checkboxProps.onChange = () => {
            const use_filter = !this.props.task.use_filter
            updateData({ use_filter })
        }

        const inputProps: JSX.IntrinsicElements["input"] = {}
        inputProps.className = "form-control"
        inputProps.type = "text"
        inputProps.placeholder = "example : list_username_toko.txt"
        inputProps.value = task.toko_username
        inputProps.onChange = (event) => {
            const toko_username = event.target.value
            updateData({ toko_username })
        }

        return <div>
            <label>File txt :</label>&nbsp;
            <input {...checkboxProps} /> use filter
            <input {...inputProps} />
        </div>
    }
}
