import React from "react"

import { PropGrabTask } from "./PropGrabTask"

export default class GrabTaskProductUrl extends React.Component<PropGrabTask> {

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
        inputProps.placeholder = "example : list_product.txt"
        inputProps.value = task.product_url
        inputProps.onChange = (event) => {
            const product_url = event.target.value
            updateData({ product_url })
        }

        return <div>
            <label>File txt :</label>&nbsp;
            <input {...checkboxProps} /> use filter
            <input {...inputProps} />
        </div>
    }
}
